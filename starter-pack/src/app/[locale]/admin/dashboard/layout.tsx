'use client';

import { useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from './components/sidebar';
import MobileSidebar from './components/mobile-sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}


export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const router = useRouter();

  const verifyToken = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('/api/auth/verify-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });
        if (!response.ok) {
          throw new Error('Token verification failed');
        }
        return await response.json();
      } catch (error) {
        console.error('Token verification error:', error);
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await verifyToken();
        if (!response || !response.valid) {
          localStorage.removeItem('token');
          router.push('/admin/login');
        }
      } else {
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="dashboard-layout flex h-screen">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="sm:hidden">
        <MobileSidebar />
      </div>
      <div className="flex-grow overflow-auto p-4 sm:p-8">
        {children}
      </div>
    </div>
  );
}
