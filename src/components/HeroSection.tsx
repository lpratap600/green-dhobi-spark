
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, Clock, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          if (elementsRef.current) {
            elementsRef.current.classList.add('animate');
          }
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with animation effect */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtMi0xMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNG04LTZ2MzBIMTRWMThoMzJtMi0ySDEydjM0aDM2VjE2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-white/20 animate-rotate-slow"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full border border-white/20 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
          <div className="absolute top-1/4 right-1/3 w-6 h-6 rounded-full bg-white/30 animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-8 h-8 rounded-full bg-white/20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div ref={heroRef} className="opacity-0 transition-opacity duration-1000">
            <div className="stagger-animation animate">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                India's Premium Laundry & Dry Cleaning Service
              </h1>
              <p className="text-xl text-white opacity-90 mb-8">
                Pickup & Delivery at Your Doorstep
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary py-6 px-8 text-lg flex items-center gap-2 group animate-pulse-glow">
                  <Calendar size={20} className="group-hover:animate-bounce-subtle" />
                  Schedule Pickup
                  <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 py-6 px-8 text-lg flex items-center gap-2 group">
                  <MessageCircle size={20} className="group-hover:animate-bounce-subtle" />
                  Chat on WhatsApp
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/20 py-6 px-8 text-lg flex items-center gap-2">
                  <Clock size={20} />
                  Check Pricing
                </Button>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full py-2 px-4 flex items-center animate-blur-in">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className={`w-8 h-8 rounded-full border-2 border-white bg-gdhobi-green-${i % 2 ? 'light' : 'dark'} flex items-center justify-center text-white text-xs font-bold animate-float`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-white text-sm">
                    <span className="font-semibold">500+</span> Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative" ref={elementsRef}>
            <div className="w-full h-[400px] rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl overflow-hidden animate-float-up">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotate-slow opacity-20">
                  <div className="w-full h-full rounded-full border-4 border-dashed border-white"></div>
                </div>
                <div className="w-60 h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft">
                  <div className="w-full h-full rounded-full border-4 border-dashed border-white/50 opacity-20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center animate-blur-in" style={{ animationDelay: '0.5s' }}>
                  <div className="text-white text-center max-w-xs">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center animate-pulse-glow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-pulse">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="7" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold animate-slide-up" style={{ animationDelay: '0.7s' }}>Premium Cleaning Technology</h3>
                    <p className="mt-2 opacity-80 animate-slide-up" style={{ animationDelay: '0.9s' }}>Best machines in the world for dry and wet cleaning</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg animate-bounce-soft flex items-center justify-center p-4">
              <div className="text-gdhobi-green text-center">
                <p className="text-xs font-semibold">FREE</p>
                <p className="text-xs">Pickup & Delivery</p>
              </div>
            </div>
            
            {/* Additional floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gdhobi-green rounded-lg shadow-lg animate-float flex items-center justify-center transform rotate-12">
              <div className="text-white text-center">
                <p className="text-xs font-semibold">24h</p>
                <p className="text-[10px]">Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider with animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24 animate-slide-up">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
