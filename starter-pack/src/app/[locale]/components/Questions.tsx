"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Questions() {

    const t = useTranslations("Questions");

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <section id="questions" className="py-12">
            <div className="flex flex-col items-center justify-center ">
                <h2 className="text-2xl font-bold">{t("title")}</h2>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-10 py-20 px-10">
                <div className="flex flex-col justify-between w-full gap-6 md:flex-row">
                    <div className="w-full">
                        <Image src="/image.png" alt="questions-1" width={500} height={500} />
                    </div>
                    <div className="w-full">
                        <Accordion>
                            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}