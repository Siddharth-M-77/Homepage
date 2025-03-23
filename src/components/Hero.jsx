import React, { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -right-5 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left stagger-children">
              <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 text-blue-600 rounded-full font-medium text-sm reveal-animation">
                Introducing our newest platform
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight reveal-animation">
                Design Better. <br />
                <span className="text-blue-500">Faster</span> Than Ever.
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 reveal-animation">
                Create stunning designs with an intuitive platform that simplifies your workflow. Experience the perfect balance of power and simplicity.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 reveal-animation">
                <a href="#features" className="btn-primary flex items-center gap-2 group">
                  Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#demo" className="btn-outline">
                  View Demo
                </a>
              </div>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start text-sm reveal-animation">
                {['No credit card required', 'Free 14-day trial', 'Cancel anytime'].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-blue-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right content - Hero image */}
            <div className="flex-1 reveal-animation">
              <div className="relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-60 rotate-6"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Platform dashboard" 
                    className="w-full h-auto object-cover rounded-2xl transform transition-transform hover:scale-105 duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;