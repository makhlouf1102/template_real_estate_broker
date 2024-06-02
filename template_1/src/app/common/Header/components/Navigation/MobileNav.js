// import { FaBars, FaXmark, FaAngleDown } from "react-icons/fa6";
// import { navigationSections } from "./navigationCommons";
// import Link from "next/link";
// import { useTranslations, useLocale } from 'next-intl';


// {/* <div class="relative mb-3">
// <h6 class="mb-0">
//   <button
//     class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
//     data-collapse-target="collapse-1"
//   >
//     <span>What is Material Tailwind?</span>
//     <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
//     <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
//   </button>
// </h6>
// <div
//   data-collapse="collapse-1"
//   class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
// >
//   <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
//     We're not always in the position that we want to be at. We're constantly
//     growing. We're constantly making mistakes. We're constantly trying to
//     express ourselves and actualize our dreams.
//   </div>
// </div>
// </div> */}

// // implment the accordion menu


// export const MobileNav = () => {
//     const t = useTranslations('Header.Navigation');
//     const localActive = useLocale();

//     return (
//         <label className="relative z-40 cursor-pointer" htmlFor="mobile-menu">
//             <input className="peer hidden" type="checkbox" id="mobile-menu" />
//             <FaBars size={28} className="cursor-pointer hover:opacity-70" />    

//             <div
//                 className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
//             >

//                 <div className="float-right min-h-full w-[75%] bg-white px-6 p-4 shadow-2xl">
//                     <span className="w-full h-10 flex items-center justify-end">
//                         <FaXmark size={28} className="cursor-pointer hover:opacity-70" />
//                     </span>
//                     <menu className="flex flex-col items-center justify-start gap-4">
//                         {navigationSections.map((section) => (
//                             <li key={section.label}>
//                                 {section.href ? (
//                                     <Link href={section.href} locale={localActive} className="block px-4 py-2 w-full text-gray-700 hover:bg-gray-800 hover:text-white">
//                                         {t(section.label)}
//                                         {section.dropdown && <FaAngleDown />}
//                                     </Link>
//                                 ) : (
//                                     <span className="text-base font-bold gap-2 flex items-center hover:opacity-80 hover:cursor-pointer">
//                                         {t(section.label)}
//                                         {section.dropdown && <FaAngleDown />}
//                                     </span>
//                                 )}
//                             </li>
//                         ))}
//                     </menu>
//                 </div>
//             </div>
//         </label>
//     );
// }

import { FaBars, FaXmark, FaAngleDown } from "react-icons/fa6";
import { navigationSections } from "./navigationCommons";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

export const MobileNav = () => {
    const t = useTranslations('Header.Navigation');
    const localActive = useLocale();

    return (
        <label className="relative z-40 cursor-pointer" htmlFor="mobile-menu">
            <input className="peer hidden" type="checkbox" id="mobile-menu" />
            <FaBars size={28} className="cursor-pointer hover:opacity-70" />    

            <div
                className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
            >
                <div className="float-right min-h-full w-[75%] bg-white px-6 p-4 shadow-2xl">
                    <span className="w-full h-10 flex items-center justify-end">
                        <FaXmark size={28} className="cursor-pointer hover:opacity-70" />
                    </span>
                    <menu className="flex flex-col items-center justify-start gap-4">
                        {navigationSections.map((section) => (
                            <li key={section.label} className="w-full">
                                <label className="block w-full">
                                    <input type="checkbox" className="peer hidden" id={`accordion-${section.label}`} />
                                    <div className="relative flex items-center w-full p-4 font-semibold text-left cursor-pointer transition-all ease-in border-b border-solid border-slate-100 text-slate-700 group">
                                        {section.href ? (
                                            <Link href={section.href} locale={localActive} className="block w-full">
                                                <span>{t(section.label)}</span>
                                                <FaAngleDown className="absolute right-0 text-xs transition-transform transform peer-checked:rotate-180" />
                                            </Link>
                                        ) : (
                                            <span className="w-full text-base font-bold gap-2 flex items-center">
                                                {t(section.label)}
                                                <FaAngleDown className="absolute right-0 text-xs transition-transform transform peer-checked:rotate-180" />
                                            </span>
                                        )}
                                    </div>
                                    {section.dropdown && (
                                        <div className="h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:h-auto">
                                            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                                                {section.dropdown.map((item) => (
                                                    <Link key={item.label} href={item.href} locale={localActive} className="block px-4 py-2 w-full text-gray-700 hover:bg-gray-800 hover:text-white">
                                                        {t(item.label)}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </label>
                            </li>
                        ))}
                    </menu>
                </div>
            </div>
        </label>
    );
}
