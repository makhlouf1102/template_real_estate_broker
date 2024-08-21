'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthForm from "./components/auth-form";
import { useLocale } from 'next-intl';
import { Spinner } from "@nextui-org/react";

export default function LoginPage() {
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVerifying, setIsVerifying] = useState(true);
    const router = useRouter();
    const locale = useLocale();

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
                setError(data.error || 'Invalid email or password');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
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
        <div>
            <AuthForm
                onSubmit={handleLogin}
                error={error}
                isSubmitting={isSubmitting}
            />
        </div>
    );
}