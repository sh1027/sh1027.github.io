'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from "react";

const mainlogo = { name: "Shiori Ueda", href: '/' }

const links = [
  { name: 'CV', href: 'https://keio.box.com/s/pzur7yw2z0e3c05bthvav2dgfroytowv' },
  { name: 'Photography (coming soon...)', href: '#' },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-neutral-200">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between flex-wrap p-2">
        <div className="flex items-center flex-shrink-0 text-neutral-900 ml-4 mr-6">
          <Link onClick={handleMenuClose} href={mainlogo.href} className="h-8 w-auto">
            <span className="font-semibold text-xl tracking-tight">{mainlogo.name}</span>
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <button className="text-neutral-900 w-10 h-6 relative focus:outline-none" onClick={handleMenuOpen}>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true" className={clsx(
                'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out',
                {
                  'rotate-45': isOpen,
                  '-translate-y-1.5': !isOpen,
                },
              )}></span>
              <span aria-hidden="true" className={clsx(
                'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out',
                {
                  'opacity-0': isOpen,
                },
              )}></span>
              <span aria-hidden="true" className={clsx(
                'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out',
                {
                  '-rotate-45': isOpen,
                  'translate-y-1.5': !isOpen,
                },
              )}></span>
            </div>
          </button >
        </div >
        <div className={clsx(
          {
            'w-full block flex-grow md:flex md:items-center md:w-auto': isOpen,
            'w-full hidden flex-grow md:flex md:items-center md:w-auto': !isOpen,
          },
        )}>
          <div className="text-sm md:flex-grow">
            <>
              {links.map((link) => {
                return (
                  <Link
                    onClick={handleMenuClose}
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'block mt-4 ml-6 md:inline-block md:mt-0 md:ml-0 text-neutral-600 hover:text-neutral-800 mr-4',
                      {
                        'text-neutral-800': pathname === link.href,
                      },
                    )}
                  >
                    <p className="md:block">{link.name}</p>
                  </Link>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </nav >
  );
}
