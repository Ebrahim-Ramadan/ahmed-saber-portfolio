import React from 'react'
import { getDataFromGithub } from '@/services/Repos'
import { OpenSource, Star } from '../globals/Icons';
import {languageColors} from '@/utils/LangColors.js'
export const Repos = async() => {
    const data = await getDataFromGithub()
    console.log('data', data);
    return (
      
        <div className='w-full flex flex-col gap-2'>
            <div className='items-center  w-full flex flex-row gap-2'>
            <OpenSource/>
            <p className='text-lg md:text-xl font-bold text-center'>Open Sourced Projects</p>
           </div>
            {data.map((repo) => (
                <div key={repo.id} className='hover:bg-black/10 w-full border border-t-0 border-b-1 border-l-0 border-r-0 border-white/10 p-2 flex justify-between '>
                    <div className='flex flex-col gap-2 '>
                        <a href={repo.clone_url} className='hover:underline text-[#4493F8] text-elipsis font-medium'>{repo.name.length > 40 ? repo.name.substring(0, 40) + '...' : repo.name}</a>
                        <div className='flex gap-2 items-center flex-row'>
                            <div
                                style={{ backgroundColor: languageColors[repo.language]?.color || '#000000' }}
                                className={`w-3 border border-white/10 h-3 rounded-full `}></div>
                        <p
                                className={`text-xs md:text-sm  `}
                                style={{ color: languageColors[repo.language]?.color || '#000000' }}
                            >{repo.language}</p>
                            <p className='text-xs ml-2 text-gray-400 text-elipsis'>Updated at {repo.updated_at.substring(0, 10)}</p>
                            </div>
                    </div>
                    <a href={repo.clone_url} target='_blank' className='h-fit text-xs md:text-sm  bg-white/10 py-1 px-2 gap-2 rounded-xl flex justify-center items-center'>
                        <Star />
                        Star
                    </a >
                </div>
            ))}
    </div>
  )
}
