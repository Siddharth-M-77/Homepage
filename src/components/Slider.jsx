
import React, { useState, useEffect, useCallback } from 'react';
import './SimpleSlider.css';

const SimpleSlider = ({ slides, autoPlayInterval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  // Go to a specific slide
  const goToSlide = useCallback((index) => {
    // Ensure index wraps around
    const newIndex = (index + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  }, [slides?.length]);

  // Go to next/previous slide
  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Autoplay effect
  useEffect(() => {
    let timerId;
    if (isPlaying && !isTouching) {
      timerId = setTimeout(() => {
        goToNext();
      }, autoPlayInterval);
    }
    return () => clearTimeout(timerId);
  }, [currentIndex, goToNext, isPlaying, isTouching, autoPlayInterval]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    setIsTouching(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrev();
          break;
        case ' ':
          togglePlayPause();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, togglePlayPause]);

  // Hover behavior
  const handleMouseEnter = () => {
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="slide-image-container">
              <img 
                src={slide.image} 
                alt={slide.altText} 
                className="slide-image"
              />
              <div className="slide-overlay"></div>
            </div>
            
            <div className="slide-content">
              <span className="slide-subtitle">{slide.subtitle}</span>
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
              <button className="slide-button">
                Learn More
                <svg className="arrow-icon" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="slider-controls">
        <button 
          className="control-arrow control-prev"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="control-arrow control-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="bottom-controls">
        <button
          className="play-pause-button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7-11-7z" />
            </svg>
          )}
        </button>
        
        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="progress-container">
          <div 
            className="progress-bar"
            style={{
              width: `${(currentIndex + 1) / slides.length * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;