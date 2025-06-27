import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Freelance",
    period: "2020 - Present",
    location: "Remote",
    description: "Developed and maintained full-stack web applications using modern technologies. Specialized in creating scalable, responsive solutions for various clients across different industries.",
    technologies: ["C#", ".NET", "React", "TypeScript", "PostgreSQL", "Docker"],
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "MyMentorship",
    period: "2019 - 2020",
    location: "Baku, Azerbaijan",
    description: "Built interactive user interfaces and enhanced user experience for educational platform. Collaborated with backend team to integrate APIs and optimize application performance.",
    technologies: ["React", "JavaScript", "CSS3", "REST APIs"],
    current: false,
  },
  {
    title: "Backend Developer",
    company: "Software Village",
    period: "2018 - 2019",
    location: "Baku, Azerbaijan", 
    description: "Developed robust backend systems and APIs. Worked on database design, server architecture, and implementing business logic for enterprise applications.",
    technologies: ["C#", ".NET Core", "SQL Server", "Entity Framework"],
    current: false,
  },
];

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional Experience
            </h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>

          {isExpanded && (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative">
                  {exp.current && (
                    <div className="absolute -top-2 -right-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                        Current
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-3">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="self-start mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
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