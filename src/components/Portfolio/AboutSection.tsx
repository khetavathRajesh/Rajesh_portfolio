
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="space-y-6">
            <div className="gradient-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Precision Engineering Meets Adaptive Intelligence
              </h3>
              <p className="text-lg leading-relaxed">
                Hello! I'm Rajesh Khetavath, a passionate software developer with expertise in building exceptional websites, applications, and everything in between.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>My journey in software development began in 2023 when I decided to do internship at Innovya Technologies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>I focus on building accessible, inclusive products and digital experiences</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>I bring my commitment to design excellence and user-centered thinking to every project</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <Avatar className="w-full h-full max-w-md mx-auto rounded-2xl border-4 border-primary/20 shadow-2xl">
                <AvatarImage 
                  src="/Profile.jpg" 
                  alt="Profile Picture" 
                  className="object-cover w-full h-full rounded-2xl hover:scale-110 transition-transform duration-500"
                />
              </Avatar>
            </div>
            
            <div className={cn(
              "absolute -z-10 bg-gradient-to-br from-primary/20 to-orange-400/20",
              "w-full h-full rounded-2xl top-6 left-6",
              "transition-all duration-300 group-hover:top-3 group-hover:left-3"
            )} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
