import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
    
    const t = useTranslations("About");

    return (
        <section id="about">
            <div className="about-content">
                <Image src="/image.png" alt="Photo de l'agent immobilier" width={500} height={500} />
                <p>{t("description")}</p>
            </div>
        </section>
    )
}