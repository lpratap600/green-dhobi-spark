
import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const [pricingMode, setPricingMode] = useState('perkg');
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

  const perKgPricing = [
    {
      title: "Laundry",
      price: "₹70",
      unit: "per kg",
      description: "Regular clothes washing, drying & folding",
      features: [
        "All everyday garments",
        "Machine wash & dry",
        "Folded & packed",
        "Free pickup & delivery"
      ],
      popular: false
    },
    {
      title: "Dry Clean",
      price: "₹100",
      unit: "per kg",
      description: "Premium dry cleaning for delicate fabrics",
      features: [
        "Suits & formal wear",
        "Delicate fabrics",
        "Stain treatment included",
        "Free pickup & delivery"
      ],
      popular: true
    }
  ];

  const perPiecePricing = [
    {
      title: "Regular Items",
      items: [
        { name: "Shirt", price: "₹30" },
        { name: "T-shirt", price: "₹25" },
        { name: "Trousers", price: "₹40" },
        { name: "Jeans", price: "₹45" },
        { name: "Shorts", price: "₹30" }
      ]
    },
    {
      title: "Special Items",
      items: [
        { name: "Saree", price: "₹180" },
        { name: "Suit (2-piece)", price: "₹220" },
        { name: "Blanket (Single)", price: "₹150" },
        { name: "Bedsheet", price: "₹80" },
        { name: "Curtain", price: "₹100" }
      ]
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="section-padding bg-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gdhobi-green/5 animate-float"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-gdhobi-green/5 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -bottom-10 right-20 w-40 h-40 rounded-full bg-gdhobi-accent/5 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple & Transparent <span className="text-gdhobi-green">Pricing</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer competitive rates with no hidden charges. Choose between per kg pricing or individual garment pricing.
          </p>
        </div>

        <div className="flex justify-center mb-12 animate-on-scroll animate-expand">
          <Tabs defaultValue="perkg" className="w-full max-w-md" onValueChange={setPricingMode}>
            <TabsList className="grid w-full grid-cols-2 p-1 rounded-full bg-gdhobi-neutral">
              <TabsTrigger 
                value="perkg" 
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-gdhobi-green data-[state=active]:shadow-md transition-all duration-300"
              >
                Per KG Pricing
              </TabsTrigger>
              <TabsTrigger 
                value="perpiece" 
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-gdhobi-green data-[state=active]:shadow-md transition-all duration-300"
              >
                Per Piece Pricing
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="perkg">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {perKgPricing.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`pricing-card animate-on-scroll ${plan.popular ? 'border-gdhobi-green ring-2 ring-gdhobi-green/20 relative animate-pulse-glow' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gdhobi-green text-white py-1 px-3 rounded-full text-xs font-semibold flex items-center gap-1.5 animate-bounce-subtle">
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-semibold">{plan.title}</h3>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.unit}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                          <Check className="h-5 w-5 text-gdhobi-green mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full ${plan.popular ? 'btn-primary animate-shimmer overflow-hidden' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                      Schedule Pickup <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="perpiece">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {perPiecePricing.map((category, index) => (
                  <div 
                    key={index} 
                    className="pricing-card animate-on-scroll"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                    
                    <div className="space-y-4">
                      {category.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex justify-between items-center py-2 border-b border-dashed border-gray-200 hover:bg-gdhobi-green/5 transition-colors rounded px-2"
                          style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                        >
                          <span>{item.name}</span>
                          <span className="font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <Button className="w-full btn-primary">
                        Schedule Pickup <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-gdhobi-neutral-light rounded-xl p-6 animate-on-scroll animate-blur-in">
          <h4 className="font-semibold text-lg mb-4 flex items-center">
            <Sparkles className="h-5 w-5 text-gdhobi-green mr-2 animate-pulse" />
            Optional Add-ons
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {name: "Stain Removal", price: "₹20 per stain"},
              {name: "Perfume Wash", price: "₹30 per kg"},
              {name: "Express Service (Same Day)", price: "+50% of total"},
              {name: "Fabric Softener", price: "₹15 per kg"}
            ].map((addon, idx) => (
              <div 
                key={idx} 
                className="flex justify-between items-center p-2 hover:bg-white rounded transition-colors"
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                <span>{addon.name}</span>
                <span className="font-semibold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
