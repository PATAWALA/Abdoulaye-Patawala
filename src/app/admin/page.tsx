'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClientComponent } from '@/lib/supabase/client';
import DataTable from '@/components/admin/DataTable';

interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  created_at: string;
}

export default function AdminProjetsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponent();

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (data) setProjects(data);
    setLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleDelete = async (project: Project) => {
    if (!confirm('Supprimer ce projet ?')) return;
    await supabase.from('projects').delete().eq('id', project.id);
    fetchProjects();
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
        <h1 className="text-2xl font-display text-white">Projets</h1>
        <Link
          href="/admin/projets/nouveau"
          className="px-5 py-2.5 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
        >
          + Nouveau projet
        </Link>
      </div>
      <DataTable
        columns={[
          { key: 'title', header: 'Titre' },
          {
  key: 'type',
  header: 'Type',
  render: (p: Project) => {
    const typeLabels: Record<string, string> = {
      'site-web': 'Site web',
      'ecommerce': 'E-commerce',
      'automatisation': 'Automatisation',
      'entonnoir': 'Tunnel de conversion',
      'saas': 'SaaS',
      'vitrine': 'Site vitrine',
      'institutionnel': 'Site institutionnel',
      'evenementiel': 'Événementiel',
    };
    return (
      <span className="px-2 py-0.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-xs text-gold-400">
        {typeLabels[p.type] || p.category}
      </span>
    );
  },
},
          {
            key: 'created_at',
            header: 'Date',
            render: (p) => new Date(p.created_at).toLocaleDateString('fr-FR'),
          },
        ]}
        data={projects}
        onEdit={(p) => window.location.href = `/admin/projets/${p.id}`}
        onDelete={handleDelete}
      />
    </div>
  );
}