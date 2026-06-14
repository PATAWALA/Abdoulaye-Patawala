import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, imageUrl }) => (
  <div className="group relative overflow-hidden rounded-xl bg-dark-800 border border-dark-700 transition-all duration-500 motion-safe:hover:scale-[1.02] motion-safe:hover:border-gold-500/50">
    <div className="aspect-video relative">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
    </div>
    <div className="p-5">
      <p className="text-gold-400 text-xs uppercase tracking-widest">{category}</p>
      <h3 className="text-white font-display text-xl mt-1">{title}</h3>
      <span className="inline-block mt-3 text-sm text-gray-400 border-b border-transparent group-hover:border-gold-400 transition-colors">
        Voir le projet →
      </span>
    </div>
  </div>
);

export default ProjectCard;