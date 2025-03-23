import React, { useEffect, useRef } from 'react';
import { Sparkles, Zap, Rocket, Brain, Lightbulb, Wand2 } from 'lucide-react';

const AnimatedCard = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500 reveal-animation"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-full w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const MindBlowing = () => {
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
  
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered Design',
      description: 'Generate stunning designs in seconds with our advanced AI algorithms that learn your style preferences.',
      delay: 100
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'Neural Processing',
      description: 'Our neural networks analyze thousands of design patterns to suggest the perfect elements for your project.',
      delay: 200
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Instant Prototyping',
      description: 'Turn your ideas into interactive prototypes instantly with our revolutionary real-time rendering engine.',
      delay: 300
    },
    {
      icon: <Rocket className="w-6 h-6 text-red-500" />,
      title: '10x Performance',
      description: 'Our platform renders complex designs 10 times faster than traditional tools, saving you valuable time.',
      delay: 400
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-green-500" />,
      title: 'Smart Suggestions',
      description: 'Get intelligent design suggestions based on your content and user behavior analytics.',
      delay: 500
    },
    {
      icon: <Wand2 className="w-6 h-6 text-pink-500" />,
      title: 'Magic Layouts',
      description: 'Create perfect layouts with a single click using our proprietary Magic Layout technology.',
      delay: 600
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="innovations">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDuration: '25s', animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDuration: '18s', animationDelay: '7s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 bg-purple-50 text-purple-600 rounded-full font-medium text-sm reveal-animation">
            Mind-Blowing Technology
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">
            The Future of Design is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Here</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto reveal-animation">
            Experience design capabilities that were once thought impossible. Our cutting-edge technology is revolutionizing how creators bring their ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-20 text-center reveal-animation">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform -rotate-3"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience the future?</h3>
              <p className="text-muted-foreground mb-8">
                Join thousands of forward-thinking designers who are already transforming their workflow.
              </p>
              <a href="#" className="btn-primary inline-flex items-center gap-2">
                <Sparkles size={16} />
                Get Started for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindBlowing;
