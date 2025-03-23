
import React, { useEffect, useRef } from "react";

const RevealAnimation = ({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = "",
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getTransform = () => {
      switch (direction) {
        case "up":
          return "translateY(20px)";
        case "down":
          return "translateY(-20px)";
        case "left":
          return "translateX(20px)";
        case "right":
          return "translateX(-20px)";
        default:
          return "translateY(20px)";
      }
    };

    element.style.opacity = "0";
    element.style.transform = getTransform();
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = "1";
            element.style.transform = "translate(0, 0)";
            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [direction, delay, duration, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default RevealAnimation;