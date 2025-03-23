
import React, { useEffect } from 'react';
import { Layers, Zap, Lock, Wand2, LineChart, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Layers className="w-10 h-10 text-blue-500" />,
    title: 'Intuitive Interface',
    description: 'Seamlessly navigate through our clean and intuitive interface designed for maximum productivity.'
  },
  {
    icon: <Zap className="w-10 h-10 text-purple-500" />,
    title: 'Lightning Fast',
    description: 'Experience unmatched speed with our optimized platform that loads in milliseconds.'
  },
  {
    icon: <Lock className="w-10 h-10 text-green-500" />,
    title: 'Secure by Design',
    description: 'Your data is protected with enterprise-grade security and end-to-end encryption.'
  },
  {
    icon: <Wand2 className="w-10 h-10 text-amber-500" />,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and focus on what matters most with intelligent workflows.'
  },
  {
    icon: <LineChart className="w-10 h-10 text-pink-500" />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with comprehensive analytics and beautiful visualizations.'
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-cyan-500" />,
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools and services through our extensive integration ecosystem.'
  }
];

const Features = () => {
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
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 stagger-children">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 text-blue-600 rounded-full font-medium text-sm reveal-animation">
            Key Features
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">
            Everything you need in one powerful platform
          </h2>
          
          <p className="text-lg text-muted-foreground reveal-animation">
            Discover the tools and features designed to help you work smarter, not harder. Our platform combines power with simplicity for an unmatched experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover reveal-animation"
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <div className="rounded-lg inline-block p-3 bg-gray-50 mb-5">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;