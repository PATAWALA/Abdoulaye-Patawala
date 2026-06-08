'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClientComponent } from '@/lib/supabase/client';

const links = [
  { href: '/admin', label: 'Vue d\'ensemble', icon: '📊' },
  { href: '/admin/projets', label: 'Projets', icon: '🖼️' },
  { href: '/admin/articles', label: 'Articles', icon: '📝' },
  { href: '/admin/contacts', label: 'Messages', icon: '📩' },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClientComponent();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <aside className="w-64 min-h-screen bg-dark-800 border-r border-dark-700 flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-dark-700">
        <Link href="/admin" className="text-gold-400 font-display text-2xl tracking-wide">
          Nova Admin
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              <span>{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-dark-700">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-300 block mb-3">
          ← Voir le site
        </Link>
        <button
          onClick={handleSignOut}
          className="w-full text-left text-sm text-red-400 hover:text-red-300 transition-colors"
        >
          Déconnexion
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;