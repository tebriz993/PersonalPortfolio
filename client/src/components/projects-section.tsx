import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

// Original project image
import ecommerceImage from "@assets/ECommerceMicroservice.png";

// New project images
import JobSearchAppImage from "@assets/JobSearchApp.png";
import SoftwareVillageImage from "@assets/SoftwareVillage.png";
import DendClubImage from "@assets/DendClub.png";
import ECommerceAppImage from "@assets/ECommerceApp.png";
import LawProjectImage from "@assets/LawProject.png";
import ShopECommerceImage from "@assets/ShopECommerce.png";

const featuredProjects = [
  {
    id: "ecommerce-microservice",
    name: "ECommerceMicroservice",
    description: "Modern microservices-based e-commerce platform with distributed architecture.",
    image: ecommerceImage,
    technologies: ["C#", ".NET", "REST API", "RabbitMQ", "Elasticsearch", "Redis"],
    github: "https://github.com/tebriz993/ECommerceMicroservice",
    demo: null,
    featured: false,
    status: "Pending" 
  },
  {
    id: "job-search-app",
    name: "JobSearchApp",
    description: "A comprehensive platform for searching and managing job applications.",
    image: JobSearchAppImage,
    technologies: ["C#", ".NET", "RestAPI", "Clean Architecture"],
    github: "https://github.com/tebriz993/JobSearch-App",
    demo: null,
    featured: true
  },
  {
    id: "software-village",
    name: "SoftwareVillage",
    description: "A project for the Software Village course, demonstrating core software principles.",
    image: SoftwareVillageImage,
    technologies: ["C#", ".NET Core MVC", "MVVM", "MVC Architecture"],
    github: "https://github.com/tebriz993/SoftwareVillage",
    demo: null,
    featured: true
  },
  {
    id: "dendclub",
    name: "DendClub",
    description: "A healthcare system project designed to manage patient and clinical data efficiently.",
    image: DendClubImage,
    technologies: ["C#", ".NET", "RestAPI", "JavaScript", "TypeScript", "React.js"],
    github: "https://github.com/tebriz993/dendclub",
    demo: null,
    featured: true
  },
  {
    id: "ecommerce-app",
    name: "ECommerceApp",
    description: "A full-featured e-commerce application built with an N-layer architecture.",
    image: ECommerceAppImage,
    technologies: ["C#", ".NET", ".NET MVC", "MVVM", "N-layer Architecture", "jQuery"],
    github: "https://github.com/tebriz993/ECommerceApp",
    demo: null,
    featured: true
  },
  {
    id: "law-project",
    name: "LawProject",
    description: "A specialized application designed to assist legal professionals and law firms.",
    image: LawProjectImage,
    technologies: ["C#", ".NET Core MVC", "MVVM"],
    github: "https://github.com/tebriz993/Law_Project",
    demo: null,
    featured: true
  },
  {
    id: "shop-ecommerce",
    name: "ShopECommerce",
    description: "A corporate e-commerce solution with Onion Architecture and Elasticsearch.",
    image: ShopECommerceImage,
    technologies: ["C#", ".NET", "RestAPI", "Onion Architecture", "ElasticSearch"],
    github: "https://github.com/tebriz993/ShopECommerce",
    demo: null,
    featured: true
  },
];

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center justify-center mb-12 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            role="button"
            aria-expanded={isExpanded}
            aria-controls="projects-grid"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Featured Projects
            </h2>
            <span className="ml-4">
              {isExpanded ? <ChevronUp className="h-7 w-7" /> : <ChevronDown className="h-7 w-7" />}
            </span>
          </div>

          <div
            id="projects-grid"
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: isExpanded ? '5000px' : '0px' }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20 flex flex-col"
                >
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <div className="h-48 relative rounded-t-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 flex flex-col items-end gap-y-2">
                        {project.featured && (
                          <Badge className="bg-black/40 text-white/90 backdrop-blur-sm border-white/20">
                            Featured
                          </Badge>
                        )}
                        {project.status && (
                          <Badge variant="secondary" className="bg-blue-900 text-blue-100 border-blue-700">
                            {project.status}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto flex space-x-2 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/tebriz993"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}