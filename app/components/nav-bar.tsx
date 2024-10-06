'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

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

  const isActive = (path: string) => {
    return path === pathname;
  };

  return (
    <nav className='bg-white h-16 flex items-center'>
      <div className='container flex justify-between items-center'>
        <Link href='/'>LOGO</Link>
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
    </nav>
  );
};

export default NavBar;
