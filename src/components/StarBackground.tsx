import React, { useState } from "react";
import "../index.css";

interface Star {
  top: number;
  left: number;
  size: number;
  duration: number;
}

const StarsBackground: React.FC = () => {
  const [stars] = useState<Star[]>(() => {
    const starCount = 100;
    const tempStars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      tempStars.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 2 + 1,
      });
    }
    return tempStars;
  });

  return (
    <div className="stars fixed inset-0 pointer-events-none -z-10">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star absolute bg-white rounded-full opacity-0 animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;