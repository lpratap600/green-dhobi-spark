
import React, { useEffect, useRef } from 'react';
import { Truck, WashingMachine, PackageCheck, Clock, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stepsRef.current) {
              stepsRef.current.classList.add('animate');
            }
            
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const timelineSteps = [
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Free Pickup",
      description: "Our professional staff picks up your laundry from your doorstep at your scheduled time"
    },
    {
      icon: <WashingMachine className="h-5 w-5" />,
      title: "Premium Cleaning",
      description: "Your clothes are sorted and cleaned following best practices for each fabric type"
    },
    {
      icon: <PackageCheck className="h-5 w-5" />,
      title: "Quality Check & Packaging",
      description: "Each item is inspected, carefully folded, and packed in eco-friendly packaging"
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Free Delivery",
      description: "Your fresh, clean clothes are delivered right back to your doorstep"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="section-padding bg-gdhobi-green text-white py-20 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-white/5 -top-20 -left-20 animate-float"></div>
        <div className="absolute w-80 h-80 rounded-full bg-white/5 top-40 -right-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 rounded-full bg-white/5 bottom-10 left-1/4 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-20 h-20 rounded-full bg-white/10 top-1/4 right-1/4 animate-pulse-glow"></div>
        <div className="absolute w-32 h-32 rounded-full border border-white/20 top-1/3 left-2/3 animate-rotate-slow"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It <span className="text-white">Works</span></h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience seamless laundry service with our simple 4-step process, completing the entire cycle within 24 hours.
          </p>
          <div className="mt-6 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 animate-pulse-glow">
            <Clock className="h-5 w-5 mr-2 animate-bounce-subtle" />
            <span className="font-medium">Free Pickup & Delivery within 24 Hours</span>
          </div>
        </div>

        {/* Modern Stepper Timeline */}
        <div ref={stepsRef} className="max-w-4xl mx-auto relative px-4 stagger-animation">
          {timelineSteps.map((step, index) => (
            <div key={index} className="modern-step-timeline mb-8" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="modern-step-icon">
                {step.icon}
              </div>
              <div 
                className="modern-step-content"
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                <div className="flex items-start md:items-center md:flex-row flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gdhobi-green">{step.title}</h3>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-4 flex items-center justify-center rounded-full w-8 h-8 bg-gdhobi-green/10 text-gdhobi-green">
                    <span className="font-bold text-sm">0{index + 1}</span>
                  </div>
                </div>
                
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gdhobi-green/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white text-gdhobi-green rounded-xl px-6 py-4 shadow-lg animate-on-scroll animate-pulse-glow">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-gdhobi-green animate-bounce-subtle" />
              <h3 className="text-xl font-semibold">Need it faster?</h3>
            </div>
            <p className="mt-2">Ask about our Express Service for same-day delivery!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
