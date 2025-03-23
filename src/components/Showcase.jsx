
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const showcaseData = [
  {
    title: "Design Philosophy",
    description: "Our approach focuses on simplicity, usability, and emotional connection. We believe great design should disappear, letting the experience take center stage.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Design"
  },
  {
    title: "Material Selection",
    description: "Carefully selected sustainable materials that look beautiful, feel premium, and minimize environmental impact while maximizing durability.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Materials"
  },
  {
    title: "Production Process",
    description: "Our precision manufacturing techniques blend traditional craftsmanship with cutting-edge technology for unparalleled quality and consistency.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Process"
  }
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="showcase" className="showcase-section">
      <div className="container">
        <div className="section-header reveal-animation">
          <span className="section-badge">
            Showcase
          </span>
          <h2 className="section-title">Explore our <span className="gradient-text">product philosophy</span></h2>
          <p className="section-description">
            Every detail considered, every interaction refined for the perfect balance of beauty and utility.
          </p>
        </div>
        
        <div className="showcase-container">
          <div className="showcase-sidebar reveal-animation">
            {showcaseData.map((item, index) => (
              <div 
                key={index}
                className={`showcase-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="showcase-category">{item.category}</span>
                <h3 className="showcase-item-title">{item.title}</h3>
                <p className="showcase-item-description">{item.description}</p>
                <div className={`learn-more ${activeIndex === index ? 'visible' : ''}`}>
                  <span>Learn more</span>
                  <ArrowRight size={16} className="learn-more-icon" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="showcase-main reveal-animation">
            <div className="showcase-image-container">
              <img 
                src={showcaseData[activeIndex].image}
                alt={showcaseData[activeIndex].title}
                className="showcase-image"
              />
            </div>
            
            <div className="showcase-features">
              {[
                {
                  title: "Innovative Design",
                  description: "Our designers push boundaries while maintaining usability"
                },
                {
                  title: "Sustainable Materials",
                  description: "We source eco-friendly components for every product"
                },
                {
                  title: "Precise Engineering",
                  description: "Exceptional attention to detail in every component"
                }
              ].map((item, index) => (
                <div key={index} className="showcase-feature reveal-animation" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="feature-number">{(index + 1).toString().padStart(2, '0')}</div>
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="featured-product reveal-animation">
          <div className="featured-content">
            <span className="featured-label">Featured Product</span>
            <h3 className="featured-title">
              Experience the future of interaction
            </h3>
            <p className="featured-description">
              Our latest innovation combines intuitive controls with cutting-edge technology, creating a seamless experience that anticipates your needs.
            </p>
            <a href="#" className="learn-more-link">
              <span>Discover more</span>
              <ArrowRight size={16} className="learn-more-icon" />
            </a>
          </div>
          <div className="featured-image">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Featured product" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;