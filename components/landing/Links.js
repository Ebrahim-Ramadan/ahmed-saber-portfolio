import {  Blog, Youtube , Github, LinkedIn, Twitter, Upwork, Resume } from "../globals/Icons";

export const Socials = [
    
    {
        id: 1, icon:
    <Github className='w-6 h-6'/>, URL:'https://github.com/ahmed-saber-mohammed'
    },
    {
        id: 2, icon:
    <LinkedIn className='w-6 h-6'/>, URL:'https://www.linkedin.com/in/ahmed-saber-559103257'
    },
    {
        id: 3, icon:
    <Upwork className='w-6 h-6'/>, URL:'https://www.upwork.com/freelancers/ahmedrobotics?viewMode=1'
    },
   
]
export const Redirects = [
    {
        id: 2, text:'Blog',icon:
    <Blog />, URL:'/blogs'
    },
    {
        id: 3, text:'Resume',icon:
    <Resume />, URL:'https://drive.google.com/file/d/1F2Scmz87xNTrHW62iOj-0Dx-ukNfRBj3/view?usp=drivesdk'
    },
]