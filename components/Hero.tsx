import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className='bg-[url(/hero-mobile.png)] md:bg-[url(/hero.png)] bg-no-repeat bg-cover min-h-screen flex min-sm:items-center text-white px-4 '>
      <div className='min-sm:max-w-[815px] flex flex-col  space-y-5 min-sm:pl-56 max-sm:text-center max-sm:items-center max-sm:pt-20 pt-10'>
        <h1 className='text-[48px] max-sm:leading-12'>
          The only kitchen scale that auto-tracks calories
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id.
          Scelerisque in et molestie eget in auctor bibendum feugiat.
        </p>
        <h1 className='text-[48px]'>Get 50% discount</h1>
        <div className='flex'>
          <img src='/icons/stars.png' alt='stars' className='mr-5' />
          <span>5,128+ early bird pre-orders</span>
        </div>

        <Button className='bg-primary text-white text-2xl font-bold rounded-2xl py-6 px-4 max-w-64'>
          PREORDER NOW
        </Button>
      </div>
    </div>
  );
};

export default Hero;
