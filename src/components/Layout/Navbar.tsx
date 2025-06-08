
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
            className="text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 navbar-glass z-40 transform transition-transform ease-in-out duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-8 space-y-8 text-lg">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="/Khetavath_Rajesh.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary px-6 py-2 w-full"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
