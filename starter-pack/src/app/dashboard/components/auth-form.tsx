'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardBody, CardHeader, Spacer } from "@nextui-org/react";
import { Spinner } from "@nextui-org/spinner";
import React from 'react';

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Sign-in successful
                router.push('/dashboard'); // Redirect to dashboard or desired page
            } else {
                // Sign-in failed
                setError(data.error || 'Invalid email or password');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = {
        inputWrapper: "bg-gray-50 hover:bg-gray-100 transition-all duration-200 ease-in-out",
        label: "text-gray-600",
        innerWrapper: "bg-transparent",
        input: "text-gray-800 placeholder:text-gray-400",
    };

    return (
        <section className="py-16 bg-gradient-to-r from-secondary-400 to-primary-200 h-screen flex items-center justify-center" aria-labelledby="auth-form-title">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
                <Card className="w-full shadow-xl">
                    <CardHeader className="flex flex-col items-center pb-0 pt-6">
                        <h2 id="auth-form-title" className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                        <p className="text-gray-600 mt-2">Sign in to your account</p>
                    </CardHeader>
                    <CardBody className="px-6 py-8">
                        {error && (
                            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                                {error}
                            </div>
                        )}
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-label="Sign in form">
                            <Input
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                                size="lg"
                                classNames={inputClasses}
                            />
                            <Input
                                type="password"
                                label="Password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                fullWidth
                                size="lg"
                                classNames={inputClasses}
                            />
                            <Spacer y={1} />
                            <Button 
                                type="submit" 
                                color="primary" 
                                size="lg" 
                                fullWidth 
                                disabled={isSubmitting}
                                className="mt-4 bg-secondary-300 text-white font-bold hover:bg-secondary-400 transition-colors"
                            >
                                {isSubmitting ? <Spinner /> : "Sign in"}
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}