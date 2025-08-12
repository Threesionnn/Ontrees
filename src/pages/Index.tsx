import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
