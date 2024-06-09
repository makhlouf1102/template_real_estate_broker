import {useTranslations} from 'next-intl';
import Link from 'next/link';

const MAIN_PHONE = '+336123456789';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
      <>
          <header>
              <nav>
                  <div>
                      <Link href="/">
                          LOGO
                      </Link>
                      <Link href="/about">
                          faslkdjf
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
}
