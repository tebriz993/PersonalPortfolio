import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Software engineering workspace"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a Full Stack Software Engineer with 3+ years of experience, I specialize in building scalable web applications for a diverse range of clients and projects using C#, .NET, React.js, and cloud services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have a proven track record of leading development teams and architecting robust microservice solutions. My expertise spans from backend API development to intuitive frontend interfaces, with a strong focus on clean code and efficient, modular architectures.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center h-28 flex items-center justify-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <p className="text-sm text-muted-foreground">Completed Projects</p>
                </CardContent>
              </Card>
              <Card className="text-center h-28 flex items-center justify-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">AI & ML</div>
                  <p className="text-sm text-muted-foreground">Continuous Learning</p>
                </CardContent>
              </Card>
              <Card className="text-center h-28 flex items-center justify-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <p className="text-sm text-muted-foreground">Global Conferences</p>
                </CardContent>
              </Card>
              <Card className="text-center h-28 flex items-center justify-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">3</div>
                  <p className="text-sm text-muted-foreground">Published Articles</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}