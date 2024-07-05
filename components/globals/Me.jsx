'use client'
import { copyToClipboard } from '@/utils/Copy'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { useState } from 'react'
import { Redirects, Socials } from '../landing/Links'
import { Copy } from './Icons'

export const Me = () => {
  const [Copied, setCopied] = useState(false)

  return (
    <div className='flex flex-col gap-4 w-full'>
    <div className='flex flex-row gap-2 md:gap-4 items-center justify-center w-full h-full'>
        
      <Link href='/' >
          <Image
              src='https://avatars.githubusercontent.com/u/171610171?v=4'
              width={200}
              height={200}
              alt='pfp'
              className='rounded-full aspect-square w-16 border border-2  bg-black/80 backdrop-blur-3xl'
      />
          
      </Link>
        <div className='flex flex-col   w-full h-full'>
          <div className='flex flex-row items-center'>
            <Link href='/' >
            <h1 className='text-lg md:text-xl font-bold'>Ahmed Saber</h1>
            </Link>
            

            
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
     {Socials.map((Social) => (
       <a key={Social.id} href={Social.URL} target='_blank' rel='noreferrer'>
          {Social.icon}
      </a>
     ))}
     
     
      </div>
     <div className='flex flex-row items-center justify-center w-full h-full gap-2 [&>*]:cursor-pointer'>
     {Redirects.map((Redirect) => (
       <Link className='text-[10px] md:text-sm flex flex-row items-center gap-1 md:gap-2 text-gray-200 hover:text-gray-50 bg-white/10 hover:bg-white/20 rounded-lg p-2 backdrop-blur-3xl' key={Redirect.id} href={Redirect.URL} target={`${Redirect.text == 'My Resume' || Redirect.text == 'My Channel' ? '_blank' : '_self'}`}
       
       >
         {Redirect.icon}
         {Redirect.text}
         
      </Link>
     ))}
     
    
      </div>
      <div className='flex flex-row gap-2 justify-center items-center'>

        
<button onClick={() => {
                  copyToClipboard('ahmed30c3@gmail.com')
                  setTimeout(() => {
                  setCopied(true)
                    
                  }, 100);
              }}
              className='bg-white/10 text-xs md:text-sm flex flex-row items-center  gap-2 px-2 py-2 md:px-4  rounded-full hover:bg-white/20 backdrop-blur-3xl'
             
              >
                 ahmed30c3@gmail.com
                  
                  {Copied ?
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
:
                      <Copy  />
                  
                }
              </button>
       
      </div>
    
    </div>
  )
}
