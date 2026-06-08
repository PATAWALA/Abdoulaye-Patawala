'use client';

import Navbar from '@/components/molecules/Navbar';
import Footer from '@/components/molecules/Footer';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Navbar />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}