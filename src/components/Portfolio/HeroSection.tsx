
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden gradient-bg">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
            👋 Purpose
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Rajesh: Where Code
            <br />
            <span className="block">Meets Innovation</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            The passionate developer that learns and adapts alongside you.
            Currently focused on building scalable apps which are human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="btn-primary text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-orange-500/25">
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-2 border-white/60 hover:bg-white hover:text-orange-500 text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-white/25 transition-all duration-300 font-semibold"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-white" size={24} />
        </a>
      </div>

      {/* Enhanced Background decorative elements with dynamic bubbles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-300/20 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-300/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Dynamic Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>
    </section>
  );
};

export default HeroSection;
