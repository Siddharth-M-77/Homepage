import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Illustrations from './components/Illustrations';
import MindBlowing from './components/MindBlowing';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonials';
import Footer from './components/Footer';
import CTA from './components/Cta';

const App = () => {
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <Illustrations />
      <MindBlowing />
      <Pricing />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;