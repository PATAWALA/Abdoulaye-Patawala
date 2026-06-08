'use client';

import React, { useState } from 'react';
import { createClientComponent } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const supabase = createClientComponent();

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: err } = await supabase.auth.signInWithPassword({ email, password });

    if (err) {
      console.error('Erreur connexion:', err.message);
      setError(err.message);
      setLoading(false);
    } else {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-gold-400 font-display text-4xl text-center mb-2">Nova</h1>
        <p className="text-gray-500 text-center mb-8">Administration</p>

        <form onSubmit={handleSubmit} className="bg-dark-800 border border-dark-700 rounded-2xl p-8 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-400 mb-2">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 px-4 py-3 rounded-xl">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}