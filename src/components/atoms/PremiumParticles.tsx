'use client';

import React, { useEffect, useState } from 'react';

const words = [
  'Conseil',
  'Stratégie',
  'Croissance',
  'Digital',
  'Performance',
  'Architecture',
  'Automatisation',
  'Tunnel',
  'Système',
  'Suivi',
  'Partenaire',
  'Vision',
];

interface Particle {
  id: number;
  word: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
}

const generateParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    word: words[Math.floor(Math.random() * words.length)],
    left: Math.random() * 100,
    size: 40 + Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 10,
    opacity: 0.04 + Math.random() * 0.06,
    rotation: Math.random() < 0.5 ? 0 : 90,
  }));

const PremiumParticles: React.FC = () => {
  const [particles] = useState<Particle[]>(generateParticles(20));
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (reduceMotion) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute text-gold-400 font-display whitespace-nowrap"
          style={{
            left: `${p.left}%`,
            top: '-10%',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            transform: `rotate(${p.rotation}deg)`,
            animation: `floatDown ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.word}
        </div>
      ))}

      <style jsx>{`
        @keyframes floatDown {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumParticles;