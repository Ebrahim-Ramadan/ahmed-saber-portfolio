import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';
import { blogsData } from './BlogsData';

export const Blog = () => {
  return (
    <div className="gap-4">
      <div className='py-2'>
        <p className='text-lg md:text-xl font-bold'>
        My Blogs (3)
        </p>
        <p className='text-gray-100 text-xs md:text-sm'>
        I write about what happened and how exactly it did, (way away from tech twt) .
        </p>
      </div>
      <div className='flex  gap-4 w-full h-full flex-col  mb-4 '>

        
        <div className='flex flex-row items-center justify-end gap-2 p-2'>
        <div className='flex flex-col items-center gap-4 col-span-1'>
        <Image
            src='/Blogs/dev.jpg'
            className='w-6'
            width={100}
            height={100}
            />
 <a href='https://dev.to/ebrahimramadan/' target='_blank' rel='noreferrer' className=' backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-full px-2 py-1 md:px-4 md:py-2 text-end text-white font-medium text-xs md:text-sm'
          style={{
            backgroundImage: 'radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)'
        }}
        >
          Join
                   
</a>
        </div>
          <div className='flex flex-col items-center gap-4 col-span-1'>
          <div className='flex flex-col items-center gap-4 col-span-1'>
          <Image
            src='/Blogs/daily.dev.png'
            className='w-6'
            width={100}
            height={100}
            />
      
 <a href='https://app.daily.dev/sharmojj' target='_blank' rel='noreferrer' className=' backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-full px-2 py-1 md:px-4 md:py-2 text-end text-white font-medium text-xs md:text-sm'
          style={{
            backgroundImage: 'radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)'
        }}
        >
          Join
                   
</a>
            </div>
            </div>
        <div className='flex flex-col items-center gap-4 col-span-1'>
        
        <Image
            src='/Blogs/medium.png'
            className='w-6'
            width={100}
            height={100}
            />
 <a href='https://medium.com/@sharmojj' target='_blank' rel='noreferrer' className=' backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-full px-2 py-1 md:px-4 md:py-2 text-end text-white font-medium text-xs md:text-sm'
          style={{
            backgroundImage: 'radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)'
        }}
        >
          Join
                   
</a>
        </div>
        </div>
       
      </div>
      <div className='flex flex-col gap-4 w-full h-full'>
      {blogsData.map((blog) => (
        <Link href={`blogs/${blog.slug}`} key={blog.id} className=" backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-lg h-full w-full overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)'
      }}>
          <Image
            src={blog.bg}
            width={500}
            height={500}
            alt={blog.title}
            className="bg-white/20 inset-0 w-full h-full -z-10"
          />
          <div className="  flex flex-col justify-end p-4 z-10">
            <p className="md:text-xl text-lg font-bold">{blog.title}</p>
            <p className="text-gray-300 text-end text-xs mt-4">{blog.date}</p>
          </div>
        </Link>
      ))}
     </div>
      </div>
  );
};
