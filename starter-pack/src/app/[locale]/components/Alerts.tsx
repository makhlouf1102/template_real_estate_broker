import { useTranslations } from "next-intl";

export default function Alerts() {
    const t = useTranslations("AlertsSection");

    return (
        <section id="real-estate-alerts" className="bg-primary-500 text-white">
            <div className="container mx-auto  px-8 py-4 flex flex-col gap-6 items-center justify-center">
                <h1 className="text-2xl font-bold">{t("title")}</h1>
                <p className="text-xl text-center">{t("description")}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">{t("button")}</button>
            </div>
        </section>
    );
}