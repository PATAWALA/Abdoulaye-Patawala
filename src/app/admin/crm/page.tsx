'use client';

import React, { useEffect, useState } from 'react';
import { createClientComponent } from '@/lib/supabase/client';

interface Prospect {
  id: number;
  name: string;
  company: string;
  sector: string;
  email: string;
  phone: string;
  status: string;
  pitch: string;
  created_at: string;
}

const statusLabels: Record<string, string> = {
  'A traiter': 'À traiter',
  'Pitch généré': 'Pitch généré',
  'Relancé': 'Relancé',
};

export default function AdminCRMPage() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('Pitch généré');
  const supabase = createClientComponent();

  const fetchProspects = async () => {
    const { data } = await supabase
      .from('prospects')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setProspects(data);
    setLoading(false);
  };

  useEffect(() => { fetchProspects(); }, []);

  const handleValidate = async (prospect: Prospect) => {
    if (!confirm(`Marquer ${prospect.name} comme relancé ?`)) return;
    await supabase
      .from('prospects')
      .update({ status: 'Relancé', updated_at: new Date().toISOString() })
      .eq('id', prospect.id);
    fetchProspects();
  };

  const filtered = activeFilter
    ? prospects.filter(p => p.status === activeFilter)
    : prospects;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-display text-white">CRM – Prospection</h1>
        <span className="text-sm text-gray-400">
          {prospects.filter(p => p.status === 'Pitch généré').length} pitchs prêts
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        {['A traiter', 'Pitch généré', 'Relancé'].map(status => (
          <button
            key={status}
            onClick={() => setActiveFilter(status)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === status
                ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20'
                : 'text-gray-400 hover:text-white border border-transparent hover:bg-dark-800'
            }`}
          >
            {statusLabels[status]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          <p className="text-lg">Aucun prospect dans cette catégorie.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(prospect => (
            <div
              key={prospect.id}
              className="bg-dark-800 border border-dark-700 rounded-2xl p-6 hover:border-gold-500/20 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold">{prospect.name}</h3>
                    <span className="px-2 py-0.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-xs text-gold-400">
                      {prospect.sector}
                    </span>
                    <span className="px-2 py-0.5 bg-dark-700 rounded-full text-xs text-gray-400">
                      {statusLabels[prospect.status] || prospect.status}
                    </span>
                  </div>
                  {prospect.company && (
                    <p className="text-gray-500 text-sm mb-1">{prospect.company}</p>
                  )}
                  {prospect.email && (
                    <p className="text-gray-600 text-xs">{prospect.email}</p>
                  )}
                </div>

                {prospect.status === 'Pitch généré' && (
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={`mailto:${prospect.email}?subject=Collaboration&body=${encodeURIComponent(prospect.pitch || '')}`}
                      className="px-4 py-2 bg-blue-500/15 text-blue-400 border border-blue-500/20 rounded-xl text-sm font-medium hover:bg-blue-500/25 transition-colors"
                    >
                      Email
                    </a>
                    <a
                      href={`https://wa.me/${prospect.phone?.replace(/\D/g, '')}?text=${encodeURIComponent(prospect.pitch || '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500/15 text-green-400 border border-green-500/20 rounded-xl text-sm font-medium hover:bg-green-500/25 transition-colors"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() => handleValidate(prospect)}
                      className="px-4 py-2 bg-gold-500/15 text-gold-400 border border-gold-500/20 rounded-xl text-sm font-medium hover:bg-gold-500/25 transition-colors"
                    >
                      Valider
                    </button>
                  </div>
                )}
              </div>

              {prospect.pitch && (
                <div className="bg-dark-900 border border-dark-600 rounded-xl p-4 mt-4">
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {prospect.pitch}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}