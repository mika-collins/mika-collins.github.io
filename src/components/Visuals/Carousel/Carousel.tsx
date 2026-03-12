import { useRef, useState, useLayoutEffect, useEffect } from "react";
import "./Carousel.css";
 
interface CarouselProps {
  items: string[];
  direction?: "left" | "right";
  baseSpeed?: number;
}
 
const Carousel = ({
  items,
  direction = "left",
  baseSpeed = 40,
}: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
 
  // Calculate duration based on content width and base speed
  useLayoutEffect(() => {
    let cancelled = false;
 
    const calculateDuration = () => {
      if (!trackRef.current || cancelled) return;
      const scrollWidth = trackRef.current.scrollWidth;
      const trackWidth = scrollWidth / 2;
      const calculatedDuration = trackWidth / baseSpeed;
      setDuration(calculatedDuration);
    };
 
    calculateDuration();
    window.addEventListener("resize", calculateDuration);
 
    // Guard against setting state after unmount
    document.fonts.ready.then(() => {
      if (!cancelled) calculateDuration();
    });
 
    return () => {
      cancelled = true;
      window.removeEventListener("resize", calculateDuration);
    };
  }, [items, baseSpeed]);
 
  // Pause animation when carousel is scrolled off-screen
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
 
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
 
  return (
    <div className="pill-carousel" ref={carouselRef}>
      <div
        ref={trackRef}
        className={`pill-track ${direction} ${isVisible ? "is-visible" : ""}`}
        style={{ "--duration": `${duration}s` } as React.CSSProperties}
      >
        {[...items, ...items].map((item, index) => (
          <span className="pill" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
 
export default Carousel;
 


