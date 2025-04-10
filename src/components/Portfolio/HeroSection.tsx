
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-primary mb-4">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Rajesh Khetavath
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-muted-foreground">
            I build things for the web.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building Scalable apps which are human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-primary" size={24} />
        </a>
      </div>

      {/* Background decorative elements */}
      <div className={cn(
        "absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl",
        "animate-[pulse_8s_ease-in-out_infinite]"
      )} />
      <div className={cn(
        "absolute bottom-1/4 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl",
        "animate-[pulse_6s_ease-in-out_infinite]"
      )} />
    </section>
  );
};

export default HeroSection;
