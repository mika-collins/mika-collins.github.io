import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

interface PillCarouselProps {
  items: string[];
  direction?: "left" | "right";
  baseSpeed?: number; // Pixels per second
}

const PillCarousel = ({
  items,
  direction = "left",
  baseSpeed = 40, // Default 40px per second
}: PillCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30); // Fallback duration

  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth; // Total width of all pills
    const calculatedDuration = trackWidth / baseSpeed;

    setDuration(calculatedDuration);
  }, [items, baseSpeed]);

  return (
    <div className="pill-carousel">
      <div
        ref={trackRef}
        className={`pill-track ${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((item, index) => (
          <span className="pill" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PillCarousel;

