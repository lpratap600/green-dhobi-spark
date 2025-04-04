
import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bengaluru",
      photo: null,
      rating: 5,
      text: "Green Dhobi has completely transformed my laundry experience. The clothes come back so fresh and well-pressed. Their WhatsApp scheduling is incredibly convenient!"
    },
    {
      name: "Raj Malhotra",
      location: "Mumbai",
      photo: null,
      rating: 5,
      text: "Excellent service! They picked up and delivered exactly when promised. The quality of cleaning is outstanding and their pricing is quite reasonable for the premium service."
    },
    {
      name: "Ananya Patel",
      location: "Delhi",
      photo: null,
      rating: 5,
      text: "I can't say enough good things about Green Dhobi. The stain removal service is like magic - they rescued my favorite silk saree that I thought was permanently stained!"
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      photo: null,
      rating: 4,
      text: "Professional, punctual and perfect cleaning. I've tried many laundry services but Green Dhobi stands out for their consistency and premium cleaning technology."
    }
  ];

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-gdhobi-green">Customers</span> Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Green Dhobi with their laundry needs.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="animate-on-scroll">
            <div className="overflow-hidden">
              <div className={`flex transition-transform duration-500 ease-in-out`} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="testimonial-card flex flex-col items-center text-center p-8">
                      <div className="mb-4">
                        {testimonial.photo ? (
                          <img 
                            src={testimonial.photo} 
                            alt={testimonial.name} 
                            className="w-20 h-20 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-gdhobi-green flex items-center justify-center text-white">
                            <User className="w-10 h-10" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.rating ? 'fill-gdhobi-accent text-gdhobi-accent' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg italic">"{testimonial.text}"</p>
                      
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 items-center">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                className="mr-4 rounded-full"
                disabled={animating}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { if (!animating) { setActiveIndex(index); } }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-gdhobi-green w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="ml-4 rounded-full"
                disabled={animating}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Button className="btn-primary py-6 px-8 text-lg">
            Join Our Happy Customers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
