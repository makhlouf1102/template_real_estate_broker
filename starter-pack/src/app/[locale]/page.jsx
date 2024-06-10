import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from "next-intl/server";
import About from './components/About';


export default function IndexPage({locale}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <>
      <About />
    </>
  );
}
