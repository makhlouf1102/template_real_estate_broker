import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MAIN_PHONE } from '@/app/[locale]/constants/Info.const';

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
                        <span>{t('call-me')}: {MAIN_PHONE}</span>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
