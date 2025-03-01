import React from 'react';

const Hero = () => {
  return (
    <div className='bg-[url(/hero-mobile.png)] md:bg-[url(/hero.png)] bg-no-repeat bg-cover min-h-screen flex min-sm:items-center text-white px-4 '>
      <div className='min-sm:max-w-[815px] flex flex-col  space-y-5 min-sm:pl-56 max-sm:text-center max-sm:items-center max-sm:pt-20 pt-10'>
        <h1 className='text-[48px]'>
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
      </div>
    </div>
  );
};

export default Hero;
