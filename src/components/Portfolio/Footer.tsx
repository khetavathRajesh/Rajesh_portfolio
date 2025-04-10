
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/khetavathRajesh", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rajesh-khetavath-753422200/", label: "LinkedIn" },
    // { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/khetavath_rajesh/", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:Khetavathrajeshxvi@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Designed & Built by Rajesh Khetavath
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            © {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
