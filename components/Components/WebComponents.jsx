import React from 'react'
import { Component, Github, Views } from '../globals/Icons'
import { Webs } from './Webs'
import { WorkTogether } from '../globals/WorkTogether'
export const  WebComponents = () => {
  return (
    <div className='flex flex-col gap-4 w-full py-8'>
      <div className='flex flex-row gap-2 md:gap-4 w-full items-center px-2 group cursor-pointer'>
      <Component/>

      <p className='font-bold text-center text-lg md:text-xl '>
          Web Components
        </p>
   </div>

          {Webs.map((component) => (
            <div
           key={component.ID}
              className='transition duration-200 hover:bg-white/20 gap-2 p-4 md:p-6 flex flex-col w-full rounded-lg backdrop-blur-3xl bg-white/10 group'
              style={{
                backgroundImage: 'radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)'
            }}
            >
           <div className='flex flex-row  w-full items-center justify-between'>
           <p className='font-bold text-lg md:text-xl'> 
         {component.Title}
           </p>
     </div>
              <img
              src={component.Preview} className='w-full rounded-lg'
              alt=''/>
       <div className='flex flex-row items-center justify-end '>
              <a href={component.source_code} target='_blank' className='hover:bg-white/20 rounded-full p-2'>
                    <Github />
             </a>
       
        </div>
       </div>
            
          ))}

     <WorkTogether/>
    </div>
  )
}

export default WebComponents