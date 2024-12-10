'use client';

import Link from 'next/link';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { socialLinks } from '../utils/helpers';
import Image from 'next/image';
import { Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer className='bg-[#1C211C] text-white py-16 md:py-24 mt-auto'>
      <div className='container grid md:grid-cols-4 gap-12 md:gap-4'>
        <div className='mr-4'>
          <Link href='/'>
            <Image
              src={'/logo/ecoexpert-white-mixed.png'}
              alt='ecoexpert cleaning solutions services limited'
              width={250}
              height={100}
            />
          </Link>
          <p className='mt-4'>Let us make it sparkle!</p>
          <div className='flex items-center gap-10 md:gap-4 mt-4'>
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target='_blank'
                key={link.name}
                className='text-2xl'
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-lg font-bold'>OUR SERVICES</h2>
          <ul className='flex flex-col gap-4 mt-4'>
            <li>Window Cleaning</li>
            <li>Carpet Cleaning</li>
            <li>Deep Cleaning</li>
            <li>General Cleaning</li>
            <li>Gardening and Fumigation Services</li>
            <li>
              Customized cleaning contracts for offices, businesses and retail
              spaces
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-bold'>QUICK LINKS</h2>
          <ul className='flex flex-col gap-4 mt-4'>
            <li>
              <Link href='/about'>About us</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-bold'>GET IN TOUCH</h2>
          <ul className='flex flex-col gap-4 mt-4'>
            <li>
              <p className='flex items-baseline gap-2'>
                <FaLocationDot />
                <Stack>
                  <span>Suite RA01,</span>
                  <span>195-197 Wood Street</span>
                  <span>London, E17 3NU</span>
                  <span>United Kingdom</span>
                </Stack>
              </p>
            </li>
            <li>
              <p className='flex items-center gap-2'>
                <FaPhone />
                <span>+44 (0) 3301332702</span>
              </p>
            </li>
            <li>
              <p className='flex flex-wrap items-center gap-2'>
                <MdMail />
                <a
                  href='mailto:contactus@ecoexpertsolutions.co.uk'
                  target='_blank'
                  className='text-wrap'
                >
                  Contact Us
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
