"use client"

import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';
import {Spinner} from "@nextui-org/spinner";
import React from "react";

export default function Alerts() {
    const t = useTranslations("AlertsSection");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [showConfetti, setShowConfetti] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onOpen(); // Open the confirmation modal
    };

    const confirmSubscription = async () => {
        setIsLoading(true);
        setMessage("");
        
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            
            const data = await response.json();

            if (data.success) {
                setMessage(t("successMessage"));
                setEmail("");
                setShowConfetti(true);
            } else {
                setMessage(data.error || t("errorMessage"));
            }
        } catch (error) {
            setMessage(t("errorMessage"));
        } finally {
            setIsLoading(false);
            onClose(); // Close the modal
        }
    };

    useEffect(() => {
        if (showConfetti) {
            let duration = 5 * 1000;
            let animationEnd = Date.now() + duration;
            let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min: number, max: number): number => {
                return Math.random() * (max - min) + min;
            };

            let interval = setInterval(function() {
                let timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    setShowConfetti(false);
                    return clearInterval(interval);
                }

                let particleCount = 50 * (timeLeft / duration);
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);

            return () => clearInterval(interval);
        }
    }, [showConfetti]);

    return (
        <section id="real-estate-alerts" className="bg-gradient-to-r from-primary-100 to-primary-200 py-16 md:py-24" aria-labelledby="alerts-title">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 id="alerts-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 text-center mb-6">{t("title")}</h2>
                <p className="text-lg md:text-xl text-primary-800 opacity-80 text-center mb-8 max-w-md mx-auto">{t("description")}</p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
                    <label className="sr-only" htmlFor="email-input">{t("emailLabel")}</label>
                    <Input 
                        id="email-input"
                        fullWidth 
                        placeholder={t("emailPlaceholder")}
                        name="email" 
                        type="email" 
                        required
                        className="text-lg bg-white text-primary-300 border-primary-300 focus:border-primary-500 rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                    <Button 
                        type="submit" 
                        className="bg-primary-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-primary-600 transition duration-300"
                        disabled={isLoading}
                    >
                        {/* {isLoading ? t("loadingButton") : t("button")} */}
                        {t("button")}
                    </Button>
                </form>
                {message && <p className="text-center mt-4 text-primary-700 font-semibold">{message}</p>}
            </div>

            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{t("confirmModalTitle")}</ModalHeader>
                            <ModalBody>
                                <p>{t("confirmModalBody", { email })}</p>
                                <p>{t("informAboutUsage")}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    {t("cancelButton")}
                                </Button>
                                <Button color="default" onPress={confirmSubscription}>
                                    {isLoading ? <Spinner /> : t("confirmButton")}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
}