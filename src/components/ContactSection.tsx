
import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-gdhobi-green" />,
      title: "Phone",
      details: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <Mail className="h-5 w-5 text-gdhobi-green" />,
      title: "Email",
      details: "info@greendhobi.com",
      link: "mailto:info@greendhobi.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-gdhobi-green" />,
      title: "Locations",
      details: "Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune",
      link: "#"
    },
    {
      icon: <Clock className="h-5 w-5 text-gdhobi-green" />,
      title: "Operating Hours",
      details: "Mon-Sat: 8am-8pm, Sun: 10am-4pm",
      link: "#"
    }
  ];

  const socialMedia = [
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", link: "#" },
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", link: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", link: "#" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-gdhobi-green">Touch</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to experience premium laundry service? Contact us today.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-on-scroll">
              <div className="bg-gdhobi-neutral-light rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a 
                      href={item.link} 
                      key={index} 
                      className="flex items-start gap-4 hover:bg-white p-3 rounded-lg transition-all duration-300"
                    >
                      <div className="h-10 w-10 rounded-full bg-gdhobi-green/10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-gray-600 mt-1">{item.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialMedia.map((social, index) => (
                      <a 
                        href={social.link} 
                        key={index} 
                        className="h-10 w-10 rounded-full bg-gdhobi-green/10 hover:bg-gdhobi-green hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gdhobi-neutral">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gdhobi-green focus:border-gdhobi-green"
                        placeholder="Your name" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gdhobi-green focus:border-gdhobi-green"
                        placeholder="Your phone number" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gdhobi-green focus:border-gdhobi-green"
                      placeholder="Your email" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gdhobi-green focus:border-gdhobi-green"
                      placeholder="How can we help you?" 
                    ></textarea>
                  </div>
                  
                  <Button className="btn-primary w-full py-6">Send Message</Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600">Or connect with us instantly</p>
                  <Button variant="outline" className="mt-3 flex items-center gap-2 mx-auto">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    <span className="text-[#25D366]">WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
