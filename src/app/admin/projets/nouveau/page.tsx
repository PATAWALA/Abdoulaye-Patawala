'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponent } from '@/lib/supabase/client';
import FormField from '@/components/admin/FormField';
import SubmitButton from '@/components/admin/SubmitButton';
import ImageUpload from '@/components/admin/ImageUpload';

const projectTypes = [
  { value: 'site-web', label: 'Site web / Application' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'automatisation', label: 'Automatisation' },
  { value: 'entonnoir', label: 'Tunnel de conversion' },
  { value: 'saas', label: 'SaaS' },
  { value: 'vitrine', label: 'Site vitrine' },
  { value: 'institutionnel', label: 'Site institutionnel' },
  { value: 'evenementiel', label: 'Événementiel' },
];

export default function NouveauProjetPage() {
  const router = useRouter();
  const supabase = createClientComponent();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [form, setForm] = useState({
    title: '',
    category: '',
    type: 'site-web',
    description: '',
    result: '',
    link: '',
    slug: '',
    content: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) return alert('Veuillez uploader une image.');
    setLoading(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any)
      .from('projects')
      .insert([{ ...form, image_url: imageUrl }]);

    if (!error) {
      router.push('/admin/projets');
    } else {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-display text-white mb-8">Nouveau projet</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-dark-800 border border-dark-700 rounded-2xl p-8 max-w-2xl space-y-6"
      >
        <ImageUpload onUpload={(url) => setImageUrl(url)} />

        <FormField
          label="Titre du projet"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="Ex: Bijouterie Lumina"
        />

        <div>
          <label htmlFor="type" className="block text-sm text-gray-400 mb-2">
            Type de projet
          </label>
          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
          >
            {projectTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <FormField
          label="Catégorie"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          placeholder="Ex: E-commerce, Next.js..."
        />

        <FormField
          label="Slug (url)"
          name="slug"
          value={form.slug}
          onChange={handleChange}
          required
          placeholder="mon-projet"
        />

        <FormField
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          type="textarea"
          required
          placeholder="Décrivez le projet en 2-3 phrases..."
          rows={4}
        />

        <FormField
          label="Résultat obtenu"
          name="result"
          value={form.result}
          onChange={handleChange}
          required
          placeholder="Ex: +120% de ventes en 3 mois"
        />

        <FormField
          label="Lien du projet (optionnel)"
          name="link"
          value={form.link}
          onChange={handleChange}
          type="url"
          placeholder="https://..."
        />

        <FormField
          label="Étude de cas (HTML)"
          name="content"
          value={form.content}
          onChange={handleChange}
          type="textarea"
          placeholder="<h2>Le contexte</h2><p>...</p>"
          rows={12}
        />

        <div className="flex gap-4 pt-4">
          <SubmitButton loading={loading} label="Créer le projet" />
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}