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
    <div
      className={cn(
        'flex',
        isMobileNav
          ? 'flex-col'
          : 'flex-row items-center gap-1 sm:gap-1 lg:gap-4'
      )}
    >
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
              'flex items-center bg-transparent px-2 py-2 md:px-3 hover:text-primary transition-all duration-300 whitespace-nowrap text-sm md:text-base'
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
          <React.Fragment key={item.name}>{LinkComponent}</React.Fragment>
        );
      })}
    </div>
  );
};
export default NavLinks;
