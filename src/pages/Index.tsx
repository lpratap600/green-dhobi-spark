
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

      {/* Progress timeline animation styles */}
      <style jsx global>{`
        .progress-timeline::before {
          transform: scaleY(0);
          transition: transform 1.5s ease;
        }
        
        .progress-timeline.progress-active::before {
          transform: scaleY(1);
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }
        
        .timeline-dot-container::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(76, 175, 80, 0.3);
          z-index: -1;
          animation: pulse-ring 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
