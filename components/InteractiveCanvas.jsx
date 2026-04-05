'use client';
import { useEffect, useRef } from 'react';

export default function InteractiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set up canvas dimension relative to its parent
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

    let particles = [];
    const mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      // Only track if the mouse is relatively over the container
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };
    // Attach listener to window so we can track even with pointer-events: none on canvas
    window.addEventListener('mousemove', handleMouseMove);

    class GlowingEmber {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Small ember sizes
        this.baseSize = Math.random() * 2 + 0.5;
        this.size = this.baseSize;
        // Very slow drifting speed
        this.speedX = Math.random() * 1 - 0.5;
        // Embers drift upwards slightly
        this.speedY = Math.random() * -1 - 0.2;
        
        // Random opacity pulse setup
        this.alpha = Math.random() * 0.8 + 0.1;
        this.alphaChange = (Math.random() - 0.5) * 0.02;
        
        // Core ember color (Warm oranges/reds/yellows)
        const greenHue = Math.floor(Math.random() * 80 + 30); // 30-110 for ranges of red-yellow
        this.colorStr = `255, ${greenHue}, 0`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Twinkle effect
        this.alpha += this.alphaChange;
        if (this.alpha <= 0.1 || this.alpha >= 0.9) {
           this.alphaChange *= -1;
        }

        // Mouse repelling interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          // Push away slightly
          this.x -= dx / 30;
          this.y -= dy / 30;
          // Glow brighter
          this.size = this.baseSize * 2.5;
          this.alpha = 1;
        } else {
          // Return to normal size
          if (this.size > this.baseSize) this.size -= 0.1;
        }

        // Loop around edges seamlessly
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      
      draw() {
        ctx.fillStyle = `rgba(${this.colorStr}, ${this.alpha})`;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = `rgba(${this.colorStr}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance
      }
    }

    // Amount of particles based on screen width
    const particleCount = Math.floor((width * height) / 15000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new GlowingEmber());
    }

    let animationId;
    function animate() {
      // Clear with slight trailing effect disabled for sharp embers, testing full clear:
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', 
        zIndex: 0,
        opacity: 0.6
      }} 
    />
  );
}
