import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/language-context";
import { Server, Code, Cloud, Database, ChevronDown, ChevronUp } from "lucide-react";
import { 
  SiSharp, SiDotnet, SiReact, SiJavascript, SiTypescript, 
  SiTailwindcss, SiDocker, SiKubernetes, SiAmazon, 
  SiPostgresql, SiMongodb, SiOracle, SiMysql,
  SiRabbitmq, SiRedis, SiGraphql, SiSwagger, SiPostman,
  SiTerraform, SiPrometheus, SiGrafana,
  SiApachekafka, SiElasticsearch
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "C# & .NET", level: 95 },
      { name: "ASP.NET Core", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "Entity Framework", level: 88 },
      { name: "RabbitMQ", level: 75 },
      { name: "Redis", level: 70 },
      { name: "GraphQL/Swagger/Postman", level: 90 },
      { name: "Modular Architectures", level: 95 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 & CSS3", level: 95 }, // Əlavə edildi
      { name: "Redux", level: 70 },       // Əlavə edildi
      { name: "Next.js", level: 55 },       // Əlavə edildi
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Terraform", level: 75 },
      { name: "Prometheus & Grafana", level: 70 },
      { name: "Azure", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MS SQL Server", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },          // Əlavə edildi
      { name: "MongoDB", level: 70 },
      { name: "Oracle", level: 75 },
      { name: "Elasticsearch", level: 70 },  // Əlavə edildi
    ],
  },
];

const technologies = [
  { name: "C#", icon: SiSharp, color: "text-purple-600" },
  { name: ".NET", icon: SiDotnet, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "MS SQL Server", icon: SiMysql, color: "text-red-600" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-600" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "Swagger", icon: SiSwagger, color: "text-green-500" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
  { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
  { name: "Azure", icon: Cloud, color: "text-blue-500" },
  { name: "Apache Kafka", icon: SiApachekafka, color: "text-black" },
  { name: "ElasticSearch", icon: SiElasticsearch, color: "text-yellow-600" },
];

export function SkillsSection() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(true);

  const skillCategories = [
    {
      title: t.skills.categories.backend,
      icon: Server,
      skills: [
        { name: "C# & .NET", level: 95 },
        { name: "ASP.NET Core", level: 90 },
        { name: "Microservices", level: 85 },
        { name: "Entity Framework", level: 88 },
        { name: "RabbitMQ", level: 75 },
        { name: "Redis", level: 70 },
        { name: "GraphQL/Swagger/Postman", level: 90 },
        { name: "Modular Architectures", level: 95 },
      ],
    },
    {
      title: t.skills.categories.frontend,
      icon: Code,
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 80 },
        { name: "State Management", level: 85 },
      ],
    },
    {
      title: t.skills.categories.database,
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "MS SQL Server", level: 85 },
        { name: "Oracle", level: 75 },
        { name: "Database Design", level: 90 },
        { name: "Query Optimization", level: 85 },
        { name: "Data Modeling", level: 88 },
        { name: "NoSQL", level: 80 },
      ],
    },
    {
      title: t.skills.categories.tools,
      icon: Cloud,
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "AWS/Azure", level: 75 },
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 80 },
        { name: "Monitoring", level: 75 },
        { name: "Terraform", level: 70 },
        { name: "Testing", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center justify-center mb-12 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            role="button"
            aria-expanded={isExpanded}
            aria-controls="skills-content"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              {t.skills.title}
            </h2>
            <span className="ml-4">
              {isExpanded ? <ChevronUp className="h-7 w-7" /> : <ChevronDown className="h-7 w-7" />}
            </span>
          </div>

          <div
            id="skills-content"
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: isExpanded ? '5000px' : '0' }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {skillCategories.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-8">Technologies I Work With</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <tech.icon className={`text-2xl ${tech.color}`} />
                    </div>
                    <span className="text-sm mt-2">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}