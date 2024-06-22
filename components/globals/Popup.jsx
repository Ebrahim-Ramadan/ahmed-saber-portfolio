'use client'
import { Variants, motion } from "framer-motion";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
} from "@radix-ui/react-popover";
import { Close, JobSuccess, Upwork } from "./Icons";
import BadgeShine from "./Badge";

const transition = {
  duration: 0.3,
  ease: [0.32, 0.72, 0, 1],
};

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    height: 112,
  },
  closed: {
    opacity: 0.6,
    scale: 0,
    filter: "blur(2px)",
    height: 0,
  },
} ;


export function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start overflow-hidden p-2">
      <div className="flex flex-col items-center justify-start">
        <Popover onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <span >
              <BadgeShine >
              <Upwork className='mr-1 w-4 h-4' />
        <p className="items-center text-xs font-medium text-gray-200">
        top 10%
        </p>
              </BadgeShine>
            </span>
          </PopoverTrigger>
          <PopoverContent
            data-side="bottom"
            side="bottom"
            sideOffset={12}
            forceMount
          >
            <motion.div
              className="data-[state=closed]:animate-hide w-[290px] rounded-xl bg-black py-3 "
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              transition={transition}
              style={{
                transformOrigin: "top",
              }}
            >
              <PopoverArrow className="" />
              <div className="flex items-center justify-end px-3">
              <PopoverClose asChild>
                  <button>
                    <Close className="w-4 h-4" />
                  </button>
                </PopoverClose>
                
              </div>
              <div className="text-sm flex gap-4 justify-between px-3 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center mb-2">
                <div>
                  <p className="text-lg md:text-xl font-bold ">
                  $1K+
               </p>
Total earnings
              </div>
                <div>
                <p className="text-lg md:text-xl font-bold ">
                    5</p>
Total jobs
</div>
              </div>
              <BadgeShine className="flex flex-row items-center justify-center w-full mb-4">
              <JobSuccess />
                  <p className="text-xs text-gray-200"> <span className="text-base md:text-lg font-bold ">100%</span> Job Success</p>
           
              </BadgeShine>
           
            </motion.div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
