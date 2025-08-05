// server/vite.ts (TAM VƏ DÜZƏLDİLMİŞ)

import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config"; // server qovluğundan bir üst səviyyədəki konfiqurasiya
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// Bu funksiya YALNIZ development rejimində işləyir və olduğu kimi qalır
export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    ...viteConfig,
    server: { 
        middlewareMode: true,
        hmr: { server } 
    },
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path.resolve(process.cwd(), "client", "index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

// Bu funksiya YALNIZ production rejimində işləyir və düzəldilməlidir
export function serveStatic(app: Express) {
  // Sizin `vite build` əmriniz nəticələri `dist/client` qovluğuna yığır.
  // `esbuild` isə serveri `dist/index.js`-ə.
  // Biz compile olunmuş serverdən (dist/index.js) client-in olduğu qovluğa (dist/client) müraciət edirik.
  const clientDistPath = path.resolve(process.cwd(), 'dist/client');
  
  if (!fs.existsSync(clientDistPath)) {
    console.error(`Client build directory not found at: ${clientDistPath}`);
    app.use((_req, res) => {
        res.status(500).send("Server error: Client build not found.");
    });
    return;
  }
  
  // Statik faylları (CSS, JS, şəkillər) `dist/client` qovluğundan göstər
  app.use(express.static(clientDistPath));

  // Bütün digər sorğuları `dist/client/index.html`-ə yönləndir ki, React Router işləsin
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(clientDistPath, "index.html"));
  });
}