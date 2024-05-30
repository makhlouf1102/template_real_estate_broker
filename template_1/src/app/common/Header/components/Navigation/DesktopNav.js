import { useTranslations } from "next-intl";
import { navigationSections } from "./navigationCommons";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { useLocale } from 'next-intl';

export const DesktopNav = () => {
    const t = useTranslations('Header.Navigation');
    const localActive = useLocale();

    return (
        <nav className="flex items-center justify-center h-16 border-t border-gray-200 relative">
            <ul className="flex items-center gap-4">
                {navigationSections.map((section) => (
                    <li key={section.label} className="relative group p-2">
                        <Link href={section.href} locale={localActive} className="text-base font-bold gap-2 flex items-center hover:opacity-80 hover:cursor-pointer">
                            {t(section.label)}
                            {section.dropdown && <FaAngleDown />}
                        </Link>
                        {section.dropdown && (
                            <ul className="absolute top-full min-w-60 bg-gray-200 flex flex-col opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 group-hover:flex">
                                {section.dropdown.map((item) => (
                                    <Link key={item.label} href={item.href} locale={localActive}>
                                        <li className="p-4 hover:bg-gray-300">
                                            {t(item.label)}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
