// server/index.ts (YENİ VƏ SON VERSİYA)

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
// DİQQƏT: vite ilə bağlı importları yuxarıdan silirik! Onları aşağıda dinamik import edəcəyik.

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware-lər olduğu kimi qalır...
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      
      // log funksiyası vite.ts-dən gəldiyi üçün onu da dinamik import edəcəyik
      // console.log istifadə edərək sadələşdirək
      console.log(`[express] ${logLine}`);
    }
  });

  next();
});

// --- ƏSAS DƏYİŞİKLİK BURADADIR ---
(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Mühiti yoxlayırıq
  if (process.env.NODE_ENV === "development") {
    // Yalnız development-də vite ilə bağlı modulu dinamik import edirik
    const viteModule = await import("./vite.js"); // .js uzantısı vacibdir!
    await viteModule.setupVite(app, server);
    console.log("Vite dev server is running.");
  } else {
    // Production-da isə başqa bir modulu import edirik
    const viteModule = await import("./vite.js"); // .js uzantısı vacibdir!
    viteModule.serveStatic(app);
    console.log("Serving static files for production.");
  }

  const port = process.env.PORT || 5000;
  server.listen({
    port: Number(port),
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    console.log(`Server listening on port ${port}`);
  });
})();