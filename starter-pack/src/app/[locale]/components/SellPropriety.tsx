import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SellPropriety() {
    const t = useTranslations("SellPropriety");
    return (
        <>
            <section id="sell-propriety">
                <div className="bg-primary-200 text-white">
                    <div className="container mx-auto flex flex-col-reverse items-center text-center justify-center gap-7 md:flex-row-reverse px-10 py-5">
                        <div className="flex flex-col items-center justify-center w-full h-full gap-6 md:flex-1">
                            <h1 className="text-2xl font-bold">{t("title")}</h1>
                            <p className="text-xl text-center">{t("description")}</p>
                            <Button className="bg-primary-500 text-white font-bold">{t("button")}</Button>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full md:flex-1">
                            <Image src="/Two-Female-Real-Estate-Agents-Showing-Home-For-Sale-Sign.png" alt="Sell your propriety" width={310} height={177} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}