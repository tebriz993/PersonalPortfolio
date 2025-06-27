import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

// Original project image
import ecommerceImage from "@assets/ECommerceMicroservicePicture.png";

// Mock additional projects
const staticProjects = [
  {
    id: 2,
    name: "Law Project Management",
    description: "A comprehensive legal case management system built with C# .NET and Entity Framework.",
    image: "/assets/LawProject.png",
    technologies: ["C#", ".NET", "Entity Framework", "SQL Server"],
    githubUrl: "https://github.com/tebriz993/Law-Firm-Management",
    liveUrl: null,
    featured: true
  },
  {
    id: 3,
    name: "Job Search Application",
    description: "Modern job search platform with advanced filtering and matching algorithms.",
    image: "/assets/JobSearchApp.png", 
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/tebriz993/JobSearchApp",
    liveUrl: null,
    featured: true
  },
  {
    id: 4,
    name: "DendClub Social Platform",
    description: "Social networking platform for fitness enthusiasts with workout tracking.",
    image: "/assets/DendClub.png",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/tebriz993/DendClub",
    liveUrl: null,
    featured: true
  },
  {
    id: 5,
    name: "Shop E-Commerce",
    description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
    image: "/assets/ShopECommerce.png",
    technologies: ["React", "Redux", "Node.js", "Stripe API"],
    githubUrl: "https://github.com/tebriz993/ShopECommerce",
    liveUrl: null,
    featured: true
  },
  {
    id: 6,
    name: "E-Commerce Microservices",
    description: "Scalable microservices architecture for organic food e-commerce with containerization.",
    image: ecommerceImage,
    technologies: ["C#", ".NET Core", "Docker", "Kubernetes", "RabbitMQ"],
    githubUrl: "https://github.com/tebriz993/ECommerceMicroservice",
    liveUrl: null,
    featured: true
  },
];

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2"
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              {isExpanded ? 'Collapse' : 'Expand'}
            </Button>
          </div>

          {isExpanded && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staticProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjZjMfNGY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTEyLjVMMTc1IDg3LjVMMjAwIDYyLjVMMjI1IDg3LjVMMjAwIDExMi41WiIgZmlsbD0iIzk5YTNhZiIvPgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}