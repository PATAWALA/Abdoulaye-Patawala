'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClientComponent } from '@/lib/supabase/client';
import DataTable from '@/components/admin/DataTable';

interface Post {
  id: number;
  title: string;
  slug: string;
  author: string;
  category: string;
  read_time: string;
  created_at: string;
}

export default function AdminArticlesPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponent();

  const fetchData = async () => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setPosts(data);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (p: Post) => {
    if (!confirm('Supprimer cet article ?')) return;
    await supabase.from('blog_posts').delete().eq('id', p.id);
    fetchData();
  };

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
        <h1 className="text-2xl font-display text-white">Articles</h1>
        <Link
          href="/admin/articles/nouveau"
          className="px-5 py-2.5 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
        >
          + Nouvel article
        </Link>
      </div>

      <DataTable
        columns={[
          { key: 'title', header: 'Titre' },
          {
            key: 'category',
            header: 'Catégorie',
            render: (p: Post) => (
              <span className="px-2 py-0.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-xs text-gold-400">
                {p.category || '—'}
              </span>
            ),
          },
          { key: 'author', header: 'Auteur' },
          { key: 'read_time', header: 'Lecture' },
          {
            key: 'created_at',
            header: 'Date',
            render: (p: Post) => new Date(p.created_at).toLocaleDateString('fr-FR'),
          },
        ]}
        data={posts}
        onEdit={(p: Post) => window.location.href = `/admin/articles/${p.id}`}
        onDelete={handleDelete}
      />
    </div>
  );
}