'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { createClientComponent } from '@/lib/supabase/client';
import FormField from '@/components/admin/FormField';
import SubmitButton from '@/components/admin/SubmitButton';
import ImageUpload from '@/components/admin/ImageUpload';

const categories = [
  'Développement Web',
  'Business Digital',
  'Automatisation',
  'Étude de cas',
  'Tutoriel',
];

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const supabase = createClientComponent();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image_url: '',
    author: '',
    category: '',
    read_time: '',
    featured: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = await (supabase as any)
        .from('blog_posts')
        .select('*')
        .eq('id', String(params.id))
        .single();

      if (data) {
        setForm({
          title: data.title || '',
          slug: data.slug || '',
          excerpt: data.excerpt || '',
          content: data.content || '',
          image_url: data.image_url || '',
          author: data.author || '',
          category: data.category || '',
          read_time: data.read_time || '',
          featured: data.featured ?? false,
        });
        setImageUrl(data.image_url || '');
      }
      setLoadingData(false);
    };
    fetchData();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalImageUrl = imageUrl || form.image_url;
    if (!finalImageUrl) return alert('Veuillez fournir une image (upload ou URL).');
    setLoading(true);

    const payload = { ...form, image_url: finalImageUrl };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any)
      .from('blog_posts')
      .update(payload)
      .eq('id', String(params.id));

    if (!error) {
      router.push('/admin/articles');
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
      <h1 className="text-2xl font-display text-white mb-8">Modifier l&apos;article</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-dark-800 border border-dark-700 rounded-2xl p-8 max-w-3xl space-y-6"
      >
        {/* Upload d'image */}
        <ImageUpload
          onUpload={(url) => {
            setImageUrl(url);
            setForm((prev) => ({ ...prev, image_url: url }));
          }}
          currentImage={imageUrl || form.image_url}
        />

        <FormField label="Titre" name="title" value={form.title} onChange={handleChange} required />
        <FormField label="Slug (url)" name="slug" value={form.slug} onChange={handleChange} required />

        <div>
          <label htmlFor="category" className="block text-sm text-gray-400 mb-2">Catégorie</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <FormField label="Temps de lecture" name="read_time" value={form.read_time} onChange={handleChange} placeholder="5 min" />
        <FormField label="Extrait" name="excerpt" value={form.excerpt} onChange={handleChange} type="textarea" required rows={3} />
        <FormField label="Contenu (HTML)" name="content" value={form.content} onChange={handleChange} type="textarea" required rows={15} />
        <FormField label="URL de l&apos;image (optionnel si upload)" name="image_url" value={form.image_url} onChange={handleChange} type="url" />
        <FormField label="Auteur" name="author" value={form.author} onChange={handleChange} required />

        <div className="flex items-center justify-between p-4 bg-dark-900 border border-dark-600 rounded-xl">
          <div>
            <p className="text-sm font-medium text-white">Mettre à la une</p>
            <p className="text-xs text-gray-500 mt-0.5">Cet article apparaîtra en priorité sur la page blog</p>
          </div>
          <button
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, featured: !prev.featured }))}
            className={`relative w-11 h-6 rounded-full transition-all duration-300 ${
              form.featured ? 'bg-gold-500/30 border-gold-400' : 'bg-dark-600 border-dark-500'
            } border`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300 ${
                form.featured ? 'translate-x-full bg-gold-400' : 'translate-x-0 bg-gray-400'
              }`}
            />
          </button>
        </div>

        <div className="flex gap-4 pt-4">
          <SubmitButton loading={loading} label="Enregistrer" />
          <button type="button" onClick={() => router.back()} className="px-6 py-3 text-gray-400 hover:text-white transition-colors">
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}