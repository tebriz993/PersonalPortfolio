import type { Express } from "express";
import { createServer, type Server } from "http";
import { MailService } from '@sendgrid/mail';

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API proxy endpoint
  app.get("/api/github/repos", async (req, res) => {
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
      
      // Filter out forks and sort by stars/activity
      const filteredRepos = repos
        .filter((repo: any) => !repo.fork)
        .sort((a: any, b: any) => {
          // Sort by stars first, then by update date
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

  // Contact form email endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          error: "Missing required fields",
          message: "Name, email, subject, and message are required"
        });
      }

      // Check if SendGrid API key is available
      if (!process.env.SENDGRID_API_KEY) {
        return res.status(500).json({ 
          error: "Email service not configured",
          message: "SendGrid API key is missing"
        });
      }

      // Initialize SendGrid
      const mailService = new MailService();
      mailService.setApiKey(process.env.SENDGRID_API_KEY);

      // Prepare email content
      const emailContent = {
        to: 'latifovtebriz@gmail.com', // Your email address
        from: 'latifovtebriz@gmail.com', // Must be verified in SendGrid
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Sent from your portfolio website contact form</small></p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
          
          Sent from your portfolio website contact form
        `
      };

      // Send email
      await mailService.send(emailContent);

      res.json({ 
        success: true,
        message: "Email sent successfully"
      });

    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ 
        error: "Failed to send email",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
