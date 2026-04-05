'use client';
import { useEffect, useRef } from 'react';
import Core from 'smooothy';

export default function SmoothSlider({ children }) {
  const wrapperRef = useRef(null);
  
  useEffect(() => {
    if (!wrapperRef.current) return;
    
    // Create the slider 
    // We add some snap and drag resistance similar to native momentum scrolling
    const slider = new Core(wrapperRef.current, {
      infinite: false,
      snap: false,
      variableWidth: true
    });

    let animationId;
    function animate() {
      slider.update();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      slider.destroy();
    };
  }, []);

  return (
    <div 
      className="slider-wrapper" 
      ref={wrapperRef}
      style={{
        display: 'flex',
        overflow: 'hidden',
        cursor: 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        padding: '1rem 0'
      }}
      onPointerDown={(e) => {
        e.currentTarget.style.cursor = 'grabbing';
      }}
      onPointerUp={(e) => {
        e.currentTarget.style.cursor = 'grab';
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.cursor = 'grab';
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .slider-wrapper > * {
          flex-shrink: 0;
          padding-right: 2rem;
        }
        .slider-wrapper {
          width: 100%;
        }
        @media (max-width: 768px) {
          .slider-wrapper > * {
            padding-right: 1rem;
          }
        }
      `}} />
      {children}
    </div>
  );
}
