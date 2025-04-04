
import React, { useEffect, useRef } from 'react';
import { Truck, WashingMachine, PackageCheck, Clock } from 'lucide-react';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, i * 200);
            });

            if (timelineRef.current) {
              timelineRef.current.classList.add('progress-active');
            }
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
      icon: <Truck className="h-6 w-6" />,
      title: "Free Pickup",
      description: "Our professional staff picks up your laundry from your doorstep at your scheduled time"
    },
    {
      icon: <WashingMachine className="h-6 w-6" />,
      title: "Premium Cleaning",
      description: "Your clothes are sorted and cleaned following best practices for each fabric type"
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: "Quality Check & Packaging",
      description: "Each item is inspected, carefully folded, and packed in eco-friendly packaging"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Delivery",
      description: "Your fresh, clean clothes are delivered right back to your doorstep"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="section-padding bg-gdhobi-green text-white py-20 relative overflow-hidden">
      {/* Background circles for decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-white/5 -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-white/5 top-40 -right-20"></div>
        <div className="absolute w-64 h-64 rounded-full bg-white/5 bottom-10 left-1/4"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It <span className="text-white">Works</span></h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience seamless laundry service with our simple 4-step process, completing the entire cycle within 24 hours.
          </p>
          <div className="mt-6 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full py-2 px-4">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">Free Pickup & Delivery within 24 Hours</span>
          </div>
        </div>

        <div 
          ref={timelineRef}
          className="max-w-4xl mx-auto relative px-4 pt-10 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[15px] sm:before:left-1/2 before:w-0.5 before:bg-white/30 before:transition-all before:duration-1000 before:origin-top before:scale-y-0 before:h-full progress-timeline"
        >
          {timelineSteps.map((step, index) => (
            <div 
              key={index} 
              className={`relative z-10 mb-12 sm:mb-16 animate-on-scroll ${index % 2 === 0 ? 'sm:pr-8 sm:text-right sm:ml-auto sm:mr-auto sm:ml-0' : 'sm:pl-8 sm:ml-auto sm:mr-auto sm:mr-0'} sm:w-1/2 pl-12 sm:pl-0`}
            >
              <div className={`timeline-dot-container absolute top-0 left-0 sm:left-auto ${index % 2 === 0 ? 'sm:-left-4' : 'sm:-right-4'}`}>
                <div className="timeline-dot w-8 h-8 rounded-full bg-white flex items-center justify-center text-gdhobi-green">
                  {step.icon}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white text-gdhobi-green rounded-xl px-6 py-4 shadow-lg animate-on-scroll">
            <h3 className="text-xl font-semibold">Need it faster?</h3>
            <p className="mt-2">Ask about our Express Service for same-day delivery!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
