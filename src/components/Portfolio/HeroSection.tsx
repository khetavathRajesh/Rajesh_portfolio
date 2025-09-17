
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/40 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            👋 Welcome to my Portfolio
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-800 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rajesh Khetavath
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            A passionate developer who loves creating Fast and functional web applications with modern technologies with scalability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="btn-primary text-lg px-8 py-4 rounded-full shadow-lg">
              <a href="#projects" className="w-full h-full flex items-center justify-center">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-blue-600 dark:text-blue-400 border-2 border-blue-500/60 hover:bg-blue-500 hover:text-white text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-white/20 dark:bg-black/20 shadow-lg hover:shadow-blue-400/25 transition-all duration-300 font-semibold"
            >
              <a href="#contact" className="w-full h-full flex items-center justify-center">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-blue-500 dark:text-blue-400" size={24} />
        </a>
      </div>

      {/* Pleasant background decorative elements */}
      <div className="absolute top-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/4 w-24 sm:w-48 h-24 sm:h-48 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
