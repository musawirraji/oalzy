import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';
import { Button } from '../ui/button';
import MobileNavigation from './MobielNavigation';

const Navbar = () => {
  return (
    <nav>
      <div className='bg-white px-8'>
        <div className=' flex justify-between items-center min-h-20   container  mx-auto'>
          <Image src='/icons/logo.svg' alt='Logo' width={150} height={150} />

          <ul className='flex items-center space-x-9 max-sm:hidden'>
            <NavLinks />
          </ul>

          <Button className='rounded-2xl btn-gradient font-bold text-white max-sm:hidden'>
            GET 50% DISCOUNT
          </Button>

          <MobileNavigation />
        </div>
      </div>

      <div className='bg-secondary  min-h-20 flex justify-center items-center'>
        <p className='container mx-auto text-center text-lg font-medium'>
          Use AI to identify and record the food you weigh and log calories
          automatically. World&apos;s First Launch!
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
