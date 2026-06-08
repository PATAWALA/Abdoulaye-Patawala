'use client';

import React, { useEffect, useState } from 'react';
import { createClientComponent } from '@/lib/supabase/client';

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  message_type: string;
  rating: number | null;
  status: string;
  created_at: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [publishingId, setPublishingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({ quote: '', author: '', role: '' });
  const supabase = createClientComponent();

  const fetchData = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = await (supabase as any)
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setContacts(data);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handlePublish = async (contact: Contact) => {
    if (!confirm(`Publier ce témoignage de ${contact.name} sur le site ?`)) return;
    setPublishingId(contact.id);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error: insertError } = await (supabase as any)
      .from('testimonials')
      .insert([{
        quote: contact.message,
        author: contact.name,
        role: contact.email,
        active: true,
        display_order: 999,
      }]);

    if (insertError) {
      console.error('Erreur publication:', JSON.stringify(insertError));
      alert('Erreur : ' + insertError.message);
      setPublishingId(null);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from('contacts')
      .update({ status: 'published' })
      .eq('id', contact.id);

    setPublishingId(null);
    fetchData();
  };

  const handleArchive = async (contact: Contact) => {
    if (!confirm('Archiver ce message ?')) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from('contacts')
      .update({ status: 'archived' })
      .eq('id', contact.id);
    fetchData();
  };

  const handleDelete = async (contact: Contact) => {
    if (!confirm('Supprimer définitivement ce message ? Cette action est irréversible.')) return;
    setDeletingId(contact.id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from('contacts')
      .delete()
      .eq('id', contact.id);
    setDeletingId(null);
    fetchData();
  };

  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any)
      .from('testimonials')
      .insert([{
        quote: newTestimonial.quote,
        author: newTestimonial.author,
        role: newTestimonial.role,
        active: true,
        display_order: 999,
      }]);

    if (error) {
      alert('Erreur : ' + error.message);
      return;
    }

    // Ajouter aussi dans contacts pour la traçabilité
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from('contacts')
      .insert([{
        name: newTestimonial.author,
        email: newTestimonial.role,
        message: newTestimonial.quote,
        message_type: 'Témoignage',
        status: 'published',
      }]);

    setNewTestimonial({ quote: '', author: '', role: '' });
    setShowAddModal(false);
    fetchData();
  };

  const typeBadges: Record<string, string> = {
    Projet: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Témoignage: 'bg-green-500/10 text-green-400 border-green-500/20',
    Collaboration: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Formation: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    Autre: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  };

  const statusBadges: Record<string, string> = {
    pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    published: 'bg-green-500/10 text-green-400 border-green-500/20',
    archived: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  };

  const filteredContacts = filter === 'all'
    ? contacts
    : contacts.filter(c => c.message_type === filter);

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
        <h1 className="text-2xl font-display text-white">Messages reçus</h1>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-sm text-gray-400">{contacts.filter(c => c.status === 'published').length} publiés</span>
          <span className="w-2 h-2 bg-yellow-400 rounded-full ml-2" />
          <span className="text-sm text-gray-400">{contacts.filter(c => c.status === 'pending').length} en attente</span>
          <button
            onClick={() => setShowAddModal(true)}
            className="ml-4 px-4 py-2 bg-gold-500 text-dark-900 rounded-xl text-sm font-semibold hover:bg-gold-400 transition-colors"
          >
            + Ajouter un témoignage
          </button>
        </div>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {['all', 'Projet', 'Témoignage', 'Collaboration', 'Formation', 'Autre'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === type
                ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20'
                : 'text-gray-400 hover:text-white border border-transparent hover:bg-dark-800'
            }`}
          >
            {type === 'all' ? 'Tous' : type}
          </button>
        ))}
      </div>

      {filteredContacts.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          <p className="text-lg">Aucun message dans cette catégorie.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`bg-dark-800 border rounded-2xl p-6 transition-all duration-300 ${
                contact.status === 'published'
                  ? 'border-green-500/20 bg-green-500/5'
                  : contact.status === 'archived'
                  ? 'border-gray-700/50 opacity-50'
                  : 'border-dark-700 hover:border-gold-500/20'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-0.5 rounded-full text-xs border ${typeBadges[contact.message_type]}`}>
                      {contact.message_type}
                    </span>
                    <span className={`px-3 py-0.5 rounded-full text-xs border ${statusBadges[contact.status]}`}>
                      {contact.status === 'pending' ? 'En attente' : contact.status === 'published' ? 'Publié' : 'Archivé'}
                    </span>
                    {contact.rating && (
                      <span className="text-gold-400 text-sm">{'★'.repeat(contact.rating)}{'☆'.repeat(5 - contact.rating)}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{contact.name}</p>
                    <p className="text-gray-500 text-xs">{contact.email}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{contact.message}</p>
                  <p className="text-gray-600 text-xs">
                    {new Date(contact.created_at).toLocaleDateString('fr-FR', {
                      day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {contact.message_type === 'Témoignage' && contact.status === 'pending' && (
                    <button
                      onClick={() => handlePublish(contact)}
                      disabled={publishingId === contact.id}
                      className="px-4 py-2 bg-green-500/15 text-green-400 border border-green-500/20 rounded-xl text-sm font-medium hover:bg-green-500/25 transition-colors disabled:opacity-50"
                    >
                      {publishingId === contact.id ? 'Publication...' : 'Publier'}
                    </button>
                  )}
                  {contact.status !== 'archived' && (
                    <button
                      onClick={() => handleArchive(contact)}
                      className="px-4 py-2 text-gray-500 hover:text-white hover:bg-dark-700 rounded-xl text-sm transition-colors"
                    >
                      Archiver
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(contact)}
                    disabled={deletingId === contact.id}
                    className="px-4 py-2 text-red-400/70 hover:text-red-400 hover:bg-red-500/10 rounded-xl text-sm transition-colors disabled:opacity-50"
                  >
                    {deletingId === contact.id ? '...' : 'Supprimer'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Ajout témoignage */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 max-w-lg w-full mx-4">
            <h2 className="text-xl font-display text-white mb-6">Ajouter un témoignage</h2>
            <form onSubmit={handleAddTestimonial} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Auteur</label>
                <input
                  type="text"
                  required
                  value={newTestimonial.author}
                  onChange={(e) => setNewTestimonial(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Nom du client"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Rôle / Entreprise</label>
                <input
                  type="text"
                  required
                  value={newTestimonial.role}
                  onChange={(e) => setNewTestimonial(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="CEO, Fondateur..."
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Citation</label>
                <textarea
                  required
                  rows={4}
                  value={newTestimonial.quote}
                  onChange={(e) => setNewTestimonial(prev => ({ ...prev, quote: e.target.value }))}
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  placeholder="Ce que le client a dit..."
                />
              </div>
              <div className="flex gap-4 pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
                >
                  Ajouter et publier
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}