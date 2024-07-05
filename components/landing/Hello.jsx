'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Subtle3DCarousel from './Subtle3DCarousel';
import { Separator, Loader, Copy } from "../globals/Icons";
import { Projects } from '../Components/Projects';

import { WebComponents } from '../Components/WebComponents';
import {LazyLoad} from '@/utils/LazyLoad';
import { Repos } from '../Repos/Repos';
import { copyToClipboard } from '@/utils/Copy';

export const Hello = () => {

  return (
    <div className=''>
     
      <div className='flex flex-col group  w-full h-full'>
          <p className='font-medium '>About Me</p>
          <p className='text-xs md:text-sm [&>*]:leading-none text-gray-300'>
          I am a robotics Engineer with a solid foundation in AI and IoT, co-founder of RobiX Robotics Company. Experience spans leading projects from conception to execution, teaching robotics, and developing custom solutions. Specializes in microcontroller programming, PCB design, and computer vision, with a proven track record of driving successful projects and fostering interest in robotics.


        </p>
       
      </div>
      
      <div className='w-full flex flex-row items-center justify-center'>
      <Subtle3DCarousel/>
      </div>
      {/* <Separator/>
      <LazyLoad>
      <Suspense fallback={
          <Loader/>
        }>
          <Projects/>
    </Suspense>
      </LazyLoad>
      <Separator/>
      
      <LazyLoad>
      <Suspense fallback={
          <Loader/>
        }>
          <WebComponents/>
    </Suspense>
      </LazyLoad>
      <Separator/>
      
      <LazyLoad>
      <Suspense fallback={
          <Loader/>
        }>
          <Repos/>
    </Suspense>
</LazyLoad> */}
      
    </div>
  );
};

export default Hello;
