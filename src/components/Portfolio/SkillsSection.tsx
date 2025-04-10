
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Django", "PHP", "REST APIs"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "GitHub Actions","Netlify",  "Figma"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={cn(
                "card p-6 card-hover",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm", 
                      "bg-secondary/50 hover:bg-primary/20 transition-colors",
                      "border border-border hover:border-primary/50"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
