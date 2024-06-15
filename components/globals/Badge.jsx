import { Upwork } from "./Icons";

const BadgeShine = ({Badgetext}) => {
    return (
      <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border  border-gray-500 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] p-1 font-medium text-gray-200 ml-2'>
        <Upwork className='mr-1 w-4 h-4' />
        <p className="items-center text-xs font-medium text-gray-200">
        {Badgetext}
       </p>
        
      </span>
    );
  };
  
  export default BadgeShine;
  