import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github} from "lucide-react";
import augeermsImg from '@/assets/augeerms.png';
import verdeTemporaImg from '@/assets/verde-tempora.png';
import vibecoding from '@/assets/eksperimen.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Design Thinking & Web Development",
      description: "Verde Tempora Watch Brand (SMKDEV x UAS Design Thinking)",
      image: verdeTemporaImg,
      tech: ["AI/ML", "Typscript", "Node.js"],
      type: "Creative",
      liveurl: "https://verde-tempora.vercel.app/",
      repourl: "https://github.com/Threesionnn/verde-tempora"
    },
    {
      id: 2,
      title: "Vibe Coding & Digital Experiments",
      description: "Interactive Web Concepts (GitHub Portfolio)",
      image: vibecoding,
      tech: ["CSS", "Javascript", "Creative Coding"],
      type: "Professional",
      liveurl: "https://github.com/Threesionnn",
      repourl: null
    },
    {
      id: 3,
      title: "Music Production",
      description: "Augeerms | Experimental Electronica / Future Garage",
      image: augeermsImg,
      tech: ["Fl Studio", "Mixing & Mastering", "Sound Design"],
      type: "Music",
      liveurl: "https://augeerms-portfolio.vercel.app/",
      repourl: null,
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Creative":
        return "bg-purple-500 text-white";
      case "Music":
        return "bg-blue-500 text-white";
      case "Professional":
        return "bg-accent text-accent-foreground"; 
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-20 px-6 bg-cream-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            A selection of my recent work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white border-sage-border/30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col relative">
              <Badge className={`absolute top-4 right-4 z-10 ${getTypeColor(project.type)}`}>
                {project.type}
              </Badge>

              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-semibold text-charcoal-text mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="outline" className="border-moss-green/50 text-moss-green">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <Button 
                    className="bg-moss-green hover:bg-sage-green text-cream-text flex-1"
                    asChild
                  >
                    <a href={project.liveurl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                  
                  {project.repourl && (
                    <Button 
                      variant="outline" 
                      className="border-charcoal-text/50 text-charcoal-text flex-1"
                      asChild
                    >
                      <a href={project.repourl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;