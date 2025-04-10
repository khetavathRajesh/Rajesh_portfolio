
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p>
              Hello! I'm John Doe, a passionate software developer with expertise in building exceptional websites, applications, and everything in between.
            </p>
            <p>
              My journey in software development began in 2016 when I decided to try creating a custom website - turns out hacking together a custom reblog button taught me a lot about HTML & CSS! Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a large corporation.
            </p>
            <p>
              I focus on building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden border-2 border-primary/50 w-full aspect-square md:max-w-md mx-auto">
              {/* Profile image would go here */}
              <div className="bg-secondary h-full w-full flex items-center justify-center">
                <span className="text-lg text-muted-foreground">Profile Image</span>
              </div>
              
              {/* Decorative elements */}
              <div className={cn(
                "absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100",
                "transition-opacity duration-300"
              )} />
            </div>
            
            {/* Border decorative element */}
            <div className={cn(
              "absolute -z-10 border-2 border-primary",
              "w-full h-full rounded-md top-4 left-4",
              "transition-all duration-300 group-hover:top-2 group-hover:left-2"
            )} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
