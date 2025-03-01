import React from 'react';
import { Button } from '../ui/button';

const DiscountButton = () => {
  return (
    <Button className='btn-gradient rounded-2xl border-none font-bold text-white  text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-2'>
      <span className='md:inline hidden'>GET 50% DISCOUNT</span>
      <span className='md:hidden inline'>50% OFF</span>
    </Button>
  );
};

export default DiscountButton;
