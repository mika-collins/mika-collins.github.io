import { useRef, useState, useLayoutEffect } from "react";
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
  const [duration, setDuration] = useState(0); // Start at 0 to prevent initial jump

  useLayoutEffect(() => {
    const calculateDuration = () => {
      if (!trackRef.current) return;
      const scrollWidth = trackRef.current.scrollWidth;
      const trackWidth = scrollWidth / 2;
      const calculatedDuration = trackWidth / baseSpeed;
      setDuration(calculatedDuration);
    };

    // Initial calculation
    calculateDuration();

    // Recalculate if the window resizes
    window.addEventListener("resize", calculateDuration);
    document.fonts.ready.then(calculateDuration);

    return () => {
      window.removeEventListener("resize", calculateDuration);
    };
  }, [items, baseSpeed]);

  return (
    <div className="pill-carousel">
      <div
        ref={trackRef}
        className={`pill-track ${direction}`}
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


