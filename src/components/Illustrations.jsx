import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Illustrations = () => {
  const containerRef = useRef(null);
  
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
    
    const elements = containerRef.current.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="illustrations" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 reveal-animation">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="w-full h-80 overflow-hidden rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5" 
                    alt="Creative workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-purple-400 to-blue-500 p-6 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center">Unlimited Creativity</h3>
                </div>
              </div>
              
              <div className="space-y-6 mt-12">
                <div className="w-full h-40 overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-amber-400 to-pink-500 p-6 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center">Stunning Results</h3>
                </div>
                <div className="w-full h-80 overflow-hidden rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
                    alt="Digital design" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8 reveal-animation">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full font-medium text-sm">
              Stunning Visuals
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Bring Your Ideas to Life with Beautiful Illustrations
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our platform gives you access to thousands of high-quality illustrations and assets to enhance your projects. From minimalist icons to complex scenes, find exactly what you need to make your designs stand out.
            </p>
            
            <ul className="space-y-4">
              {[
                'Access to 10,000+ premium illustrations',
                'Custom color palette adjustments',
                'Seamless integration with your projects',
                'Regular updates with new visual content'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors group">
                Explore illustration library <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Illustrations;