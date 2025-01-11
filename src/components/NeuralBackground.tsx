import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

export const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints(); // Reinitialize points when canvas is resized
    };

    const initPoints = () => {
      points.current = Array.from({ length: 50 }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          originalX: x,
          originalY: y,
        };
      });
    };

    const getThemeColor = () => {
      const theme = document.documentElement.querySelector('[class*="theme-"]')?.className || '';
      if (theme.includes('theme-light')) {
        return '#1e3a8a'; // Dark blue for light theme
      } else {
        return '#fbbf24'; // Golden for dark/dim theme
      }
    };

    const drawPoints = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const themeColor = getThemeColor();
      
      // Update points
      points.current.forEach(point => {
        // Apply mouse repulsion
        const dx = point.x - mousePos.current.x;
        const dy = point.y - mousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          // Repel from mouse
          point.vx += (dx / dist) * 0.5;
          point.vy += (dy / dist) * 0.5;
        } else {
          // Return to original position
          const returnDx = point.originalX - point.x;
          const returnDy = point.originalY - point.y;
          const returnDist = Math.sqrt(returnDx * returnDx + returnDy * returnDy);
          
          if (returnDist > 1) {
            point.vx += (returnDx / returnDist) * 0.05;
            point.vy += (returnDy / returnDist) * 0.05;
          }
        }

        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Apply friction
        point.vx *= 0.95;
        point.vy *= 0.95;
      });

      // Draw connections
      ctx.strokeStyle = themeColor;
      
      points.current.forEach((point, i) => {
        points.current.slice(i + 1).forEach(otherPoint => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.globalAlpha = 1 - (dist / 150);
            ctx.stroke();
          }
        });
      });

      // Draw points
      ctx.globalAlpha = 1;
      points.current.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = themeColor;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(drawPoints);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    initPoints();
    drawPoints();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.2, zIndex: 1 }}
    />
  );
};