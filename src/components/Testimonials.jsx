import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonial = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 stagger-children">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 text-blue-600 rounded-full font-medium text-sm reveal-animation">
            Testimonials
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">
            Loved by thousands of creative professionals
          </h2>
          
          <p className="text-lg text-muted-foreground reveal-animation">
            Don't just take our word for it. See what our users have to say about their experience with our platform.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto reveal-animation">
          {/* Main testimonial */}
          <div className="relative z-10 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-display font-medium mb-6 italic">
                  "This platform completely transformed how I approach my design work. The intuitive interface and powerful features have helped me deliver projects faster than ever before, without sacrificing quality."
                </blockquote>
                
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Creative Director, DesignStudio</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative testimonials */}
          <div className="absolute -top-6 -left-6 z-0 bg-blue-50 rounded-3xl w-full h-full"></div>
          <div className="absolute -bottom-6 -right-6 z-0 bg-purple-50 rounded-3xl w-full h-full"></div>
        </div>
        
        {/* Additional testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              name: "James Wilson",
              role: "Product Manager, TechCorp",
              quote: "The analytics features alone are worth the investment. I can now make data-driven decisions with confidence."
            },
            {
              name: "Emily Chen",
              role: "Freelance Designer",
              quote: "As a freelancer, this platform has been a game-changer for my workflow. Highly recommend it!"
            },
            {
              name: "Marcus Taylor",
              role: "Marketing Director, GrowthHQ",
              quote: "The automation features save my team hours every week. We can focus on strategy instead of repetitive tasks."
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 reveal-animation"
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <blockquote className="text-base mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;