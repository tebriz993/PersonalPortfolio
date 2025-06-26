import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, ChevronDown, ChevronUp, Download } from "lucide-react";


const education = [
  {
    title: "Advanced Back-end Development",
    institution: "Uniser IT Academy",
    description: "C#, .NET and Microservice Architecture",
    period: "11/2023 - 04/2024",
    badge: "100% Scholarship",
  },
  {
    title: "Back-end Development",
    institution: "Software Village",
    description: "C#, .NET, MVC, MVVM, API",
    period: "07/2023 - 11/2023",
  },
  {
    title: "Computer Engineering (EN)",
    institution: "Baku Engineering University",
    description: "Bachelor's Degree (English)",
    period: "09/2022 - Present",
  },
];

const achievements = [
  {
    title: "Published Research",
    description:
      'Will artificial intelligence replace humans?',
    organization: "International British Congress - London, UK",
    period: "07/2024",
    type: "publication",
    downloadLink: "/assets/Article-AI-by-Tabriz-Latifov.pdf",
    downloadName: "Article-AI-by-Tabriz-Latifov.pdf",
  },
  {
    title: "Published Research",
    description:
      'The role of Software Architectures in Space Systems',
    organization: "IAC Astronautical Federation Conference 2025 - Sydney, Australia",
    period: "pending",
    type: "publication",
  },
  {
    title: "Published Research",
    description:
      'Application of Blockchain technology in the medical field',
    organization: "SCOPUS",
    period: "pending",
    type: "publication",
  },
  {
    title: "Advanced Front-end Development",
    description: "Certificate",
    organization: "MyMentorship and Development Agency",
    period: "06/2024 - 09/2024",
    type: "certificate",
  },
  {
    title: "JavaScript",
    description: "Certificate",
    organization: "CISCO Networking Academy",
    period: "08/2023",
    type: "certificate",
    downloadLink: "/assets/CISCO-Certificate.png",
    downloadName: "CISCO-Certificate.png",
  },
  {
    title: "Climate Change Hackathon COP29",
    description: "2nd Place Winner",
    organization: "Azerbaijan Republic Youth Fund",
    period: "09/2024",
    type: "award",
  },
  {
    title: "Algorithms & Data Structures",
    description: "Sorting, Searching, Divide and Conquer",
    organization: "Stanford University (Coursera)",
    period: "Completed",
    type: "certificate",
    downloadLink: "/assets/Stanford-Algorithms-Coursera.pdf",
    downloadName: "Stanford-Algorithms-Coursera.pdf",
  },
  {
    title: "Computer Science and Programming using Python",
    description: "Sorting, Searching, Divide and Conquer",
    organization: "Massachusetts Institute of Technology (EDX)",
    period: "Completed",
    type: "certificate",
    downloadLink: "/assets/MITx-6.00.pdf",
    downloadName: "MITx-6.00.pdf",
  },
  {
    title: "C# Programming",
    description: "Certificate",
    organization: "Coursera",
    period: "Completed",
    type: "certificate",
    downloadLink: "/assets/Coursera-CSharp.pdf",
    downloadName: "Coursera-CSharp.pdf",
  },
  {
    title: "C++ Programming",
    description: "Certificate",
    organization: "Coursera",
    period: "Completed",
    type: "certificate",
    downloadLink: "/assets/Coursera-CPlusPlus.pdf",
    downloadName: "Coursera-CPlusPlus.pdf",
  },
  {
    title: "Junction X Hackhathon",
    description: "Participated",
    organization: "Europe's largest hackathon",
    period: "11/2024",
    type: "award",
  },
];

export function EducationSection() {
  const [isEducationExpanded, setIsEducationExpanded] = useState(true);
  const [isAchievementsExpanded, setIsAchievementsExpanded] = useState(true);

  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Column */}
            <div>
              <div
                className="flex items-center justify-between mb-6 cursor-pointer"
                onClick={() => setIsEducationExpanded(!isEducationExpanded)}
              >
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                {isEducationExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isEducationExpanded ? '2000px' : '0' }} // Dəyər artırıldı
              >
                <div className="space-y-6 pt-1">
                  {education.map((edu, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold">{edu.title}</h4>
                          {edu.badge && (
                            <Badge variant="default">{edu.badge}</Badge>
                          )}
                        </div>
                        <p className="text-primary font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground">{edu.description}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {edu.period}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Achievements Column */}
            <div>
              <div
                className="flex items-center justify-between mb-6 cursor-pointer"
                onClick={() => setIsAchievementsExpanded(!isAchievementsExpanded)}
              >
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
                </div>
                {isAchievementsExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isAchievementsExpanded ? '2000px' : '0' }} // Dəyər artırıldı
              >
                <div className="space-y-6 pt-1">
                  {achievements.map((achievement, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold">
                            {achievement.title}
                          </h4>
                          <Badge
                            variant={
                              achievement.type === "award"
                                ? "default"
                                : achievement.type === "publication"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {achievement.type === "award"
                              ? "Award"
                              : achievement.type === "publication"
                              ? "Publication"
                              : "Certificate"}
                          </Badge>
                        </div>
                        <div className="text-primary font-medium">
                          {(achievement as any).downloadLink ? (
                            <div className="flex items-center justify-between">
                              <span>{achievement.description}</span>
                              <button
                                onClick={() => downloadFile((achievement as any).downloadLink, (achievement as any).downloadName)}
                                className="ml-2 p-2 rounded-md hover:bg-muted transition-colors"
                                title="Download"
                              >
                                <Download className="h-4 w-4" />
                              </button>
                            </div>
                          ) : (
                            achievement.description
                          )}
                        </div>
                        <p className="text-muted-foreground">
                          {achievement.organization}
                        </p>
                        <div className="mt-2">
                          {achievement.period.toLowerCase() === 'pending' ? (
                            <Badge variant="secondary" className="italic">
                              Pending
                            </Badge>
                          ) : (
                            <p className="text-sm text-muted-foreground">
                              {achievement.period}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}