'use client';

import Link from 'next/link';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { socialLinks } from '../utils/helpers';

const Footer = () => {
  return (
    <footer className='bg-[#1C211C] text-white py-24 mt-auto'>
      <div className='container flex flex-col md:grid md:grid-cols-4 gap-12'>
        <div>
          <h1 className='text-2xl font-bold'>LOGO</h1>
          <p className='mt-4'>
            Where cleanliness meets affordability and technology to meet our
            client&apos;s needs
          </p>
        </div>
        <div>
          <h2 className='text-lg font-bold'>OUR SERVICES</h2>
          <ul className='flex flex-col gap-4 mt-4'>
            <li>
              <Link href='/'>Office Cleaning</Link>
            </li>
            <li>
              <Link href='/'>Express Cleaning</Link>
            </li>
            <li>
              <Link href='/'>Household Cleaning</Link>
            </li>
            <li>
              <Link href='/'>Disinfectant Cleaning</Link>
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
              <Link href='/'>Gallery</Link>
            </li>
            <li>
              <Link href='/'>Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-bold'>GET IN TOUCH</h2>
          <ul className='flex flex-col gap-4 mt-4'>
            <li>
              <div className='flex items-center gap-2'>
                <FaLocationDot />
                <span>Brixton Close, London, United Kingdom</span>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-2'>
                <FaPhone />
                <span>+44 890-7171-298227</span>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-2'>
                <MdMail />
                <span>contactus@ecoexpertsolutions.co.uk</span>
              </div>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
