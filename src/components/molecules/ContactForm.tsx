'use client';
import React, { useState } from 'react';
import { createClientComponent } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const messageTypes = [
  { value: 'Projet', label: 'Demande de projet' },
  { value: 'Témoignage', label: 'Témoignage / Avis' },
  { value: 'Collaboration', label: 'Proposition de collaboration' },
  { value: 'Formation', label: 'Demande de formation' },
  { value: 'Autre', label: 'Autre' },
];

const placeholders: Record<string, string> = {
  Projet: 'Décrivez votre projet, vos objectifs, vos besoins…',
  Témoignage: 'Racontez votre expérience avec moi, ce que vous avez pensé du résultat…',
  Collaboration: 'Parlez-moi de vous et de l\'idée de collaboration…',
  Formation: 'Quelle compétence souhaitez-vous acquérir ? Dans quel cadre ?',
  Autre: 'Écrivez votre message…',
};

const ContactForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    message_type: 'Projet',
    rating: 0,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRating = (star: number) => {
    setFormData(prev => ({ ...prev, rating: star }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const supabase = createClientComponent();
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      message_type: formData.message_type,
      rating: formData.message_type === 'Témoignage' ? formData.rating : null,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any).from('contacts').insert([payload]);
    if (error) {
      setStatus('error');
      console.error(error);
    } else {
      setStatus('success');
      setTimeout(() => {
        router.push('/merci');
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark-800 border border-dark-700 rounded-2xl p-8 lg:p-10 space-y-6 dark:bg-dark-800 dark:border-dark-700 light:bg-white light:border-gray-200 light:shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-400 mb-2 dark:text-gray-400 light:text-gray-600">Votre nom</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Jean Dupont"
          className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors dark:bg-dark-900 dark:border-dark-600 dark:text-white dark:placeholder-gray-600 light:bg-gray-50 light:border-gray-300 light:text-dark-900 light:placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-400 mb-2 dark:text-gray-400 light:text-gray-600">Votre email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="jean@entreprise.com"
          className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors dark:bg-dark-900 dark:border-dark-600 dark:text-white dark:placeholder-gray-600 light:bg-gray-50 light:border-gray-300 light:text-dark-900 light:placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="message_type" className="block text-sm text-gray-400 mb-2 dark:text-gray-400 light:text-gray-600">Type de message</label>
        <select
          id="message_type"
          name="message_type"
          value={formData.message_type}
          onChange={handleChange}
          className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors dark:bg-dark-900 dark:border-dark-600 dark:text-white light:bg-gray-50 light:border-gray-300 light:text-dark-900"
        >
          {messageTypes.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>

      {formData.message_type === 'Témoignage' && (
        <div>
          <label className="block text-sm text-gray-400 mb-2 dark:text-gray-400 light:text-gray-600">Votre note</label>
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRating(star)}
                className="text-2xl focus:outline-none transition-colors"
              >
                <svg className={`w-6 h-6 ${star <= formData.rating ? 'text-gold-400' : 'text-gray-600 dark:text-gray-600 light:text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
          </div>
          <p className="text-gray-500 text-xs dark:text-gray-500 light:text-gray-600">Votre avis sera examiné avant d&apos;être publié sur le site. Merci pour votre retour !</p>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-2 dark:text-gray-400 light:text-gray-600">Votre message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder={placeholders[formData.message_type] || 'Écrivez votre message…'}
          className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors resize-none dark:bg-dark-900 dark:border-dark-600 dark:text-white dark:placeholder-gray-600 light:bg-gray-50 light:border-gray-300 light:text-dark-900 light:placeholder-gray-400"
        />
      </div>

      {status === 'error' ? (
        <div className="space-y-4">
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 flex items-start gap-3 dark:bg-red-500/5 dark:border-red-500/20 light:bg-red-50 light:border-red-200">
            <svg className="w-5 h-5 text-red-400 dark:text-red-400 light:text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-red-400 text-sm font-medium mb-1 dark:text-red-400 light:text-red-700">Erreur d&apos;envoi</p>
              <p className="text-gray-500 text-xs dark:text-gray-500 light:text-gray-600">Une erreur est survenue. Vérifiez votre connexion et réessayez.</p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold bg-gold-500 text-dark-900 hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
          >
            Réessayer
          </button>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 rounded-xl font-semibold bg-gold-500 text-dark-900 hover:bg-gold-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Envoi en cours...</span>
            </>
          ) : (
            <span>Envoyer le message</span>
          )}
        </button>
      )}

      <p className="text-center text-gray-600 text-xs dark:text-gray-600 light:text-gray-500">
        Vos informations sont confidentielles. Réponse garantie sous 24h.
      </p>
    </form>
  );
};

export default ContactForm;