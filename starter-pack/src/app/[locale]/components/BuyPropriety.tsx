import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function BuyPropriety() {
  const t = useTranslations("BuyPropriety");
  return (
    <>
      <section id="sell-propriety" className="bg-primary-400 text-white">
        <div className="container mx-auto flex flex-col-reverse items-center text-center justify-center gap-7 md:flex-row px-10 py-5">
          <div className="flex flex-col items-center justify-center w-full h-full gap-6 md:flex-1">
            <h1 className="text-2xl font-bold">{t("title")}</h1>
            <p className="text-xl text-center">{t("description")}</p>
            <Button className="bg-primary-500 text-white font-bold">{t("button")}</Button>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full md:flex-1">
            <Image src="/Happy-Family-Receiving-Keys-From-Real-Estate-Agent-Outside-New-Home.png" alt="Sell your propriety" width={500} height={500} />
          </div>
        </div>
      </section>
    </>
  );
}