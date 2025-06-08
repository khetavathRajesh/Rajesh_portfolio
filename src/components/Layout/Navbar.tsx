
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          scrolled 
            ? 'navbar-glass shadow-2xl py-2 border-b border-white/10' 
            : 'navbar-glass-transparent py-4'
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nav-item"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/Khetavath_Rajesh.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 btn btn-outline px-4 py-2"
            >
              Resume
            </a>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-foreground focus:outline-none z-60 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  Menu
                </span>
                <button
                  onClick={toggleMenu}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Navigation Items */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-6">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              
              {/* Footer */}
              <div className="p-6 border-t border-border">
                <a 
                  href="/Khetavath_Rajesh.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full py-3 text-center"
                  onClick={toggleMenu}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
