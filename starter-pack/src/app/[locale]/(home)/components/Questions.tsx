'use client';

import {Accordion, AccordionItem} from '@nextui-org/react';
import {LocaleProps} from '@props/Locale.props';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Questions({locale}: LocaleProps) {
  const t = useTranslations('Questions');

  const faqs = [
    { question: t('faq1.question'), answer: t('faq1.answer') },
    { question: t('faq2.question'), answer: t('faq2.answer') },
    { question: t('faq3.question'), answer: t('faq3.answer') },
  ];

  return (
    <section className="py-12 bg-gray-50" id="questions" aria-labelledby="questions-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="questions-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              alt={t('imageAlt')}
              src="/Team-of-Real-Estate-Agents-Standing-Outside-Homes.png"
              width={500} 
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={faq.question}
                  className="mb-4"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}