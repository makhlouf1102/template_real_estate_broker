import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
    
    const t = useTranslations("About");

    return (
        <section id="about"> 
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-10 py-20 px-10">
                <Image src="/image.png" alt="Photo de l'agent immobilier" width={500} height={500} />
                <div className="about-text flex flex-col gap-2">
                    <h2 className="text-3xl font-bold">{t("title")}</h2>
                    <p>{t("description")}</p>
                </div>
            </div>
        </section>
    )
}