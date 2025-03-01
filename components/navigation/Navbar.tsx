'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import { Button } from '@/components/ui/button';
import MobileNavigation from './MobielNavigation';

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
      {/* Fixed navbar that changes style when scrolled */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
        }`}
      >
        <div className='container mx-auto px-4 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image src='/icons/logo.svg' alt='Logo' width={150} height={150} />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-7'>
            <NavLinks />
          </div>

          <Button className='btn-gradient rounded-2xl  font-bold text-white max-sm:hidden'>
            GET 50% DISCOUNT
          </Button>
          {/* Mobile Navigation */}
          <div className='md:hidden'>
            <MobileNavigation />
          </div>
        </div>
      </div>
      {/* Content below navbar - this div adds space equal to navbar height */}
      <div className='h-[72px]'></div>{' '}
      {/* Adjust this height to match your navbar height */}
      {/* Main content */}
      <div className='bg-secondary px-4 py-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-base md:text-sm font-bold mb-6'>
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
