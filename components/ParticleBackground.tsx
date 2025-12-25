
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Optimized configuration for better performance
    const config = {
      staticStarCount: 400, // Reduced from 700
      twinkleStarCount: 80, // Reduced from 120
      nodeCount: 60, // Reduced from 90 to prevent O(n^2) lag
      connectionDist: 180, 
      mouseConnectionDist: 300, // Reduced range
      nodeSpeed: 0.3,
      colors: {
        primary: '0, 243, 255', 
        secondary: '188, 19, 254', 
        white: '255, 255, 255'
      }
    };

    let mouse = { x: -2000, y: -2000 };
    let animationFrameId: number;

    // Background Layer: Tiny, crisp distant stars
    class BackgroundStar {
      x: number;
      y: number;
      size: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.2 + 0.5; 
        this.opacity = 0.2 + Math.random() * 0.4; 
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // Interactive Layer: Bright, twinkling active stars
    class ActiveStar {
      x: number;
      y: number;
      size: number;
      phase: number;
      speed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.8 + 0.8;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.03 + Math.random() * 0.04;
      }

      draw() {
        if (!ctx) return;
        this.phase += this.speed;
        const opacity = 0.3 + (Math.sin(this.phase) + 1) / 2 * 0.7;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        if (this.size > 1.5) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'white';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Constellation Nodes
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseColor: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * config.nodeSpeed;
        this.vy = (Math.random() - 0.5) * config.nodeSpeed;
        this.size = Math.random() * 2 + 1.2;
        this.baseColor = Math.random() > 0.6 ? config.colors.primary : config.colors.secondary;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;
      }

      draw() {
        if (!ctx) return;
        
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        // Optimization: Quick squared check before sqrt
        const distSq = dx*dx + dy*dy;
        const connectionDistSq = config.mouseConnectionDist * config.mouseConnectionDist;
        
        let nodeOpacity = 0.4;
        
        if (distSq < connectionDistSq) {
          const dist = Math.sqrt(distSq);
          nodeOpacity = 0.4 + (1 - dist / config.mouseConnectionDist) * 0.6;
          ctx.shadowBlur = 12 * (1 - dist / config.mouseConnectionDist);
          ctx.shadowColor = `rgba(${this.baseColor}, 1)`;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.baseColor}, ${nodeOpacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let staticStars: BackgroundStar[] = [];
    let activeStars: ActiveStar[] = [];
    let nodes: Node[] = [];

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      staticStars = Array.from({ length: config.staticStarCount }, () => new BackgroundStar());
      activeStars = Array.from({ length: config.twinkleStarCount }, () => new ActiveStar());
      nodes = Array.from({ length: config.nodeCount }, () => new Node());
    };

    const drawConstellation = () => {
      if (!ctx) return;
      
      const connectionDistSq = config.connectionDist * config.connectionDist;
      const mouseConnectionDistSq = config.mouseConnectionDist * config.mouseConnectionDist;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // 1. Connection to Mouse
        const mDx = nodeA.x - mouse.x;
        const mDy = nodeA.y - mouse.y;
        const mDistSq = mDx * mDx + mDy * mDy;

        if (mDistSq < mouseConnectionDistSq) {
          const mDist = Math.sqrt(mDistSq);
          ctx.beginPath();
          const mOpacity = (1 - mDist / config.mouseConnectionDist) * 0.4;
          
          const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, mouse.x, mouse.y);
          grad.addColorStop(0, `rgba(${nodeA.baseColor}, ${mOpacity * 1.5})`);
          grad.addColorStop(1, `rgba(${config.colors.primary}, 0)`);
          
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5 * (1 - mDist / config.mouseConnectionDist);
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // 2. Node to Node
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistSq) {
            const dist = Math.sqrt(distSq);
            
            // Check distance to mouse for visual boost (optimized)
            const nodeADistSq = (nodeA.x - mouse.x)**2 + (nodeA.y - mouse.y)**2;
            const nodeBDistSq = (nodeB.x - mouse.x)**2 + (nodeB.y - mouse.y)**2;
            
            const mouseBoost = (nodeADistSq < mouseConnectionDistSq || nodeBDistSq < mouseConnectionDistSq) ? 2 : 1;
            const opacity = (1 - dist / config.connectionDist) * 0.12 * mouseBoost;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${config.colors.primary}, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }
      
      // Mouse core
      if (mouse.x > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${config.colors.primary}, 1)`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${config.colors.primary}, 1)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const animate = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      staticStars.forEach(s => s.draw());
      activeStars.forEach(s => s.draw());
      
      nodes.forEach(n => n.update());
      drawConstellation();
      nodes.forEach(n => n.draw());

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[-10]"
      style={{ background: '#050505' }}
    />
  );
};

export default ParticleBackground;
