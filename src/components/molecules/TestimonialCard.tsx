import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
  <div className="group bg-dark-700 border border-dark-600 rounded-2xl p-6 lg:p-8 h-full flex flex-col justify-between hover:border-gold-500/20 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500">
    {/* Étoiles */}
    <div className="flex items-center gap-1 mb-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    {/* Citation */}
    <blockquote className="text-gray-300 leading-relaxed mb-6 flex-1">
      &ldquo;{quote}&rdquo;
    </blockquote>

    {/* Auteur */}
    <div className="flex items-center gap-3 pt-4 border-t border-dark-600">
      <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 font-semibold text-sm flex-shrink-0">
        {author.charAt(0)}
      </div>
      <div>
        <p className="text-white font-semibold text-sm">{author}</p>
        <p className="text-gray-500 text-xs">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;