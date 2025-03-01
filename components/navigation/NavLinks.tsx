'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { SheetClose } from '@/components/ui/sheet';
import navLinks from '@/constants/index';
import { cn } from '@/lib/utils';

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((item) => {
        const isActive =
          (pathname.includes(item.href) && item.href.length > 1) ||
          pathname === item.href;

        const LinkComponent = (
          <Link
            href={item.href}
            key={item.name}
            className={cn(
              isActive ? 'text-primary' : isMobileNav ? 'text-white' : '',
              'flex items-center justify-start gap-4 bg-transparent p-4 hover:text-primary transition-all duration-300'
            )}
          >
            {item.name}
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.name}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <ul key={item.name} className='flex items-center'>
            {LinkComponent}
          </ul>
        );
      })}
    </>
  );
};
export default NavLinks;
