import Image from 'next/image';
import React from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import NavLinks from './NavLinks';

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/icons/hambuger.svg'
          alt='Hamburger Menu'
          width={36}
          height={36}
          className='invert-colors sm:hidden'
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='background-light900_dark200 border-none'
      >
        <SheetTitle className='hidden'>Navigation</SheetTitle>
        <div className='no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto'>
          <SheetClose asChild>
            <section className='flex h-full flex-col gap-6 pt-16'>
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavigation;
