
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ContactSection from "@/components/Portfolio/ContactSection";
import Footer from "@/components/Portfolio/Footer";
import ScrollToTop from "@/components/Portfolio/ScrollToTop";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
