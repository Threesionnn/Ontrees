import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Software Tester",
      institution: "Growia",
      year: "2025",
      type: "Professional",
      description: "Manual testing, bug reporting, test case design",
      url: "/serifikat-growia.pdf"
    },
    {
      id: 2,
      title: "Mixing Start to Finish in FL",
      institution: "Production Music Live",
      year: "2023",
      type: "Creative",
      description: "Learning FL Studio, mixing techniques, sound design"
    },
    {
      id: 3,
      title: "Web Development on Zero Coding",
      institution: "EdTech Academy",
      year: "2022",
      type: "Professional",
      description: "building functional websites using tilda (no-code tools)",
      url: "/sertifikat-edtech.pdf"
    }
  ];

  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professional":
        return "bg-accent text-accent-foreground";
      case "Creative":
        return "bg-purple-500 text-white";
      case "Design":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="section-gray py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-portfolio-black">
            Certificates & Qualifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development across multiple disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <Award className="h-8 w-8 text-accent flex-shrink-0" />
                  <Badge className={`text-xs ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-portfolio-black group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{cert.institution}</p>
                  <p className="text-sm text-accent">{cert.year}</p>
                </div>

                {selectedCert === cert.id && (
                  <div className="pt-4 border-t border-gray-200 animate-fade-in">
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="w-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                )}
                
                {selectedCert !== cert.id && (
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="w-full text-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    View Details
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;