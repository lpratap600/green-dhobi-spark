
import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
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
              }, i * 100);
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

  const faqs = [
    {
      question: "How does the pickup and delivery process work?",
      answer: "Once you schedule a pickup via our website or WhatsApp, our team will arrive at your doorstep at the scheduled time. After collecting your laundry, we process it at our facility and deliver it back to you within 24 hours or at your preferred delivery time."
    },
    {
      question: "What areas in India do you serve?",
      answer: "We currently provide our services in major metropolitan areas including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, and Pune. We're continuously expanding to new locations. Please contact us to check if we service your specific area."
    },
    {
      question: "How is pricing calculated?",
      answer: "We offer two pricing models: per kg and per piece. Per kg pricing is ideal for regular laundry in bulk, while per piece pricing is recommended for special items that require specific care. You can view our detailed pricing on our website or request it via WhatsApp."
    },
    {
      question: "How do you handle delicate fabrics?",
      answer: "We have specialized machines and processes for delicate fabrics. Our trained professionals sort all items by fabric type, color, and cleaning requirements. Delicate fabrics are cleaned using gentle detergents and appropriate temperature settings to maintain their quality."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, you can track your order status in real-time through our WhatsApp service. Simply send a message with your order ID, and our system will provide you with the current status of your laundry."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Customer satisfaction is our priority. If you're not completely satisfied with our service, please contact us within 24 hours of delivery, and we'll re-clean your items at no additional cost or offer an appropriate solution to address your concerns."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="section-padding py-20 bg-gdhobi-neutral-light">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-gdhobi-green">Questions</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our laundry and dry cleaning services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 animate-on-scroll">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-gdhobi-green hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <div className="inline-block bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              We're here to help. Contact us directly for any specific questions.
            </p>
            <Button className="btn-primary py-6 px-8 text-lg flex items-center gap-2 mx-auto">
              <MessageCircle className="h-5 w-5" />
              Chat with Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
