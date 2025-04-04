
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Star } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    { id: 1, title: "Premium Quality", description: "We use only the best detergents and fabric treatments" },
    { id: 2, title: "Eco-Friendly Process", description: "Our cleaning methods minimize water waste and use biodegradable products" },
    { id: 3, title: "Advanced Technology", description: "Latest machines for both dry and wet cleaning with optimal results" },
    { id: 4, title: "Trained Professionals", description: "Our team is trained to handle all types of fabrics and stains" }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-gdhobi-green">Green Dhobi</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with eco-friendly practices to deliver the finest laundry experience in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="Premium Laundry Machines" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-on-scroll">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-gdhobi-accent text-gdhobi-accent" />
                  ))}
                </div>
                <p className="text-sm font-medium mt-1">Rated 4.9 by 500+ customers</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={feature.id} className="flex items-start gap-4 animate-on-scroll">
                <div className="h-10 w-10 rounded-full bg-gdhobi-green/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-gdhobi-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 animate-on-scroll">
              <div className="bg-gdhobi-green/10 rounded-xl p-6 border-l-4 border-gdhobi-green">
                <h4 className="font-semibold text-gdhobi-green-dark">Best in class technology</h4>
                <p className="mt-2">
                  Our facility is equipped with the finest machines in the world for both dry and wet cleaning, ensuring superior results every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
