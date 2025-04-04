
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-gdhobi-green font-display font-bold text-2xl">Green Dhobi</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-gdhobi-green font-medium transition-colors">Services</a>
          <a href="#pricing" className="text-foreground hover:text-gdhobi-green font-medium transition-colors">Pricing</a>
          <a href="#process" className="text-foreground hover:text-gdhobi-green font-medium transition-colors">How It Works</a>
          <a href="#testimonials" className="text-foreground hover:text-gdhobi-green font-medium transition-colors">Testimonials</a>
          <a href="#faq" className="text-foreground hover:text-gdhobi-green font-medium transition-colors">FAQ</a>
          <Button className="btn-primary">Schedule Pickup</Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#services" className="text-foreground hover:text-gdhobi-green font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#pricing" className="text-foreground hover:text-gdhobi-green font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#process" className="text-foreground hover:text-gdhobi-green font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" className="text-foreground hover:text-gdhobi-green font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#faq" className="text-foreground hover:text-gdhobi-green font-medium transition-colors py-2" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <Button className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>Schedule Pickup</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
