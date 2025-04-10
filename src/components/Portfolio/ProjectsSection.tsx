
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard that aggregates and displays analytics from various social media platforms.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Firebase", "Chart.js", "Tailwind CSS"],
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Weather Application",
    description: "A responsive weather application that provides real-time weather information and forecasts based on user location.",
    image: "/placeholder.svg",
    technologies: ["React", "OpenWeather API", "Geolocation API", "CSS Modules"],
    liveLink: "https://example.com",
    repoLink: "https://github.com"
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
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
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
