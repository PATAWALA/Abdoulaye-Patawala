'use client';

import React, { useEffect, useState, useRef } from 'react';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import { createClientComponent } from '@/lib/supabase/client';
import TestimonialsSkeleton from './TestimonialsSkeleton';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const supabase = createClientComponent();

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await supabase
        .from('testimonials')
        .select('*')
        .eq('active', true)
        .order('display_order', { ascending: true })
        .limit(6);
      if (data) setTestimonials(data);
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  // Initialiser au témoignage du milieu
  useEffect(() => {
    if (testimonials.length > 0 && scrollRef.current && window.innerWidth < 768) {
      const startIndex = Math.floor(testimonials.length / 2);
      setActiveIndex(startIndex);
      setTimeout(() => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const card = container.children[startIndex] as HTMLElement;
          if (card) {
            const scrollLeft = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
            container.scrollTo({ left: scrollLeft, behavior: 'instant' as ScrollBehavior });
          }
        }
      }, 100);
    }
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        const scrollLeft = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollCenter = container.scrollLeft + container.offsetWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      Array.from(container.children).forEach((child, i) => {
        const card = child as HTMLElement;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(scrollCenter - cardCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    }
  };

  if (loading) return <TestimonialsSkeleton />;

  return (
    <section id="testimonials" className="bg-dark-800 dark:bg-dark-800 light:bg-white overflow-hidden">
      <div className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Témoignages</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white dark:text-white light:text-dark-900 mb-6">
            Ils me font confiance
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed dark:text-gray-400 light:text-gray-600">
            Ce que mes clients disent de notre collaboration.
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-12 motion-safe:animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-dark-700 dark:bg-dark-700 light:bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-600 dark:text-gray-600 light:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p className="text-gray-400 text-lg mb-2 dark:text-gray-400 light:text-gray-600">Aucun témoignage pour le moment.</p>
            <p className="text-gray-600 text-sm dark:text-gray-600 light:text-gray-500">
              Vous avez collaboré avec moi ?{' '}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gold-400 hover:underline"
              >
                Partagez votre expérience
              </button>
            </p>
          </div>
        ) : (
          <>
            {/* Desktop : grille */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={t.id} className="motion-safe:animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
                </div>
              ))}
            </div>

            {/* Mobile : carrousel avec peek */}
            <div className="md:hidden">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-[calc(50%-140px)]"
              >
                {testimonials.map((t, i) => (
                  <div
                    key={t.id}
                    className={`snap-center flex-shrink-0 w-[280px] transition-opacity duration-300 ${
                      i === activeIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                    }`}
                  >
                    <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
                  </div>
                ))}
              </div>

              {/* Indicateurs */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`rounded-full transition-all duration-500 ${
                      i === activeIndex
                        ? 'w-6 h-1.5 bg-gold-400'
                        : 'w-1.5 h-1.5 bg-dark-600 hover:bg-dark-500 dark:bg-dark-600 dark:hover:bg-dark-500 light:bg-gray-300 light:hover:bg-gray-400'
                    }`}
                    aria-label={`Témoignage ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-8 lg:gap-12 motion-safe:animate-fade-in">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-display text-gold-400">{testimonials.length}+</p>
                <p className="text-gray-500 text-sm mt-1 dark:text-gray-500 light:text-gray-600">Clients satisfaits</p>
              </div>
              <div className="w-px h-10 bg-dark-700 dark:bg-dark-700 light:bg-gray-200 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-display text-gold-400">100%</p>
                <p className="text-gray-500 text-sm mt-1 dark:text-gray-500 light:text-gray-600">De satisfaction</p>
              </div>
              <div className="w-px h-10 bg-dark-700 dark:bg-dark-700 light:bg-gray-200 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-display text-gold-400">5★</p>
                <p className="text-gray-500 text-sm mt-1 dark:text-gray-500 light:text-gray-600">Note moyenne</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;