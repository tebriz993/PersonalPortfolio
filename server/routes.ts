// server/src/routes.ts

import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from 'resend'; // SendGrid yerinə Resend import edirik

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API proxy endpoint (bu hissə olduğu kimi qalır)
  app.get("/api/github/repos", async (req, res) => {
    // ... (bu hissəyə toxunmuruq, olduğu kimi qalır) ...
    try {
      const response = await fetch(
        "https://api.github.com/users/tebriz993/repos?sort=updated&per_page=20",
        {
          headers: {
            "User-Agent": "Portfolio-Website",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos = await response.json();
      
      const filteredRepos = repos
        .filter((repo: any) => !repo.fork)
        .sort((a: any, b: any) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });

      res.json(filteredRepos);
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      res.status(500).json({ 
        error: "Failed to fetch repositories",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // --- DƏYİŞİKLİK BURADADIR: Contact form endpoint-i Resend ilə ---
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          error: "Missing required fields",
          message: "Name, email, subject, and message are required"
        });
      }
      
      // Resend API açarını yoxlayırıq
      if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ 
          error: "Email service not configured",
          message: "Resend API key is missing"
        });
      }

      // Resend-i başladırıq
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Email-i göndəririk
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // Resend-in test üçün verdiyi standart email
        to: 'latifovtebriz@gmail.com', // Sizin şəxsi emailiniz
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      res.json({ 
        success: true,
        message: "Email sent successfully using Resend"
      });

    } catch (error) {
      console.error("Error sending email with Resend:", error);
      res.status(500).json({ 
        error: "Failed to send email",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}