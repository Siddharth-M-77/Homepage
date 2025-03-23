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
import Slider from './components/Slider';

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
  const slideData = [
    {
      id: 1,
      title: "Precision Engineered for Performance",
      subtitle: "Innovation",
      description: "Meticulously crafted with attention to every detail, our products combine cutting-edge technology with timeless design principles.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
      altText: "Modern technology device with clean design"
    },
    {
      id: 2,
      title: "Seamless Experience Across Devices",
      subtitle: "Connectivity",
      description: "Experience the perfect harmony of hardware and software, designed to work together flawlessly across your entire digital ecosystem.",
      image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&q=80&w=2070",
      altText: "Connected devices working together"
    },
    {
      id: 3,
      title: "Sustainable Design for Tomorrow",
      subtitle: "Environment",
      description: "Our commitment to the planet is reflected in every product we create, with recyclable materials and energy-efficient engineering.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
      altText: "Sustainable product materials and design"
    },
    {
      id: 4,
      title: "Intuitive Interface for Everyone",
      subtitle: "Accessibility",
      description: "We believe technology should be accessible to all. Our intuitive interfaces are designed for users of every ability and experience level.",
      image: "https://images.unsplash.com/photo-1498075702571-ecb018f3752d?auto=format&fit=crop&q=80&w=2070",
      altText: "Person using intuitive technology interface"
    }
  ];
  

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Slider slides={slideData}/>
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