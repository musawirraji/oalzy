import Image from 'next/image';
import React from 'react';

const Meet = () => {
  return (
    <div className='bg-[url(/line.svg)] min-h-screen max-sm:bg-[top_80px_center]  bg-[top_40px_center] bg-no-repeat bg-[length:105%]'>
      <div className='flex flex-col items-center justify-center h-full'>
        <Image
          src='/measure.png'
          alt='Meet'
          width={600}
          height={600}
          className='max-sm:w-[256px] max-sm:h-[256px] max-lg:w-[300px] max-lg:h-[300px] w-[600px] h-[600px]'
        />

        <h1 className='font-extrabold text-4xl mt-5'>Meet Qalzy</h1>
        <p className='text-center text-gray text-sm mt-2'>
          One-Tap Calorie Counting <br /> Fast. Precise. Easy.
        </p>
      </div>
    </div>
  );
};

export default Meet;
