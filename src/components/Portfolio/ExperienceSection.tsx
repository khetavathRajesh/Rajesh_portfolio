
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Proficonlabs",
    position: "Software Engineer",
    period: "July 2024 - Present",
    description: [
      "Lead the development of a new customer-facing portal using Angular and TypeScript",
      // "Implemented CI/CD pipelines that reduced deployment time by 70%",
      "Mentored junior developers and conducted technical interviews",
      "Optimized application performance, reducing load times by 40% by allowing Microservices Architecture and DOM structure of the project"
    ],
    technologies: ["Angluar", "TypeScript", "Node.js", "AWS", "Firebase", "RESTful api"]
  },
  {
    company: "Innovya Technologies",
    position: "Frontend Developer",
    period: "June 2023 - August 2023",
    description: ["Designed and implemented a proof-of-concept website featuring price estimation mechanism utilizing machine learning and Django technologies"
    ],
    technologies: ["dJango", "Python", "ML", "PostgreSQL", "GIT"]
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("0");
  
  return (
    <section id="experience" className="bg-card/30">
      <div className="container mx-auto">
        <h2 className="section-title">Where I've Worked</h2>
        
        <div className="mt-12">
          <Tabs 
            defaultValue="0" 
            orientation="vertical"
            onValueChange={setActiveTab}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <TabsList className="flex flex-row md:flex-col h-auto bg-transparent space-x-2 md:space-x-0 md:space-y-1 overflow-x-auto md:overflow-visible">
                {experiences.map((exp, index) => (
                  <TabsTrigger 
                    key={index}
                    value={index.toString()}
                    className={cn(
                      "text-left justify-start border-b-2 md:border-b-0 md:border-l-2 px-4 py-2",
                      "data-[state=active]:border-primary data-[state=active]:text-primary",
                      activeTab === index.toString() ? "border-primary text-primary" : "border-transparent"
                    )}
                  >
                    {exp.company}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="flex-1 min-h-[320px]">
                {experiences.map((exp, index) => (
                  <TabsContent
                    key={index}
                    value={index.toString()}
                    className={cn("animate-fade-in", activeTab === index.toString() ? "block" : "hidden")}
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold" >
                        {exp.position} <span className="text-primary" >@ {exp.company}</span>
                      </h3>
                      <p className="text-muted-foreground">{exp.period}</p>
                      
                      <ul className="space-y-2 mt-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
