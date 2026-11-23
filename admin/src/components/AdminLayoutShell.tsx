'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AdminSidebar from './AdminSidebar';

export default function AdminLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/login';
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('mani_admin_session');
    if (!session) {
      setIsAuthenticated(false);
      if (!isLoginPage) {
        router.push('/login');
      }
    } else {
      setIsAuthenticated(true);
      if (isLoginPage) {
        router.push('/');
      }
    }
  }, [pathname, isLoginPage, router]);

  if (isLoginPage) {
    return <main className="min-h-screen bg-[#06131f]">{children}</main>;
  }

  // Brief initial auth check state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#06131f] flex items-center justify-center text-slate-400 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>Verifying security session...</span>
        </div>
      </div>
    );
  }

  // Not authenticated and waiting for redirect
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-[#06131f] text-slate-100 font-sans">
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col min-w-0 bg-[#06131f]">
        {children}
      </div>
    </div>
  );
}
