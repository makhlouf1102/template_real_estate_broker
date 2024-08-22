'use client';

import { useState } from 'react';
import { Button, Input, Card, CardBody, CardHeader, Spacer } from "@nextui-org/react";
import { Spinner } from "@nextui-org/spinner";
import { useTranslations } from 'next-intl';

interface AuthFormProps {
    onSubmit: (email: string, password: string) => Promise<void>;
    error: string;
    isSubmitting: boolean;
}

export default function AuthForm({ onSubmit, error, isSubmitting }: AuthFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(email, password);
    };
    const t = useTranslations("LoginPage")

    const inputClasses = {
        inputWrapper: "bg-gray-50 hover:bg-gray-100 transition-all duration-200 ease-in-out",
        label: "text-gray-600",
        innerWrapper: "bg-transparent",
        input: "text-gray-800 placeholder:text-gray-400",
    };

    return (
        <Card className="w-full shadow-xl">
            <CardHeader className="flex flex-col items-center pb-0 pt-6">
                <h2 id="auth-form-title" className="text-3xl font-bold text-gray-800">{t('welcomeBack')}</h2>
                <p className="text-gray-600 mt-2">{t('signInPrompt')}</p>
            </CardHeader>
            <CardBody className="px-6 py-8">
                {error && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6" aria-label={t('signInFormAriaLabel')}>
                    <Input
                        type="email"
                        label={t('emailLabel')}
                        placeholder={t('emailPlaceholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        size="lg"
                        classNames={inputClasses}
                    />
                    <Input
                        type="password"
                        label={t('passwordLabel')}
                        placeholder={t('passwordPlaceholder')}
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
                        {isSubmitting ? <Spinner /> : t('signInButton')}
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}