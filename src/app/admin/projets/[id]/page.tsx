'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
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

interface ProjectData {
  title: string;
  category: string;
  type: string;
  description: string;
  result: string;
  link: string;
  slug: string;
  content: string;
  image_url: string;
}

export default function EditProjetPage() {
  const router = useRouter();
  const params = useParams();
  const supabase = createClientComponent();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
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

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('id', String(params.id))
        .single();

      const project = data as ProjectData | null;

      if (project) {
        setForm({
          title: project.title || '',
          category: project.category || '',
          type: project.type || 'site-web',
          description: project.description || '',
          result: project.result || '',
          link: project.link || '',
          slug: project.slug || '',
          content: project.content || '',
        });
        setImageUrl(project.image_url || '');
      }
      setLoadingData(false);
    };
    fetchProject();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) return alert('Veuillez uploader une image.');
    setLoading(true);

    const payload = { ...form, image_url: imageUrl };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any)
      .from('projects')
      .update(payload)
      .eq('id', String(params.id));

    if (!error) {
      router.push('/admin/projets');
    } else {
      console.error(error);
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-display text-white mb-8">Modifier le projet</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-dark-800 border border-dark-700 rounded-2xl p-8 max-w-2xl space-y-6"
      >
        <ImageUpload onUpload={(url) => setImageUrl(url)} currentImage={imageUrl} />

        <FormField
          label="Titre du projet"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
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
        />

        <FormField
          label="Slug (url)"
          name="slug"
          value={form.slug}
          onChange={handleChange}
          required
        />

        <FormField
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          type="textarea"
          required
          rows={4}
        />

        <FormField
          label="Résultat obtenu"
          name="result"
          value={form.result}
          onChange={handleChange}
          required
        />

        <FormField
          label="Lien du projet (optionnel)"
          name="link"
          value={form.link}
          onChange={handleChange}
          type="url"
        />

        <FormField
          label="Étude de cas (HTML)"
          name="content"
          value={form.content}
          onChange={handleChange}
          type="textarea"
          rows={12}
        />

        <div className="flex gap-4 pt-4">
          <SubmitButton loading={loading} label="Enregistrer" />
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