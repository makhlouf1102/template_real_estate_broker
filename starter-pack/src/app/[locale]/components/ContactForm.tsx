'use client';

import { useState } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations("ContactMeForm");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(t("successMessage"));
        e.currentTarget.reset();
      } else {
        alert(t("errorMessage"));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t("errorMessage"));
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
    <section id='contact' className='py-16 bg-gray-100' aria-labelledby="contact-form-title">
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl'>
        <h2 id="contact-form-title" className="text-3xl font-bold text-center mb-4">{t("title")}</h2>
        <p className="text-center text-gray-600 mb-8">{t("description")}</p>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit} aria-label={t("formAriaLabel")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">{t("name")}</label>
              <Input
                id="name"
                label={t("name")}
                placeholder={t("namePlaceholder")}
                name="name"
                aria-label={t("name")}
                required
                classNames={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{t("email")}</label>
              <Input
                id="email"
                label={t("email")}
                placeholder={t("emailPlaceholder")}
                name="email"
                type="email"
                aria-label={t("email")}
                required
                classNames={inputClasses}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">{t("message")}</label>
            <Textarea
              id="message"
              label={t("message")}
              placeholder={t("messagePlaceholder")}
              name="message"
              aria-label={t("message")}
              minRows={4}
              required
              classNames={inputClasses}
            />
          </div>
          <Button 
            className='bg-secondary-300 text-white font-bold hover:bg-secondary-400 transition-colors w-full md:w-auto md:self-start'
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("submitting") : t("button")}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;