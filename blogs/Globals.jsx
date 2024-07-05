'use client'
import { Copy, LeftArrow, Separator } from '@/components/globals/Icons'
import { copyToClipboard } from '@/utils/Copy'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import React from 'react'


export const CMD = ({ cmd }) => {
    const lines = cmd.split('\n').map(line => line.trim());
    return (
        <div className="my-4 p-4 flex w-full items-center justify-center text-white bg-black/80 font-mono text-base rounded-md">
            <div className="flex flex-col gap-1 w-full max-w-full overflow-x-auto">
                {lines.map((line, index) => (
                    <div key={index} className="flex items-start gap-1 whitespace-pre-wrap break-words">
                        {line.startsWith('#') ? (
                            <span className="text-gray-400 w-full">{line.replace('#', '')}</span>
                        ) : (
                            <>
                                <span className="text-gray-200 flex-shrink-0">$</span>
                                <span className="w-full">{line}</span>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


export const BackToBlogs = () => {
    return (
        <div className='flex w-full'>
            <Link href='/blogs' className='hover:bg-white/10 rounded-full p-2'>
        <LeftArrow/>
         </Link>
        </div>
    )
}

export const HighLight = ({  text }) => {
    return (
        <span   className='px-2 py-1 font-bold text-blue-400 hover:text-blue-600 '>
            {text}
        </span>
    )
}

export const LinkComponent = ({ text , href}) => {
    return (
        <a href={href}  rel="noopener noreferrer" className=' mx-1 custom-underline font-medium'>
            {text}
        </a>
    )
}
export const Quote = ({ text }) => {
    return (
        <blockquote className="p-4 my-4 w-fit text-center border-s-4 border-gray-300 bg-white/10 ">
        <p className="text-base md:text-lg italic font-medium leading-relaxed text-slate-200">"{text}"</p>
    </blockquote>
    )
}
export const HeadingTitle = ({ text , ID}) => {
    return (
        <div className='w-fit p-2 px-2 text-start scroll-mt-12 scroll-smooth' id={ID}>
            
            <a href={`#${ID}`} className="hover:text-blue-400 text-lg md:text-2xl  font-bold "
           
            ># {text}
             
            </ a>
       </div>
    )
}
export const ListElement = ({ children}) => {
    return (
        <div className='px-2 py-1 font-medium'>
           {children}
       </div>
    )
}

export const BlogLinks = ({ links }) => {
    return (
        <div className='flex flex-row items-center justify-end'>
        {links.map((link, index) => (
            <div key={index}>
{link}
                </div>
        ))}
        </div>
    )
}



export const Badge = ({href, text}) => {
    return (
        <div className='p-2 '>
            <a href={href} target='_blank' rel='noopener noreferrer' className='px-2 py-1 font-medium w-fit rounded-full border border-white/10 bg-blue-400 text-xs'>
        
        {text}
         
       </a>
      </div>
    );
  };
  
export const BlogHeader = ({title, desc, imgPath}) => { 
    return (
        <div className='flex flex-col gap-6'>
             <BackToBlogs/>
        <div className=' relative'>
            <Image
                width={1000}
                className='rounded-lg inset-0 object-cover w-full'
                height={500}
            src={imgPath}
            />
            <div className='absolute w-full h-full bottom-0 bg-gradient-to-t from-black/10 to-transparent'>
                
            </div>
            <div className='hidden md:block absolute bottom-4 left-4'>
                    <h1 class="text-lg md:text-2xl font-medium ">{title}</h1>
                    <p class="text-xs md:text-sm text-gray-200 px-2 ">{desc}</p>
       </div>
        </div>
        <div className='block md:hidden px-2'>
                <h1 class="text-lg md:text-2xl font-medium ">{title}</h1>
                <p class="text-xs md:text-sm text-gray-200 px-2 ">{desc}</p>
        </div>
       </div>
)
}
export const BlogFooter = ({ textToCopy, BlogLinks,  }) => {
    const [Copied, setCopied] = React.useState(false)
    
    return (
        <div>
             <Separator />
          <div className='flex flex-row justify-end gap-2 '>
              <Image
                  src='/mysignature.png'
                  width={500}
                  height={500}
                  className='w-1/2 md:w-1/4'
              />
          </div>
          <div className='mt-8 flex flex-row items-center justify-between gap-2 '>
              <button onClick={() => {
                  copyToClipboard(textToCopy)
                  setTimeout(() => {
                  setCopied(true)
                    
                  }, 200);
              }}
              className='bg-white/10 text-xs md:text-base flex flex-row items-center font-medium  gap-2 px-2 py-1 md:px-4 md:py-2 rounded-full hover:bg-white/20'
              >
                  
                  {Copied ?
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
:
                      <Copy className='w-3 md:w-4' />
                  
                }
                  {Copied ?
                 'copied'
:
'Copy Link'
                  
                }
              </button>
              <div className='flex flex-row items-center gap-2'>
              {BlogLinks.map((item, index) => (
                  <div key={index}>
                      <a href={item.url} target='_blank' rel='noreferrer'>
                          <Image
                              width={100}
                              height={100}
                              alt={item.img}
                              className=' w-8'
                              src={item.img}
                          />
                          
                      </a>
                  </div>
              ))}
             </div>
          </div>
        </div>
    )
}