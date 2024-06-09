import { AGENT_INFO } from '@/constantes/agent.const';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <>
            <footer className="w-full flex justify-center pt-16 pb-6 px-6 bg-primary-200">
                <div className="w-3/4 ">
                    <div className=" pb-16 grid grid-cols-3 gap-4 border-b border-white">
                        <div className="col-span-1">
                            <Image src="/logo.png" className='p-3' alt="logo" width={150} height={150} />
                        </div>
                        <div className="col-span-1">
                            <div className="text-xl font-bold border-b border-gray-300 w-full">{t('contact-me')}</div>
                            <div className='flex flex-col gap-4 my-8'>
                                <Link href={`tel:${AGENT_INFO.phone}`} className="text-xl">
                                    {AGENT_INFO.phone}
                                </Link>
                                <Link href={`mailto:${AGENT_INFO.email}`} className="text-xl">
                                    {AGENT_INFO.email}
                                </Link>
                            </div>
                            <div className='my-8 w-2/3'>
                                <Button size='lg' radius='full' className='text-xl'>{t('I-want-to-buy-or-sell')}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

