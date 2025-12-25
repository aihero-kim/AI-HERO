import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch devices
    if (matchMedia('(pointer:fine)').matches) {
      const cursor = cursorRef.current;
      const follower = followerRef.current;

      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
        });
        gsap.to(follower, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
        });
      };

      const handleHover = () => {
        gsap.to(cursor, { scale: 0.5, duration: 0.3 });
        gsap.to(follower, { scale: 3, opacity: 0.5, backgroundColor: '#00f3ff', mixBlendMode: 'screen', duration: 0.3 });
      };

      const handleUnhover = () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: 'transparent', mixBlendMode: 'normal', duration: 0.3 });
      };

      document.addEventListener('mousemove', moveCursor);
      
      const hoverables = document.querySelectorAll('a, button, input, textarea, select, .hover-trigger');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
      });

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        hoverables.forEach((el) => {
          el.removeEventListener('mouseenter', handleHover);
          el.removeEventListener('mouseleave', handleUnhover);
        });
      };
    }
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-colors"
      />
    </>
  );
};

export default CustomCursor;