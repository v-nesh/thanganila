import React, { useEffect, useState } from 'react';
import { PawPrint } from 'lucide-react';

export const PawParallax: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate random positions but essentially static after mount
  const paws = [
    { id: 1, left: '5%', top: '10%', speed: 0.2, rotate: 15 },
    { id: 2, left: '85%', top: '20%', speed: 0.5, rotate: -10 },
    { id: 3, left: '15%', top: '40%', speed: 0.3, rotate: 45 },
    { id: 4, left: '75%', top: '60%', speed: 0.4, rotate: -20 },
    { id: 5, left: '10%', top: '80%', speed: 0.1, rotate: 30 },
    { id: 6, left: '90%', top: '90%', speed: 0.3, rotate: -15 },
    // More paws for longer pages
    { id: 7, left: '40%', top: '30%', speed: 0.15, rotate: 10 },
    { id: 8, left: '60%', top: '70%', speed: 0.25, rotate: -5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden h-full w-full">
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="absolute text-orange-100/50"
          style={{
            left: paw.left,
            top: paw.top,
            transform: `translateY(${scrollY * paw.speed}px) rotate(${paw.rotate}deg)`,
            transition: 'transform 0.1s linear', // smoother animation
          }}
        >
          <PawPrint size={64} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};
