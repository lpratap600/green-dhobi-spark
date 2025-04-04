
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, QrCode, Check } from 'lucide-react';

const WhatsappSection = () => {
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

  const whatsappFeatures = [
    "Schedule pickups in seconds",
    "Track your order status in real-time",
    "Receive digital receipts",
    "Update preferences for your laundry",
    "Instant customer support"
  ];

  return (
    <section ref={sectionRef} className="section-padding py-20 bg-gdhobi-neutral-light">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16 animate-on-scroll">
              <div className="inline-flex items-center text-gdhobi-green font-semibold mb-3 bg-gdhobi-green/10 py-1 px-3 rounded-full">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>Fast & Easy Communication</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Schedule Your Laundry via <span className="text-gdhobi-green">WhatsApp</span> in Seconds
              </h2>
              <p className="text-gray-600 mb-8">
                No app to download or account to create. Simply chat with our WhatsApp bot to schedule pickups, track orders, and get support anytime.
              </p>
              
              <ul className="space-y-3 mb-8">
                {whatsappFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-gdhobi-green mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="btn-primary py-6 px-8 text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat with Us on WhatsApp
              </Button>
            </div>
            
            <div className="bg-[#25D366] relative h-full min-h-[400px] animate-on-scroll">
              <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b">
                    <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Green Dhobi</h3>
                      <p className="text-sm text-gray-500">WhatsApp Business</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-4">
                    <div className="bg-[#f0f0f0] rounded-lg p-3 ml-auto max-w-[80%]">
                      <p className="text-sm">Hi, I'd like to schedule a laundry pickup</p>
                    </div>
                    
                    <div className="bg-[#e2f7cb] rounded-lg p-3 mr-auto max-w-[80%]">
                      <p className="text-sm">Hello! I'm Green Dhobi's assistant. I'd be happy to help you schedule a pickup.</p>
                    </div>
                    
                    <div className="bg-[#e2f7cb] rounded-lg p-3 mr-auto max-w-[80%]">
                      <p className="text-sm">When would you like us to pick up your laundry?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                      <QrCode className="h-14 w-14 text-[#25D366]" />
                      <div>
                        <p className="text-sm font-medium">Scan to chat with us</p>
                        <p className="text-xs text-gray-500">or click the button below</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                    Open WhatsApp
                  </Button>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-tl-full"></div>
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-br-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappSection;
