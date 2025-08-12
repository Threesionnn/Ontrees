import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section-white min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative">
            <img
              src={profilePhoto}
              alt="Sion Yehezkiel - Portofolio"
              className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-accent/20 animate-fade-in"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 to-transparent"></div>
          </div>
        </div>

        <div className="text-center lg:text-left space-y-8 order-2 lg:order-2 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-portfolio-black leading-tight">
              Sion Yehezkiel Nababan
            </h1>
            <p className="text-xl lg:text-2xl text-accent font-medium">
              Digital & AI Enthusiast | Music Producer
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl text-justify">
              I organize data with precision, solve problems with technology, and bring ideas to life both in the workplace and through music. 
              From managing information to creating digital solutions, I connect creativity with efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="button-gold text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="/CV_Sion.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 border-2 border-portfolio-black hover:bg-portfolio-black hover:text-portfolio-white transition-all duration-300"
                onClick={handleScrollToContact}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;