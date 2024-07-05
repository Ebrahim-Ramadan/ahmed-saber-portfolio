import Link from 'next/link';
import React from 'react';
import { Cube, Github, RightArrow, Views, Zoom } from '../globals/Icons';
import { WorkTogether } from '../globals/WorkTogether';
import { UIs } from './Webs';

export const Projects = () => {

  return (
    <div className='flex flex-col gap-4 w-full py-8'>
    <div id='Web-UIs' className='scroll-mt-12 scroll-smooth flex flex-row gap-2 md:gap-4 w-full items-center px-2 group cursor-pointer'>
  <Cube />

        <Link
         
          href='#Web-UIs' className='font-bold text-center text-lg md:text-xl'>
    Web UIs
  </Link>
</div>


          {UIs.map((UI) => (
            <div
              key={UI.ID} className='transition duration-200 hover:bg-white/20 gap-2 p-4 md:p-6 flex flex-col w-full rounded-lg backdrop-blur-3xl bg-white/10 group cursor-pointer'
              style={{
                backgroundImage: 'radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)'
            }}
            >
             <div  className='flex flex-row  w-full items-center justify-between'>
             <a href={UI.URL} target='_blank' className='font-bold text-lg md:text-xl'> 
           {UI.Title}
             </a>
       </div>
              <a href={UI.URL} target='_blank'>
              <img
              src={UI.Preview} className='w-full rounded-lg'
              alt=''/>
         </a>
              <div className='flex flex-row items-center justify-end '>
              <a href={UI.Source_Code} target='_blank' className='hover:bg-white/20 rounded-full p-2'>
                    <Github />
             </a>
         <a href={UI.URL} target='_blank' className='hover:bg-white/20 rounded-full p-2'>
                    <Views />
             </a>
        </div>
         </div>
            
          ))}

     <WorkTogether/>
    </div>
  )
}
