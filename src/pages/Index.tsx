
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import WhatsappSection from '@/components/WhatsappSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Add custom animations on initial load
    const revealElement = (el: Element, delay: number) => {
      setTimeout(() => {
        el.classList.add('animated');
      }, delay);
    };

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, i) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        revealElement(el, i * 100);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ProcessSection />
      <WhatsappSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />

      {/* Add timeline animation styles directly to index.css instead */}
    </div>
  );
};

export default Index;
