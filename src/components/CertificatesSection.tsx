import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, ChevronDown, ChevronUp } from "lucide-react";

const CertificatesSection = () => {
  const allCertificates = [
    {
      id: 1,
      title: "Software Tester",
      institution: "Growia",
      year: "2025",
      type: "Professional",
      description: "Manual testing, bug reporting, test case design",
      url: "/sertifikat-software-tester.pdf"
    },
    {
      id: 2,
      title: "2025 R Programming Bootcamp for Absolute Beginners",
      institution: "Udemy Course",
      year: "2025",
      type: "Professional",
      description: "Data analysts, Statistics, Data Scientist",
      url: "/UC1Cert.pdf"
    },
    {
      id: 3,
      title: "Learn Python by coding 10 mini projects",
      institution: "Udemy Course",
      year: "2025",
      type: "Professional",
      description: "Building projects using Python programming",
      url: "/UC2Cert.pdf"
    },
    {
      id: 4,
      title: "Mixing Start to Finish in FL",
      institution: "Production Music Live",
      year: "2023",
      type: "Creative",
      description: "Learning FL Studio, mixing techniques, sound design",
    },
    {
      id: 5,
      title: "Web Development on Zero Coding",
      institution: "EdTech Academy",
      year: "2022",
      type: "Professional",
      description: "building functional websites using tilda (no-code tools)",
      url: "/sertifikat-web-dev-nocode.pdf"
    }
  ];

  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professional":
        return "bg-accent text-accent-foreground";
      case "Creative":
        return "bg-purple-500 text-white";
      case "Music":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  
  const certificatesToShow = isExpanded ? allCertificates : allCertificates.slice(0, 3);

  return (
    <section className="section-white py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Certificates
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            A collection of my certifications and professional development achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesToShow.map(cert => (
            <Card 
              key={cert.id} 
              onMouseLeave={() => setSelectedCert(null)}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative"
            >
              <Badge 
                variant="secondary"
                className={`absolute top-4 right-4 z-10 ${getTypeColor(cert.type)}`}
              >
                {cert.type}
              </Badge>
              <CardContent 
                onMouseEnter={() => setSelectedCert(cert.id)} 
                className="p-6 flex flex-col flex-grow text-center"
              >
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-portfolio-black group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{cert.institution}</p>
                  <p className="text-sm text-accent">{cert.year}</p>
                </div>

                {selectedCert === cert.id && (
                  <div className="pt-4 mt-4 border-t border-gray-200 animate-fade-in">
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
                  <div className="mt-4 pt-4 border-t border-transparent">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="w-full text-accent hover:bg-accent/10 transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {allCertificates.length > 3 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent/10 transition-all duration-300"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="mr-2 h-5 w-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-5 w-5" />
                  Show All
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;