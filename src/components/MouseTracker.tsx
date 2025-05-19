
import { useState, useEffect } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  
  // Mouse tracking for custom cursor
  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const mouseOverHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('[role="button"]') ||
          target.tagName.toLowerCase() === 'input' ||
          target.tagName.toLowerCase() === 'textarea' ||
          target.tagName.toLowerCase() === 'select') {
        setCursorHovered(true);
      } else {
        setCursorHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseover", mouseOverHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseover", mouseOverHandler);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot z-50"
        style={{ 
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      ></div>
      <div 
        className={`cursor-outline z-50 ${cursorHovered ? 'hoverable' : ''}`}
        style={{ 
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: cursorHovered ? '60px' : '40px',
          height: cursorHovered ? '60px' : '40px',
          backgroundColor: cursorHovered ? 'rgba(100, 255, 218, 0.08)' : 'rgba(100, 255, 218, 0.15)',
        }}
      ></div>
    </>
  );
};

export default MouseTracker;
