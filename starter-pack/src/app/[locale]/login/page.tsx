'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthForm from "./components/auth-form";
import { useLocale, useTranslations } from 'next-intl';
import { Spinner } from "@nextui-org/react";

export default function LoginPage() {
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVerifying, setIsVerifying] = useState(true);
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('LoginPage');

    const verifyToken = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const response = await fetch('/api/auth/verify-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });
            if (response.ok) {
                const data = await response.json();
                if (data.valid) {
                    router.push(`/${locale}/dashboard`);
                }
            }
        }
        setIsVerifying(false);
    };

    const handleLogin = async (email: string, password: string) => {
        setError('');
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                router.push(`/${locale}/dashboard`);
            } else {
                setError(t('loginError') || data.error);
            }
        } catch (error) {
            setError(t('genericError'));
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        verifyToken();
    }, []);

    if (isVerifying) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-secondary-400 to-primary-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="bg-white shadow-2xl rounded-lg p-8">
                    <AuthForm
                        onSubmit={handleLogin}
                        error={error}
                        isSubmitting={isSubmitting}
                    />
                </div>
                <div className="text-center">
                    <p className="text-xs text-white mt-4">
                        {t('signInPrompt')}
                    </p>
                </div>
            </div>
        </div>
    );
}