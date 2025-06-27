import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Software engineering workspace"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t.about.description1}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t.about.description2}
              </p>

              {/* Yenilənmiş Kartlar Bölməsi */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">3+</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.about.yearsExperience}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">15+</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.about.projectsCompleted}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">10+</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.about.technologiesUsed}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">100%</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.about.satisfiedClients}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}