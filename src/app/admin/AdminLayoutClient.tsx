'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClientComponent } from '@/lib/supabase/client';
import Sidebar from '@/components/admin/Sidebar';

const AdminLayoutClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClientComponent();
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user && !isLoginPage) {
        router.push('/admin/login');
      } else {
        setUser(!!user);
      }
    });
  }, [pathname]);

  if (isLoginPage) return <>{children}</>;

  if (user === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">{children}</main>
    </div>
  );
};

export default AdminLayoutClient;