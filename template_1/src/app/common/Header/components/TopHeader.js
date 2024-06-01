import React from 'react';
import { LanguageSwitch } from './LanguageSwitch/LanguageSwitch';
import { DesktopNav } from './Navigation/DesktopNav';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaBars } from "react-icons/fa6";
import Link from 'next/link';
import { MobileNav } from './Navigation/MobileNav';




const iconsStyle = {
  size: 18,
  round: true,
  color: '#000',
  hoverColor: '#fff',
  hoverBackgroundColor: '#000',
  hoverBorderColor: '#000',
  hoverBorderWidth: '0',
  hoverBorderStyle: 'none',
  hoverTextDecoration: 'none',
}

const phoneNumber = {
  title: '(999) 999 99999',
  link: 'tel:(999) 999 99999',
  icon: <FaPhone size={iconsStyle.size} />
}

const socialMedia = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: <FaFacebookF size={iconsStyle.size} />
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/',
    icon: <FaLinkedinIn size={iconsStyle.size} />
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: <FaInstagram size={iconsStyle.size} />
  },
]

const TopHeader = () => {
  return (
    <header>
      <div id='top-header' className='h-20 flex gap-2 w-full justify-between items-start px-10 pt-6 relative' >
        <div id='social-media' className='hidden lg:flex gap-4 justify-center items-center h-auto sm:hidden'>
          {socialMedia.map((item) => (
            <span key={item.title} className='hover:opacity-70'>
              <a href={item.link} target='_blank'>
                {item.icon}
              </a>
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
          <a href={phoneNumber.link} >
            <span className='flex gap-2 justify-center items-center' >
              {phoneNumber.icon}
              <p className='text-lg font-bold' >
                {phoneNumber.title}
              </p>
            </span>
          </a>
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
