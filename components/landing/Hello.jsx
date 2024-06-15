import React from 'react';
import Image from 'next/image';
import Subtle3DCarousel from './Subtle3DCarousel';
import { Upwork, Github, LinkedIn, FB, Separator } from "../globals/Icons";
import BadgeShine from '../globals/Badge';
import { WorkHistory } from '../Work/WorkHistory';

export const Hello = () => {
  return (
    <div className='mx-auto mb-14 w-full max-w-screen-sm flex-1 p-4 md:p-24 space-y-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-2 md:gap-4 items-center justify-center w-full h-full'>
        <Image
                src='https://avatars.githubusercontent.com/u/171610171?v=4'
                width={200}
                height={200}
                alt=''
                className='rounded-full h-16 w-16 '
        />
        <div className='flex flex-col   w-full h-full'>
          <div className='flex flex-row items-center'>
<h1 className='text-lg md:text-xl font-bold'>Ahmed Saber</h1>
          <BadgeShine Badgetext='top 10%' />
            
          </div>
          <div className='text-xs md:text-sm [&>*]:leading-none text-gray-300'>
          <p>
            Robotics Engineer with a robust foundation in AI and IoT.
          

          </p>
          <p>
            Co-founder of <span className='font-bold underline cursor-pointer'> RobiX</span>.
            </p>
           
          </div>
        </div>
     </div>
        <div className='flex flex-row items-center justify-end w-full h-full px-4 gap-2 [&>*]:cursor-pointer'>

          <Github className='w-6 h-6'/>
          <LinkedIn className='w-6 h-6' />
          
          <FB className='w-6 h-6'/>
       </div>
      </div>
      <div className='flex flex-col   w-full h-full'>
          <p className='font-medium '>About Me</p>
          <p className='text-xs md:text-sm [&>*]:leading-none text-gray-300'>
          I am a robotics Engineer with a solid foundation in AI and IoT, co-founder of RobiX Robotics Company. Experience spans leading projects from conception to execution, teaching robotics, and developing custom solutions. Specializes in microcontroller programming, PCB design, and computer vision, with a proven track record of driving successful projects and fostering interest in robotics.

          </p>
      </div>
      
      <div className='w-full flex flex-row items-center justify-center'>
      <Subtle3DCarousel/>
      </div>
      <Separator/>
<WorkHistory/>
    </div>
  );
};

export default Hello;
