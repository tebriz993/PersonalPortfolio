import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Freelancer",
    location: "Remote",
    period: "05/2025 - Present",
    description:
      "Architecting and implementing end-to-end software solutions, leveraging a microservices backend (C#, .NET) to power engaging and responsive frontend applications built with React.js.",
    technologies: ["C#", ".NET", "React.js", "JavaScript", "TypeScript", "SQL", "Azure/AWS"],
    current: true,
  },
  {
    title: "Back-end Instructor",
    company: "Software Village & CodeWorld.az",
    location: "Azerbaijan",
    period: "08/2024 - Present",
    description:
      "Teaching advanced C# and .NET concepts to aspiring developers, focusing on clean code principles and best practices.",
    technologies: ["C#", ".NET", "Teaching", "Mentoring"],
    current: true,
  },
  {
    title: "Software Developer (C#, .NET)",
    company: "Crocusoft (Part-time)",
    location: "Remote",
    period: "12/2024 - 05/2025",
    description:
      "Developing software solutions using C# and .NET technologies, participating in various company projects and implementations.",
    technologies: ["C#", ".NET", "Software Development"],
    current: false,
  },
  {
    title: "Full Stack Software Developer",
    company: "DendClub (Hybrid)",
    location: "Azerbaijan",
    period: "10/2024 - 05/2025",
    description:
      "Led a full-stack development team, implementing scalable solutions using C#, .NET, Docker, Kubernetes, and React.js.",
    technologies: ["Team Leadership", "Docker", "Kubernetes", "React.js"],
    current: false,
  },
  {
    title: "Middle ICT On-site Technical Support Engineer (COP29)",
    company: "KRONOS ICT TEAM, Australia team (Full-time)",
    location: "Baku, Azerbaijan",
    period: "09/2024 - 12/2024",
    description:
      "Provided technical support and infrastructure management for COP29 conference, ensuring seamless ICT operations.",
    technologies: ["Technical Support", "Infrastructure", "ICT Management"],
    current: false,
  },
  {
    title: "Full Stack Software Developer",
    company: "TIC (Remote)",
    location: "USA",
    period: "12/2023 - 12/2024",
    description:
      "Developed and maintained full-stack applications using modern web technologies and cloud services.",
    technologies: ["Full Stack", "Cloud Services", "Web Development"],
    current: false,
  },
];

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div
            className="flex items-center justify-center mb-12 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            role="button"
            aria-expanded={isExpanded}
            aria-controls="experience-content"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Work Experience
            </h2>
            <span className="ml-4">
              {isExpanded ? <ChevronUp className="h-7 w-7" /> : <ChevronDown className="h-7 w-7" />}
            </span>
          </div>

          <div
            id="experience-content"
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: isExpanded ? '5000px' : '0' }}
          >
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className={`${
                    exp.current ? "border-l-4 border-l-primary" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.location}</p>
                      </div>
                      <Badge
                        variant={exp.current ? "default" : "secondary"}
                        className="mt-2 md:mt-0"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}