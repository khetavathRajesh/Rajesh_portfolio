
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden gradient-bg">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-sm font-medium mb-6 animate-pulse-glow">
            👋 CYBER_PORTFOLIO
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="glitch" data-text="Rajesh: Where Code">
              Rajesh: Where Code
            </span>
            <br />
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Meets Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            The passionate developer that learns and adapts alongside you.
            Currently focused on building scalable apps with cutting-edge technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="btn-primary text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30">
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-cyan-400 border-2 border-cyan-400/60 hover:bg-cyan-400 hover:text-black text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-black/20 shadow-xl hover:shadow-cyan-400/25 transition-all duration-300 font-semibold"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-cyan-400" size={24} />
        </a>
      </div>

      {/* Enhanced Background decorative elements with cyber effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float border border-cyan-500/20" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-pulse-slow border border-purple-500/30" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-float border border-blue-500/20" style={{ animationDelay: '2s' }} />
      
      {/* Dynamic Cyber Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
