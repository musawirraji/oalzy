'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import MobileNavigation from './MobielNavigation';
import DiscountButton from '../button/DiscountButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
        }`}
      >
        <div className='container mx-auto flex justify-between items-center max-w-7xl'>
          <Image src='/icons/logo.svg' alt='Logo' width={120} height={120} />

          <div className='max-lg:hidden'>
            <NavLinks />
          </div>

          <div className='max-lg:hidden'>
            <DiscountButton />
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
      {/* Content below navbar - this div adds space equal to navbar height */}
      <div className='h-[90px]'></div>{' '}
      {/* Adjust this height to match your navbar height */}
      {/* Main content */}
      <div className='bg-secondary p-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-base md:text-lg mb-6 '>
            Use AI to identify and record the food you weigh and log calories
            automatically. World&apos;s First Launch!
          </h1>

          {/* Additional content goes here */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
