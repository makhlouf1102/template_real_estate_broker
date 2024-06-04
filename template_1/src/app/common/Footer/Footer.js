import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { socialMedia } from '../socialMedia/commons';
import Link from 'next/link';
import { useTranslations } from "next-intl";

const Footer = () => {
  const space = "space-y-3"
  const currentYear = new Date().getFullYear()
  const tNav = useTranslations("Header.Navigation")
  const tInfo = useTranslations("Header.Info")

  return (
    <>

      <footer className="w-full flex-col justify-center">
        <div className="hidden lg:flex w-full justify-center">
          <div className="w-3/5 pt-16 pb-20 px-4 ">
            <div className="container grid grid-cols-4 gap-x-10">
              <div className={`${space}`}>
                <h4 className="text-lg font-bold">{tNav("about")}</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#about-me" className="hover:opacity-70">{tNav("about")}</Link></li>
                  <li><Link href="#specialists" className="hover:opacity-70">{tNav("specialities")}</Link></li>
                  <li><Link href="#testimonials" className="hover:opacity-70">{tNav("testimonials")}</Link></li>
                </ul>
                <div>
                  <Link href="#blog" className="text-lg font-bold hover:opacity-70">{tNav("blog")}</Link>
                </div>
                <div>
                  <Link href="#properties" className="text-lg font-bold hover:opacity-70">{tNav("properties")}</Link>
                </div>
              </div>
              <div className={`${space}`}>
                <h4 className="text-lg font-bold">{tNav("buy")}</h4>
                <ul className="space-y-1">
                  <li><Link href="#real-estate-alert" className="hover:opacity-70">{tNav("real-estate-alert")}</Link></li>
                  <li><Link href="#become-owner" className="hover:opacity-70">{tNav("buy-a-property")}</Link></li>
                </ul>
                <h4 className="text-lg font-bold mt-4">{tNav("sell")}</h4>
                <ul className="space-y-1">
                  <li><Link href="#property-assessment" className="hover:opacity-70">{tNav("property-assessment")}</Link></li>
                  <li><Link href="#selling-property" className="hover:opacity-70">{tNav("sell-your-property")}</Link></li>
                </ul>
              </div>
              <div className={`${space}`}>
                <Link href="#contact-me" className="text-lg font-bold">{tNav("contact")}</Link>
                <address className="not-italic flex flex-col gap-y-3">
                  <span className="flex gap-2">
                    <FaLocationDot />
                    <p>
                      XXXX Web Street<br />
                      Office 999<br />
                      City, XX, XXX XXX
                    </p>
                  </span>
                </address>
                <span className="flex gap-2">
                  <FaPhone />
                  <Link href="tel:+19999999999" className="block hover:opacity-70 font-bold">999 999-9999 (off.)</Link>
                </span>
                <span className="flex gap-2">
                  <FaPhone />
                  <Link href="tel:+19999999999" className="block hover:opacity-70 font-bold">999 999-9999 (cell)</Link>
                </span>
                <span className="flex gap-2">
                  <FaEnvelope />
                  <Link href="mailto:email@email.com" className="block hover:opacity-70 font-bold">email@email.com</Link>
                </span>

              </div>
              <div className={`${space}`}>
                <div className="text-center">
                  <img src="remax-logo.png" alt="RE/MAX du Cartier" className="mx-auto mb-2" />
                  <p className="text-gray-700">Agence immobilière</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 w-full flex justify-center">
          <div className="w-full lg:w-3/5 flex justify-between py-4 px-8 lg:px-4">
            <span className="w-3/4 grid grid-rows-3 gap-7 lg:grid-cols-3  lg:h-auto justify-between">
              <p className="font-bold text-sm">{currentYear} © {tInfo("copyright")}</p>
              <Link href="#terms-of-use" className="hover:opacity-70 font-bold text-sm"> Web Conception | 1102 Solution</Link>
              <Link href="#privacy-policy" className="hover:opacity-70 font-bold text-sm">{tInfo("privacy-policy")}</Link>
            </span>
            <span className="lg:flex-row flex flex-col justify-center">
              <span className="flex gap-4">
                {socialMedia.map((item) => (
                  <span key={item.title} className='hover:opacity-70'>
                    <Link href={item.link} target='_blank'>
                      {item.icon}
                    </Link>
                  </span>
                ))}
              </span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;