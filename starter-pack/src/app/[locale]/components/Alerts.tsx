"use client"

import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Alerts() {
    const t = useTranslations("AlertsSection");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onOpen(); // Open the confirmation modal
    };

    const confirmSubscription = async () => {
        onClose(); // Close the modal
        setIsLoading(true);
        setMessage("");

        try {
            console.log("hey");
            console.log(process.env.NEXT_PUBLIC_API_SECRET_KEY);
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-API-Key': process.env.NEXT_PUBLIC_API_SECRET_KEY || '',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage(t("successMessage"));
                setEmail("");
            } else {
                setMessage(data.error || t("errorMessage"));
            }
        } catch (error) {
            setMessage(t("errorMessage"));
        } finally {
            setIsLoading(false);
        }
    };

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
                        {isLoading ? t("loadingButton") : t("button")}
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
                                    {t("confirmButton")}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
}