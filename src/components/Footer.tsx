
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", url: "#" },
        { text: "Services", url: "#services" },
        { text: "Pricing", url: "#pricing" },
        { text: "How It Works", url: "#process" },
        { text: "Testimonials", url: "#testimonials" },
        { text: "FAQ", url: "#faq" },
        { text: "Contact", url: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { text: "Laundry", url: "#services" },
        { text: "Dry Cleaning", url: "#services" },
        { text: "Special Care Items", url: "#services" },
        { text: "Express Service", url: "#services" },
        { text: "Stain Removal", url: "#services" },
        { text: "Perfume Wash", url: "#services" }
      ]
    },
    {
      title: "Locations",
      links: [
        { text: "Delhi NCR", url: "#" },
        { text: "Mumbai", url: "#" },
        { text: "Bangalore", url: "#" },
        { text: "Hyderabad", url: "#" },
        { text: "Chennai", url: "#" },
        { text: "Pune", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="section-padding pt-20 pb-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <a href="#" className="inline-block">
                  <span className="text-white font-display font-bold text-3xl">Green <span className="text-gdhobi-green-light">Dhobi</span></span>
                </a>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                India's Premium Laundry & Dry Cleaning Service with pickup and delivery at your doorstep. We combine cutting-edge technology with eco-friendly practices for superior results.
              </p>
              <div className="flex items-center bg-gdhobi-green rounded-lg p-3 max-w-xs">
                <MessageCircle className="h-6 w-6 mr-2" />
                <div>
                  <p className="text-sm font-medium">Need assistance?</p>
                  <p className="text-xs">Chat with us on WhatsApp</p>
                </div>
              </div>
            </div>

            {footerLinks.map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold text-lg mb-4 text-white">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a 
                        href={link.url} 
                        className="text-gray-400 hover:text-gdhobi-green-light transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              &copy; {year} Green Dhobi. All rights reserved.
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-gdhobi-green-light">Privacy Policy</a>
              <a href="#" className="hover:text-gdhobi-green-light">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp floating button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;
