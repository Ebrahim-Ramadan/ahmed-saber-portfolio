
const BadgeShine = ({ children, props}) => {
    return (
      <button {...props} className='w-full flex animate-background-shine cursor-pointer items-center justify-center rounded-full border  border-gray-500 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] p-1  '>
        
        {children}
        
      </button>
    );
  };
  
  export default BadgeShine;
  