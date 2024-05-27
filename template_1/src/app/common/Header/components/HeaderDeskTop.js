import React from 'react';
import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { navigationLinks } from '../NavigationConsts';
import '@Public/css/underline-animation.css'
import { LocalSwitcherDesktop } from './LocalSwitcher/LocalSwitcherDesktop';

const phoneNumber = {
  title: '(999) 999 99999',
  link: 'tel:(999) 999 99999',
  // icon: HiPhoneArrowUpRight,
  icon: "null"
}

const NavigationDesktop = () => {
  return (
    <header className='fixed py-4 border border-b-slate-100 w-full'>
      <Box display={{ base: 'none', md: 'block' }}>
        <Box maxWidth="1280px" margin="0 auto">
          <Flex alignItems="center" justifyContent="space-between">
            <Link href="/">
              <Box display="flex" gap="2" alignItems="center">
                {/* <HiHomeModern size="30" /> */}
                <Text fontSize="2xl" fontWeight="black" as={'b'}>
                  YOUR LOGO{' '}
                </Text>
              </Box>
            </Link>
            <Flex gap='6' alignItems='center' fontWeight='medium' >
              <LocalSwitcherDesktop />
              <NavigationLinks
                key={phoneNumber.title}
                link={phoneNumber.link}
                title={phoneNumber.title}
                icon={<phoneNumber.icon />}
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </header>
  );
};

export default NavigationDesktop;

const NavigationLinks = ({
  title,
  link,
  icon,
}) => {
  return (
    <Link href={link} className="font-display max-w-sm leading-tight">
      <Flex align="center" gap="0.5rem">
        {icon}
        <Text fontSize="2xl" fontWeight="black" as={'b'} width={'100%'}>
          <span className='link link-underline link-underline-black text-black'>
            {title}
          </span>
        </Text>
      </Flex>
    </Link>
  );
};