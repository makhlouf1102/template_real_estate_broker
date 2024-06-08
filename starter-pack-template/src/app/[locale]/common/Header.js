// components/Header.js
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { PHONE_NUMBER } from '@constants/contactInfo.const';

const Header = () => {
    const t = useTranslations('Main.Header');

    return (
        <>
            <header>
                <nav>
                    <div>
                        <Link href="/">
                            LOGO
                        </Link>
                    </div>
                    <div>
                        <span>
                            <button>{t('free-evaluation')}</button>
                        </span>
                        <span>{t('call-me')}: {PHONE_NUMBER}</span>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
