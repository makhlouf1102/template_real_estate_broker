import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { AGENT_INFO } from '../constantes/agent.const';
import { FaPhone } from "react-icons/fa6";

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
      <>
          <header className="w-full flex justify-center border-b border-gray-100">
              <nav className="p-4 flex justify-between items-center w-3/4">
                  <div className="p-3">
                      <Link href="/" className="bg-red-500">
                          <Image src="/logo.png" alt="logo" width={150} height={150} />
                      </Link>
                  </div>
                  <div className="font-medium text-base p-3 flex items-center">
                      <FaPhone className="w-4 h-4 mr-2" />
                      <Link href={`tel:${AGENT_INFO.phone}`} className="hover:underline underline-offset-8">{AGENT_INFO.phone}</Link>
                  </div>
              </nav>
          </header>
      </>
  );
}
