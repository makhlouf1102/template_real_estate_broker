import Link from 'next/link';
import { useLocale } from 'next-intl';

export const LanguageSwitch = () => {
    const localActive = useLocale();

    return (
        <div className="relative inline-block text-left">
            <div className="flex space-x-4">
                <Link href="/en" className={`cursor-pointer ${localActive === 'en' ? 'hidden' : 'text-gray-700 hover:opacity-70 transition-opacity duration-200'}`}>
                        English
                </Link>
                <Link href="/fr" className={`cursor-pointer ${localActive === 'fr' ? 'hidden' : 'text-gray-700 hover:opacity-70 transition-opacity duration-200'}`}>
                        Français
                </Link>
            </div>
        </div>
    );
};
