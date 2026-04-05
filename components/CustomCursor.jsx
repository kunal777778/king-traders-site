'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Spring config for smooth trailing physics
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    // Check if on desktop
    if (window.innerWidth >= 768) {
      setIsMobile(false);
    }
    
    const handleMouseMove = (e) => {
      // Center the 40px circle on the cursor
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    const handleMouseOver = (e) => {
      // Find closest interactive element
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: mouseX,
        y: mouseY,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1.5px solid rgba(212, 168, 67, 0.8)',
        pointerEvents: 'none',
        zIndex: 99999,
      }}
      animate={{
        scale: isHovering ? 1.4 : 1,
        backgroundColor: isHovering ? 'rgba(212, 168, 67, 0.1)' : 'transparent',
      }}
      transition={{ duration: 0.15 }}
    />
  );
}
