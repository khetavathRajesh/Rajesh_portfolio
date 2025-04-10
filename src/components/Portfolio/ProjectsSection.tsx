
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
    // repoLink: "https://github.com"
  },
  {
    title: "CMIS",
    description: "Architected software that automates day-to-day operations of school management (from initial inquiry to student graduation), Implemented dynamic software architecture with no static typing constraints, Developed comprehensive staff and student management modules.",
    image: "/CMIS.png",
    technologies: ["Angular", "TypeScript", "MongoDB", "Firebase" , "Azure"],
    liveLink: "https://dev.cmis.tejsoft.com/",
    // repoLink: "https://github.com"
  },
  {
    title: "The Layer Shop",
    description: "A Full-pledged E-Commerce website which meets the requirements of a end-use to business owner requirements.",
    image: "/THELAYERSHOP.png",
    technologies: ["Wordpress", "HTML", "CSS"],
    liveLink: "https://example.comhttps://thelayershop.com/",
    // repoLink: "https://github.com"
  },
  {
    title: "Simpo.ai",
    description: "3 Click website generator, meets all your requirement weather its an informational or Ecommerce , includes lot more than just a website (CRM,Blogs,Staff,Apps module)",
    image: "/Simpo.png",
    technologies: ["Angular", "RESTful API", "Geolocation API", "CSS Modules"],
    liveLink: "https://simpo.ai/",
    // repoLink: "https://github."
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-title">Some Things I've Built</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "card-hover overflow-hidden border border-border h-full",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between gap-4">
                <Button variant="outline" size="sm" asChild>
                  {/* <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a> */}
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
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
