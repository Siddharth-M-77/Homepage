
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
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
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 reveal-animation">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your workflow?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Start your free 14-day trial today. No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-primary flex items-center justify-center gap-2 group">
                  Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                
                <a href="#" className="btn-outline flex items-center justify-center">
                  Talk to Sales
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-xl opacity-60 rotate-6"></div>
                <div className="glass-effect rounded-2xl p-8 text-center">
                  <p className="text-xl font-medium mb-6">Join over 10,000+ teams already using our platform</p>
                  
                  <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-white/80 rounded-lg p-2 w-24 h-12 flex items-center justify-center">
                        <div className="w-full h-full bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;