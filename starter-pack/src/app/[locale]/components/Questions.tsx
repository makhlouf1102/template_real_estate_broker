'use client';

import {Accordion, AccordionItem} from '@nextui-org/react';
import {LocaleProps} from '@props/Locale.props';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Questions({locale}: LocaleProps) {
  const t = useTranslations('Questions');

  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <section className="py-12" id="questions">
      <div className="container mx-auto flex flex-col items-center justify-center gap-12 px-10">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold">{t('title')}</h2>
        </div>
        <div className="flex w-full flex-col justify-between gap-6 ">
          <div className="flex w-full justify-center">
            <Image
              alt="Our team of real estate agents standing outside homes"
              src="/Team-of-Real-Estate-Agents-Standing-Outside-Homes.png"
              width={310} 
              height={177}
            />
          </div>
          <div className="w-full">
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
