
import React, { useEffect, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import { TEAM } from '../constants';

// Register Draggable
gsap.registerPlugin(Draggable);

// Custom SVG Astronaut Component
const AstronautSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
    <g transform="rotate(10 50 50)">
      {/* Backpack (Tank) */}
      <rect x="25" y="25" width="50" height="55" rx="10" fill="white" stroke="#000" strokeWidth="2.5" />
      {/* Left Leg */}
      <path d="M40 78 L36 90 A 3 3 0 0 0 39 95 L46 93 L48 78" fill="white" stroke="#000" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Right Leg */}
      <path d="M60 78 L64 90 A 3 3 0 0 1 61 95 L54 93 L52 78" fill="white" stroke="#000" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Main Body Suit */}
      <rect x="32" y="38" width="36" height="42" rx="8" fill="white" stroke="#000" strokeWidth="2.5" />
      {/* Chest Control Panel */}
      <rect x="42" y="50" width="16" height="12" rx="2" fill="white" stroke="#000" strokeWidth="1.5" />
      <rect x="45" y="53" width="4" height="6" rx="1" fill="#00f3ff" />
      <rect x="51" y="53" width="4" height="6" rx="1" fill="#bc13fe" />
      {/* Left Arm */}
      <path d="M32 45 Q 18 50 20 65" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="67" r="4" fill="white" stroke="#000" strokeWidth="2.5" />
      {/* Right Arm */}
      <path d="M68 45 Q 82 50 80 65" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="80" cy="67" r="4" fill="white" stroke="#000" strokeWidth="2.5" />
      {/* Helmet */}
      <circle cx="50" cy="30" r="18" fill="white" stroke="#000" strokeWidth="2.5" />
      {/* Visor (Cyan reflection) */}
      <circle cx="50" cy="30" r="13" fill="#00f3ff" stroke="#000" strokeWidth="2" />
      <ellipse cx="54" cy="26" rx="5" ry="2.5" fill="white" opacity="0.8" transform="rotate(-45 54 26)" />
    </g>
  </svg>
);

const FloatingTeam: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const visibleMembers = useMemo(() => {
    switch (pathname) {
      case '/': return TEAM.slice(0, 3);
      case '/dasturlar': return TEAM.slice(3, 6);
      case '/afzalliklar': return TEAM.slice(6, 9);
      case '/aloqa': return TEAM; // Show all 9 members on Contact page
      default: return [];
    }
  }, [pathname]);

  // Helper: Calculate a safe position in the "outskirts"
  // Avoids the center 60% of the screen horizontally
  // keeps padding from edges
  const getSafePosition = (index: number, total: number) => {
    const padding = 60; // Padding from edge
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    // Divide screen into Left Zone (0 to 20%) and Right Zone (80% to 100%)
    const safeZoneWidth = w * 0.2; 
    
    // Alternate sides based on index
    const isLeft = index % 2 === 0;
    
    let x;
    if (isLeft) {
      x = padding + Math.random() * (safeZoneWidth - padding);
    } else {
      x = w - safeZoneWidth + Math.random() * (safeZoneWidth - padding);
    }

    // Spread vertically ensuring they don't overlap too much
    // With 9 members, we need to utilize the full height better
    const verticalPadding = 100;
    const availableHeight = h - (verticalPadding * 2);
    const segmentH = availableHeight / total;
    
    // Distribute evenly then add jitter
    // If total is large (9), we might need to reset Y for left/right independently to avoid gaps
    // But simple distribution works if we assume L/R alternating
    const y = verticalPadding + (index * segmentH) + (Math.random() * 30 - 15);

    return { x, y };
  };

  useEffect(() => {
    if (visibleMembers.length === 0) return;

    // Small timeout to ensure DOM is ready and window dimensions are correct
    const timer = setTimeout(() => {
        const ctx = gsap.context(() => {
        visibleMembers.forEach((member, index) => {
            const element = document.getElementById(`astro-${member.id}`);
            if (!element) return;

            // 1. Initial Position
            const { x, y } = getSafePosition(index, visibleMembers.length);
            
            gsap.set(element, {
            x: x,
            y: y,
            rotation: Math.random() * 10 - 5,
            opacity: 0,
            scale: 0
            });

            // 2. Intro Animation - Faster delay (0.1 instead of 0.3) for quicker appearance
            gsap.to(element, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            delay: index * 0.1, 
            ease: "elastic.out(1, 0.7)"
            });

            // 3. Define the Floating Animation Function
            const startFloating = () => {
            gsap.to(element, {
                x: `+=${Math.random() * 60 - 30}`,
                duration: 10 + Math.random() * 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                id: `floatX-${member.id}`
            });

            gsap.to(element, {
                y: `+=${Math.random() * 60 - 30}`,
                duration: 8 + Math.random() * 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2,
                id: `floatY-${member.id}`
            });

            gsap.to(element, {
                rotation: Math.random() * 10 - 5,
                duration: 5 + Math.random() * 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                id: `floatRot-${member.id}`
            });
            };

            // Start initial float
            startFloating();

            // 4. Initialize Draggable
            Draggable.create(element, {
            type: "x,y",
            bounds: { 
                top: 20, 
                left: 20, 
                width: window.innerWidth - 40, 
                height: window.innerHeight - 40 
            },
            inertia: true,
            edgeResistance: 0.8,
            onPress: function() {
                gsap.killTweensOf(element);
                gsap.to(element, {
                scale: 1.1,
                duration: 0.2,
                ease: "back.out"
                });
            },
            onRelease: function() {
                gsap.to(element, {
                scale: 1,
                duration: 0.2
                });
                startFloating();
            }
            });

        });
        }, containerRef);
    }, 100);

    return () => clearTimeout(timer); // Cleanup is handled by context but timeout needs clearing
  }, [visibleMembers, pathname]);

  const handleMouseEnter = (id: string) => {
    const selector = `#astro-${id}`;
    gsap.to(selector, {
      scale: 1.3,
      zIndex: 100,
      rotation: 0,
      filter: "drop-shadow(0 0 15px rgba(0, 243, 255, 0.8))",
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (id: string) => {
    const selector = `#astro-${id}`;
    gsap.to(selector, {
      scale: 1,
      zIndex: 50,
      filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0))",
      duration: 0.4,
      ease: "power2.out"
    });
  };

  if (visibleMembers.length === 0) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {visibleMembers.map((member) => (
        <div
          key={member.id}
          id={`astro-${member.id}`}
          className="absolute w-12 h-12 md:w-16 md:h-16 pointer-events-auto cursor-grab active:cursor-grabbing group touch-none"
          onMouseEnter={() => handleMouseEnter(member.id)}
          onMouseLeave={() => handleMouseLeave(member.id)}
        >
          <AstronautSVG />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none z-[101]">
            <div className="bg-dark/90 backdrop-blur-xl border border-primary/40 p-3 rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.2)] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
              <div className="w-10 h-10 mx-auto mb-2 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_10px_rgba(0,243,255,0.3)] relative z-10">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-white font-display font-bold text-sm leading-tight mb-0.5">{member.name}</h4>
              <p className="text-[9px] text-primary uppercase tracking-wider font-bold">{member.role}</p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary/40"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingTeam;
