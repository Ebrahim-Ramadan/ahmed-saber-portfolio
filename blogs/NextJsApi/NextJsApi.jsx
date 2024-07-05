import { Separator } from '@/components/globals/Icons'
import Image from 'next/image'
import React from 'react'
import { BlogFooter, BlogHeader, CMD,  HeadingTitle, HighLight, LinkComponent, ListElement, CodeSnippet } from '../Globals'

export const NextJsApi = () => {
  const NextjsAPILinks = [
    {
        url: 'https://medium.com/@sharmojj/managing-large-files-with-git-lfs-1472e886591c',img: '/Blogs/medium.png'
    },
    {
        url: 'https://app.daily.dev/posts/managing-large-files-with-git-lfs-qvcmriucv',img: '/Blogs/daily.dev.png'
},
    {
        url: 'https://dev.to/ebrahimramadan/managing-large-files-with-git-lfs-3327',img: '/Blogs/dev.jpg'
},
]
  return (
    <div className="flex w-full py-16 p-4 md:p-24 lg:px-96 flex-col  gap-8 text-lg">
       <BlogHeader
              imgPath='/Blogs/nextjs.jpg'
              title='Next.js API (The FullStack)'
              desc='Why I love/hate Nextjs'
      />
      <div>
        <HeadingTitle
         text='Why Nextjs'
          ID='Why-Nextjs' />
        
        I have been listening to bunch of videos/streams for big chads like
        <HighLight
          text='ThePrimeAgen' />
        and
         <HighLight
              text=' TheoT3' />
           (the big yapper in town) getting around React, theo always supporting the conceptual base of why react team did the thing, while theprime consistenly on react-sucks-btw side.
      </div>
      <div>I LOVE having both front and back logic separated anyway (but I also love what gets things done quick & safe for me without involving my feelings too much). But<HighLight text='hear me out' /> there is so much going on back and forth between the regular (separrated) fornt and back teams. the front guy request minor modifications on some endpoint on 3AM random tuesday and the back guy is like "I can't do that, I'm on a lunch break, I'll do it later". I am not a big fan of this kind of situation, but it is what it is. I have been trying to find a way to make this situation better, it is not easy. I will share my experience with you in this blog post.</div>
      <div>
        <LinkComponent
        href='https://vercel.com/home'
        text='Vercel'
        />
        came up with <HighLight text='Vercel Functions'/> where you can write your code in a serverless way, and it will be deployed to a cloud provider (AWS, GCP, Azure, etc) and you can call it from your front end. Vercel also has a <HighLight text='Vercel Edge Functions'/> which is a bit different, it is a function that is deployed on the edge of the internet, so it is faster and cheaper than a normal function. I will talk about Vercel Functions in another blog post.
      </div>
      <div>
        But the main thing to note is that they also made <LinkComponent
                  href='https://nextjs.org/'
                  text='Next.js'
        />, a mainly-backend-designed-in-my-opinion framework that declares it is full stack. well, it IS fullstack let us go thru how.
      </div>


      <div>
        <HeadingTitle
        href='#The-Usuals'
         text='The Usuals'
        />
        we can start with the usuals
        <LinkComponent
        href='https://nextjs.org/docs/app/building-your-application/routing'
        text='(app routing, layouts, streaming, SEO)'
        />,
        just keep in mind some things:
        <div className='flex flex-col gap-8'>

        <ListElement >
            - the (app) dir has
        <HighLight text='RSC components only' />
             where each child dir is a route segment itself (file-system based routing)
          <Image
            width={5000}
            height={5000}
            className='rounded-lg w-full h-full py-2'
          src='/Blogs/route-segments-to-path-segments.avif'
            />
            with the ability to do dynamic routes (like<HighLight text='`/posts/[postSlugID]`'/>) too
        </ListElement>
        <ListElement>
            - The React team got something nice (Suspense), which btw is not for showing some loadingSkeleton until some data is fetched (well not that simple) 
            <Image
            width={5000}
            height={5000}
            className='rounded-lg w-full h-full py-2'
          src='/Blogs/loading-overview.avif'
            />
            I like to think of it that way &rarr;
            <HighLight text='managing stale content while fresh content is loading and Preventing already revealed content from hiding'/>
           
        </ListElement>
        <ListElement>
            - One more usual thing to follow is to always have as a front dev (really gonna love this one)
            <LinkComponent
            href='https://tanstack.com/query/v3'
            text='react-query'
            />
            in your project, OK
            <LinkComponent
              href='https://www.youtube.com/watch?v=OrliU0e09io&t=287s&ab_channel=uidotdev'
              text='uidotdev'
            />
            and
            <LinkComponent
              href='https://www.youtube.com/watch?v=xIflplz925Y&t=1810s&ab_channel=Theo-t3%E2%80%A4gg'
              text='theo'
            />
             talked about it thought well enough. it is pretty cool.
        </ListElement>
        
        </div>
        <Separator/>
        
      </div>
      <div>
        Now we go slightely edger with (middleware, api routes, auth, etc), of course we have been talking about the app-dir based nextjs app (better than the old stinky pages dir and ALOT flexible & maintainable). now we have the option to modify the request made to the backend endpoints before actually processing it. we can do this by using the api folder inside app router, assume purposes like middlewares, auth, defining and redefining some schema. 
        <Image
        width={5000}
        height={5000}
        className='rounded-lg w-full h-full py-2 md:px-44 flex justify-center items-center text-center'
          src='/Blogs/api-dir.png' />
        Just look at this, it is a beautiful way to have both front and back logic in one place handled and separated in the same time.
      </div>


      <div>
      <Image
        width={5000}
        height={5000}
        className='rounded-lg w-full h-full py-2'
          src='/Blogs/route-code-snippet.png' />
        <div className='flex flex-row justify-end '>
          <a href='https://github.com/Ebrahim-Ramadan/fuseON-mongoDB-nextjs-app/blob/682e99e171fec5e659386e515f98089cc04682e2/app/api/fetchUserInfo/route.js' target='_blank' rel='noreferrer' className='underline hover:text-gray-200 text-xs text-gray-300'>Source Code</a>
        </div>
</div>



      <div>
        <HeadingTitle
        text='NextJs /api suitable for serious back-end projects?'
        />
        There absolutely isn’t enough information at all to answer that question. And the answer has nothing to do with Next itself. Next “/api” are just 
      <HighLight text='serverless lambda functions.' />
      

The question is if you need a long running server or if serverless functions work better.

To answer that there’s like hundreds of questions. “Backend heavy” doesn’t mean anything. What type of database are you using and how are you connecting to it? Are your backend functions doing a lot of computation? How are you handling longer running computation? Do you need to have long running connections to the client?
        

      </div>
      <div>
        Even after all that, is the cost of serverless going to be an issue? If you’re using serverfull, how much will it cost to maintain the servers (do you have the bandwidth or budget for a person to manage it?)  
</div>
      <div>
        This is just so debatable, but let me tell you about tRPC and how NICE to have integrated your backend with (like 
        <LinkComponent
          href='https://create.t3.gg/'
          text='create.t3.gg'
        />
        is doing under the hood) 
        <HighLight text='best dx i ever had with nextjs.' /> ok so what exactly is tRPC? well your back and front are in the same project codebase, tRPC is what glues them together. if something wrong with your front, you got a type-safe api that is easy to maintain and easy to use.
      </div>
      <div>
        that is why it has so much tech shit going on and the debate will remain forever instead of just being settled for a traditional REST api documented on swagger and here you go html buddies. (this is very good too but we talking non-legacy tech here)
      </div>
      <div>

      </div>
          <BlogFooter textToCopy='https://ebrahim-ramadan.vercel.app/blogs/NextJsApi' BlogLinks={NextjsAPILinks} />
      
    </div>
  )
}
