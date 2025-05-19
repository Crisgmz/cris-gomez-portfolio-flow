
import { useState, useEffect } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for custom cursor
  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div 
      className="cursor-outline z-50"
      style={{ 
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    ></div>
  );
};

export default MouseTracker;
