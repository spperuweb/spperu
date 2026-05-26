import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  key?: string | number;
}

export default function ScrollReveal({ children, className = "", delayMs = 0 }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delayMs);
          // Once animated, we can unobserve
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it fully rolls in
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delayMs]);

  return (
    <div
      ref={elementRef}
      className={`reveal-item ${isVisible ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
