import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: <Users className="w-6 h-6 text-blue-500" />, value: '10K+', label: 'Happy Users' },
    { icon: <Target className="w-6 h-6 text-purple-500" />, value: '98%', label: 'Satisfaction Rate' },
    { icon: <Award className="w-6 h-6 text-amber-500" />, value: '150+', label: 'Awards Won' },
    { icon: <Lightbulb className="w-6 h-6 text-green-500" />, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 text-blue-600 rounded-full font-medium text-sm">
            About Us
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Team Behind The <span className="text-blue-500">Innovation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and creative thinkers dedicated to transforming the way you work with digital tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="reveal-animation">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-40 -z-10 transform -rotate-6"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Our team collaborating" 
                  className="w-full h-auto object-cover rounded-2xl transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6 reveal-animation">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              At Lumi, we believe in empowering creativity through technology. Our mission is to create intuitive tools that simplify complex workflows, allowing you to focus on what truly matters—bringing your ideas to life.
            </p>
            
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground">
              We envision a world where technology enhances human creativity rather than replacing it. We're building tools that adapt to your unique process, making digital design more accessible, efficient, and enjoyable for everyone.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;