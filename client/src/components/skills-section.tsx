import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Server, Code, Cloud, Database, ChevronDown, ChevronUp } from "lucide-react";
import { 
  SiSharp, SiDotnet, SiReact, SiJavascript, SiTypescript, 
  SiTailwindcss, SiDocker, SiKubernetes, SiAmazon, 
  SiMongodb, SiPostgresql, 
  SiRedis, SiMysql, SiGit, SiGithub, 
  SiPostman, SiSwagger, SiRabbitmq, SiApachekafka, SiElasticsearch,
  SiNodedotjs, SiExpress, SiVuedotjs, SiAngular, SiBootstrap,
  SiMui, SiNextdotjs, SiNuxtdotjs, SiSqlite, SiOracle,
  SiFirebase, SiSupabase, SiGraphql,
  SiApollographql, SiJenkins, SiGitlab, SiNginx, SiLinux
} from "react-icons/si";

// Define skill categories with progress percentages
const backendSkills = [
  { name: "C# & .NET", icon: SiSharp, color: "text-purple-600", progress: 95 },
  { name: "ASP.NET Core", icon: SiDotnet, color: "text-purple-700", progress: 90 },
  { name: "Microservices", icon: Server, color: "text-blue-600", progress: 85 },
  { name: "Entity Framework", icon: Database, color: "text-blue-700", progress: 88 },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-600", progress: 75 },
  { name: "Redis", icon: SiRedis, color: "text-red-600", progress: 70 },
  { name: "Apache Kafka", icon: SiApachekafka, color: "text-black", progress: 65 },
  { name: "GraphQL/Swagger/Postman", icon: SiGraphql, color: "text-pink-600", progress: 90 },
  { name: "Modular Architectures", icon: Server, color: "text-blue-800", progress: 95 },
];

const frontendSkills = [
  { name: "React.js", icon: SiReact, color: "text-blue-500", progress: 85 },
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-500", progress: 90 },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", progress: 80 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", progress: 85 },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600", progress: 85 },
  { name: "Material UI", icon: SiMui, color: "text-blue-600", progress: 80 },
  { name: "HTML5 & CSS3", icon: Code, color: "text-orange-600", progress: 95 },
  { name: "Redux", icon: SiReact, color: "text-purple-500", progress: 70 },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black", progress: 55 },
  { name: "VS Code", icon: Code, color: "text-blue-600", progress: 95 },
];

const devopsCloudSkills = [
  { name: "Docker", icon: SiDocker, color: "text-blue-600", progress: 85 },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-700", progress: 75 },
  { name: "AWS", icon: SiAmazon, color: "text-orange-500", progress: 80 },
  { name: "CI/CD Pipelines", icon: Server, color: "text-green-600", progress: 80 },
  { name: "Terraform", icon: Cloud, color: "text-purple-600", progress: 75 },
  { name: "Prometheus & Grafana", icon: Server, color: "text-orange-600", progress: 70 },
  { name: "Azure", icon: Cloud, color: "text-blue-600", progress: 75 },
  { name: "Google Cloud", icon: Cloud, color: "text-blue-500", progress: 75 },
  { name: "Git", icon: SiGit, color: "text-orange-600", progress: 95 },
  { name: "GitHub", icon: SiGithub, color: "text-black", progress: 90 },
  { name: "GitLab", icon: SiGitlab, color: "text-orange-600", progress: 80 },
  { name: "Jenkins", icon: SiJenkins, color: "text-blue-800", progress: 75 },
  { name: "Nginx", icon: SiNginx, color: "text-green-700", progress: 75 },
  { name: "Linux", icon: SiLinux, color: "text-black", progress: 80 },
];

const databaseSkills = [
  { name: "MS SQL Server", icon: Database, color: "text-blue-800", progress: 90 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700", progress: 85 },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600", progress: 85 },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600", progress: 70 },
  { name: "Oracle", icon: SiOracle, color: "text-red-700", progress: 75 },
  { name: "Elasticsearch", icon: SiElasticsearch, color: "text-yellow-600", progress: 70 },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-600", progress: 75 },
];

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  const skillCategories = [
    {
      title: "Backend Development", 
      icon: Server,
      skills: backendSkills,
      color: "text-purple-600"
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: frontendSkills,
      color: "text-blue-600"
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: devopsCloudSkills,
      color: "text-green-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: databaseSkills,
      color: "text-purple-600"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Technical Skills
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
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="h-fit">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div key={skillIndex} className="flex items-center gap-3">
                              <div className={`${skill.color} flex-shrink-0`}>
                                <SkillIcon className="h-5 w-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-medium truncate">{skill.name}</span>
                                  <span className="text-xs text-muted-foreground">{skill.progress}%</span>
                                </div>
                                <Progress value={skill.progress} className="h-2" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}