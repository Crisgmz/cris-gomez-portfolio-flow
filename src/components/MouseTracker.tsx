// src/components/MouseTracker.tsx
import { useState, useEffect, useRef } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsMoving(true);
      
      // Resetear el timeout cada vez que se mueve el ratón
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Establecer un nuevo timeout para detectar cuando el ratón se detiene
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };
    
    window.addEventListener("mousemove", mouseMoveHandler);
    
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return (
    <>
      {/* Efecto de destello principal */}
      <div
        className="cursor-glow"
        style={{
          position: "fixed",
          top: mousePosition.y,
          left: mousePosition.x,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(
            circle,
            rgba(100, 255, 218, 0.15) 0%,
            rgba(100, 255, 218, 0.05) 35%,
            rgba(100, 255, 218, 0) 70%
          )`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 0,
          opacity: isMoving ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        }}
      />
      
      {/* Punto central del cursor (opcional) */}
      <div
        className="cursor-dot"
        style={{
          position: "fixed",
          top: mousePosition.y,
          left: mousePosition.x,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "rgba(100, 255, 218, 0.8)",
          boxShadow: "0 0 10px 2px rgba(100, 255, 218, 0.5)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: isMoving ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        }}
      />
      
      {/* Anillo externo (opcional) */}
      <div
        className="cursor-ring"
        style={{
          position: "fixed",
          top: mousePosition.y,
          left: mousePosition.x,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(100, 255, 218, 0.3)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: isMoving ? 0.8 : 0.4,
          transition: "opacity 0.3s ease, width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
};

export default MouseTracker;
