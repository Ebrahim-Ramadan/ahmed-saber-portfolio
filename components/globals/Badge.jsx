import { Upwork } from "./Icons";

const BadgeShine = ({Badgetext}) => {
    return (
      <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-500 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-2 py-1 text-xs font-medium text-gray-200'>
        {Badgetext}
        <Upwork  className='ml-2 w-6 h-6'/>
      </span>
    );
  };
  
  export default BadgeShine;
  