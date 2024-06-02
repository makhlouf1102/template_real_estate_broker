import React from 'react';
import { LanguageSwitch } from './LanguageSwitch/LanguageSwitch';
import { DesktopNav } from './Navigation/DesktopNav';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaBars, FaEnvelope } from "react-icons/fa6";
import Link from 'next/link';
import { MobileNav } from './Navigation/MobileNav';
import { socialMedia } from '../../socialMedia/commons';




const phoneNumber = {
  title: '(999) 999 99999',
  link: 'tel:(999) 999 99999',
  icon: <FaPhone size={18} />
}

const TopHeader = () => {
  return (
    <header>
      <div id='top-header' className='h-20 flex gap-2 w-full justify-between items-start px-10 pt-6 relative' >
        <div id='social-media' className='hidden lg:flex gap-4 justify-center items-center h-auto sm:hidden'>
          {socialMedia.map((item) => (
            <span key={item.title} className='hover:opacity-70'>
              <Link href={item.link} target='_blank'>
                {item.icon}
              </Link>
            </span>
          ))}
        </div>
        <div>
          <div className='absolute left-1/2 -translate-x-1/2' >
            <Link href="/">
              <p className='text-2xl font-bold' >
                YOUR LOGO
              </p>
            </Link>
          </div>
        </div>
        <div className='hidden lg:flex gap-6 justify-center items-center h-auto ' >
          <LanguageSwitch />
          <Link href={phoneNumber.link} >
            <span className='flex gap-2 justify-center items-center' >
              {phoneNumber.icon}
              <p className='text-lg font-bold' >
                {phoneNumber.title}
              </p>
            </span>
          </Link>
        </div>
        <span className='block lg:hidden' >
          <MobileNav />
        </span>
      </div>
      <span className='hidden lg:block' >
        <DesktopNav />
      </span>

    </header>
  );
};

export default TopHeader;
