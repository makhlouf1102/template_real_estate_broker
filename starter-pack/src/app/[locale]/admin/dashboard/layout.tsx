'use client';

import { useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from './components/ui/sidebar';

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
          router.push('/login');
        }
      } else {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="dashboard-layout flex w-full gap-4 h-screen">
      <div className="w-1/6 sm:w-1/5 lg:w-1/6 bg-gray-100">
        <Sidebar />
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
