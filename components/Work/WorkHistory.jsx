import React from 'react'
import { RightArrow, Star } from '../globals/Icons'
import { UpworkReviews } from './UpworkReviews'
import { WorkDetails } from './WorkDetails'

export const WorkHistory = () => {
  return (
    <div className='flex flex-col gap-4 w-full py-4'>
      <div className='flex flex-row justify-between w-full items-center'>
      <p className='font-bold text-center text-lg md:text-xl '>
          Freelancing History
      </p>
      <UpworkReviews/>
   </div>

          {WorkDetails.map((item) => (
              
              <div
                  key={item.ID}
                  className='gap-2 flex flex-col bg-black/90 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] col-span-1 rounded-3xl border border-2 border-gray-400 hover:border-white transition duraiton-200 p-4'>
              <div 
              className='flex flex-col '>
              <p className='font-bold leading-[1px] text-lg md:text-lg text-[#14A800]'>
              {item.Title}
                  </p>
                  <div className='w-full flex flex-row items-center justify-between'>
                <p className='text-xs text-gray-400'>{item.Date}</p>
                <div className='flex flex-row items-center'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
              </div>
              </div>
              <p className='text-sm text-gray-100 leading-normal'>
                {item.Review.substring(0, 150)+'...'+'"'}
              </p>
          
              </div>
          ))}

      <a className='bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] group flex flex-row justify-center w-full items-center font-medium cursor-pointer p-2 hover:bg-black/60  rounded-3xl'>
        Work With Me
        <RightArrow className='group-hover:scale-110 transition-transform duration-200 ease-in-out'/>
      </a>
    </div>
  )
}
