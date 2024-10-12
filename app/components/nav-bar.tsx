'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  {
    id: 1,
    title: 'About',
    url: '/about',
  },
  {
    id: 2,
    title: 'Services',
    url: '/services',
  },
  {
    id: 3,
    title: 'FAQs',
    url: '/faq',
  },
  {
    id: 4,
    title: 'Contact',
    url: '/contact',
  },
];

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const pathname = usePathname();

  const isActive = (path: string) => {
    return path === pathname;
  };

  return (
    <nav className='bg-white h-16 flex items-center'>
      <div className='container flex justify-between items-center'>
        <Link href='/'>LOGO</Link>
        <div className='hidden md:flex items-center justify-between w-2/3'>
          <ul className='flex gap-10'>
            {links.map((link) => (
              <li
                key={link.id}
                className={`hover:text-lemon ${
                  isActive(link.url) ? 'underline text-semibold' : ''
                }`}
              >
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <button className='btn btn-outline'>Book us</button>
        </div>
        <button ref={btnRef} onClick={onOpen} className='md:hidden'>
          <HamburgerIcon />
        </button>
        <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
          <DrawerOverlay />
          <DrawerContent className='px-8 pt-16'>
            <DrawerCloseButton />
            <ul className='flex flex-col gap-10 mb-16 text-lg'>
              {links.map((link) => (
                <li
                  key={link.id}
                  className={
                    isActive(link.url)
                      ? 'text-lemon underline text-semibold'
                      : ''
                  }
                >
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <button className='btn btn-outline'>Book us</button>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
