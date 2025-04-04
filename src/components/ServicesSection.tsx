
import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WashingMachine, Wind, Droplets } from 'lucide-react';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('laundry');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, i * 150);
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

  const services = [
    {
      id: 'laundry',
      title: 'Laundry (Wet Cleaning)',
      icon: <WashingMachine className="h-14 w-14 text-gdhobi-green" />,
      description: 'Our premium wet cleaning service includes washing, drying, and folding your everyday clothes with expert care and eco-friendly detergents.',
      features: [
        'Advanced washing technology',
        'Stain treatment included',
        'Fabric-specific detergents',
        'Carefully folded and packaged'
      ],
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 'drycleaning',
      title: 'Dry Cleaning',
      icon: <Wind className="h-14 w-14 text-gdhobi-green" />,
      description: 'Premium dry cleaning service for your delicate garments, suits, dresses, and special fabrics that require expert care without water.',
      features: [
        'Gentle solvent cleaning',
        'No water damage risk',
        'Preserves fabric structure',
        'Perfect for delicate items'
      ],
      image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1515&q=80"
    },
    {
      id: 'specialcare',
      title: 'Special Care Items',
      icon: <Droplets className="h-14 w-14 text-gdhobi-green" />,
      description: 'Specialized cleaning services for items requiring extra attention like sarees, lehengas, heavy blankets, and bedding.',
      features: [
        'Custom cleaning solutions',
        'Special handling process',
        'Color and fabric preservation',
        'Perfect for heirlooms & valuables'
      ],
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gdhobi-neutral-light py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium <span className="text-gdhobi-green">Services</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the finest laundry and dry cleaning services with attention to detail and fabric-specific care.
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="laundry" className="w-full">
            <TabsList className="w-full flex mb-8 bg-transparent justify-center animate-on-scroll">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id}
                  value={service.id}
                  className={`flex-1 max-w-xs flex items-center gap-2 py-4 px-6 data-[state=active]:bg-gdhobi-green data-[state=active]:text-white transition-all duration-300`}
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="pt-4">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="order-2 md:order-1 animate-on-scroll">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gdhobi-green/10 rounded-xl p-3">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-2 h-2 bg-gdhobi-green rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-md border border-gdhobi-neutral">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Available Add-ons:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gdhobi-green/10 text-gdhobi-green-dark text-sm py-1 px-3 rounded-full">Stain Removal</span>
                        <span className="bg-gdhobi-green/10 text-gdhobi-green-dark text-sm py-1 px-3 rounded-full">Perfume Wash</span>
                        <span className="bg-gdhobi-green/10 text-gdhobi-green-dark text-sm py-1 px-3 rounded-full">Express Service</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 animate-on-scroll">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
