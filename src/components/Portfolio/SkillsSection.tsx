
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Python", "Django", "PHP", "REST APIs"],
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    gradient: "from-pink-500 to-red-600"
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "GitHub Actions","Netlify",  "Figma"],
    gradient: "from-orange-500 to-yellow-500"
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
                "card-hover glass-effect p-8 rounded-2xl group",
                "animate-fade-in relative overflow-hidden"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn(
                "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
                category.gradient
              )} />
              
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium text-center", 
                      "bg-gradient-to-r from-primary/10 to-orange-400/10",
                      "border border-primary/20 hover:border-primary/50",
                      "hover:bg-gradient-to-r hover:from-primary/20 hover:to-orange-400/20",
                      "transition-all duration-200 transform hover:scale-105"
                    )}
                  >
                    {skill}
                  </div>
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
