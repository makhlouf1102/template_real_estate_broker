'use client';

import { useEffect, useState } from 'react';
import AuthForm from "../login/components/auth-form";
import { redirect } from 'next/navigation';

export default function DashboardPage() {
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const verifyToken = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            // TODO: Verify the token
            const response = await fetch('api/auth/verify-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });
        }
    };


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            // TODO: Check if the token is valid
            const response = verifyToken();
            if (!response) {
                localStorage.removeItem('token');
                redirect('/login');
            }
        } else {
            redirect('/login');
        }
    }, []);

    return (
        <div>
            <div>Dashboard</div>
        </div>
    );
}