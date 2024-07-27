import React from 'react';
import { LocaleProps } from '@props/Locale.props';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { AGENT_INFO } from '@/constantes/agent.const';
import { FaPhone } from "react-icons/fa6";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";

export default function Navigation({ locale }: LocaleProps) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('Navigation');
  
  const menuItems = [
    { label: t('about'), href: '/' },
    { label: 'Page 1', href: '/' },
    { label: 'Page 2', href: '/' },
    { label: 'Page 3', href: '/' },
  ];

  return (
    <Navbar>
      <NavbarContent>
        <NavbarMenuToggle aria-label="Open menu" className="sm:hidden" />
        <NavbarBrand>
          <Image
            alt="Logo de l'agent immobilier"
            src="/logo.png"
            height={50}
            width={50}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button as={Link} href={`tel:${AGENT_INFO.phone}`} className="w-full">
            <FaPhone />
            <span className="ml-2">{AGENT_INFO.phone}</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link color="foreground" className="w-full" href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button as={Link} href={`tel:${AGENT_INFO.phone}`} className="w-full">
            <FaPhone />
            <span className="ml-2">{AGENT_INFO.phone}</span>
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
