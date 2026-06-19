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

// Génère des particules pour une colonne donnée
const generateColumnParticles = (columnIndex: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${columnIndex}-${i}`,
    word: words[Math.floor(Math.random() * words.length)],
    size: 12 + Math.random() * 18, // Taille du texte en px (petit pour rester subtil)
    duration: 20 + Math.random() * 15, // secondes pour traverser l'écran
    delay: Math.random() * 15, // délai avant de commencer
    opacity: 0.06 + Math.random() * 0.08, // très discret
  }));
};

const PremiumParticles: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [columns, setColumns] = useState<ReturnType<typeof generateColumnParticles>[]>([]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    // 3 colonnes sur desktop, 1 colonne sur mobile (géré par CSS)
    const colCount = 3; // On en crée 3, mais on les masquera sur mobile via CSS
    const particlesPerCol = 12; // Nombre de particules par colonne
    setColumns(
      Array.from({ length: colCount }, (_, colIndex) =>
        generateColumnParticles(colIndex, particlesPerCol)
      )
    );
  }, []);

  if (reduceMotion) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
    >
      {/* Conteneur flex avec 3 colonnes, en mobile on passe à une seule colonne via CSS */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        {columns.map((colParticles, colIdx) => (
          <div key={colIdx} className="relative overflow-hidden">
            {colParticles.map((p) => (
              <div
                key={p.id}
                className="absolute text-gold-400 font-display whitespace-nowrap"
                style={{
                  left: `${Math.random() * 80 + 10}%`, // position horizontale aléatoire dans la colonne
                  top: `-${Math.random() * 20}%`, // commence au-dessus du viewport
                  fontSize: `${p.size}px`,
                  opacity: p.opacity,
                  animation: `fallStraight ${p.duration}s linear ${p.delay}s infinite`,
                }}
              >
                {p.word}
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fallStraight {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(110vh);
          }
        }
        /* Sur mobile, on masque les colonnes 2 et 3 pour n'en garder qu'une */
        @media (max-width: 767px) {
          .grid > div:nth-child(2),
          .grid > div:nth-child(3) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumParticles;