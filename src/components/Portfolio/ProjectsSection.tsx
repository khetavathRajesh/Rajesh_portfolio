import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "SEWA",
    description: "Created a messaging service utilizing Meta-approved customized templates and messages ,Developed comprehensive modules including Campaign Broadcast management, Live chat/history features and Opt In/Out management, Business Owner can Manage agent permissions (RBAC).",
    image: "/SEWA.png",
    technologies: ["React", "Node.js", "MongoDB", "RESTful", "Mapbox-public api"],
    liveLink: "https://whatsapp.simpo.ai/",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "CMIS",
    description: "Architected software that automates day-to-day operations of school management (from initial inquiry to student graduation), Implemented dynamic software architecture with no static typing constraints, Developed comprehensive staff and student management modules.",
    image: "/CMIS.png",
    technologies: ["Angular", "TypeScript", "MongoDB", "Firebase" , "Azure"],
    liveLink: "https://dev.cmis.tejsoft.com/",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "The Layer Shop",
    description: "A Full-pledged E-Commerce website which meets the requirements of a end-use to business owner requirements.",
    image: "/THELAYERSHOP.png",
    technologies: ["Wordpress", "HTML", "CSS"],
    liveLink: "https://thelayershop.com/",
    gradient: "from-pink-500 to-red-600"
  },
  {
    title: "Simpo.ai",
    description: "3 Click website generator, meets all your requirement weather its an informational or Ecommerce , includes lot more than just a website (CRM,Blogs,Staff,Apps module)",
    image: "/Simpo.png",
    technologies: ["Angular", "RESTful API", "Geolocation API", "CSS Modules"],
    liveLink: "https://simpo.ai/",
    gradient: "from-orange-500 to-yellow-500"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-card/30 reveal-up">
      <div className="container mx-auto">
        <h2 className="section-title animate-fade-in-up">Some Things I've Built</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "card-hover overflow-hidden border-0 h-full glass-effect smooth-transition",
                "animate-fade-in group reveal-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Removed color overlay - just keeping a subtle dark overlay for text readability if needed */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors smooth-transition"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end">
                <Button size="sm" className="btn-primary smooth-transition">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
