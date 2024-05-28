import { useTranslations } from "next-intl";
import { navigationSections } from "./navigationCommons";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

export const DesktopNav = () => {
    const t = useTranslations('Header.Navigation');

    return (
        <nav className="flex items-center justify-center h-16 border-t border-gray-200 relative">
            <ul className="flex items-center gap-4">
                {navigationSections.map((section) => (
                    <li key={section.label} className="relative group p-2">
                        <Link href={section.href} className="text-base font-bold gap-2 flex items-center hover:opacity-80 hover:cursor-pointer">
                            {t(section.label)}
                            {section.dropdown && <FaAngleDown />}
                        </Link>
                        {section.dropdown && (
                            <ul className="absolute left-0 top-full mt-2 w-fit bg-gray-200 flex flex-col gap-2 py-4 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 group-hover:flex">
                                {section.dropdown.map((item) => (
                                    <li key={item.label} className="p-2">
                                        {t(item.label)}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
