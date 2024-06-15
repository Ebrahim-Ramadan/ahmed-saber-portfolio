'use client';

import { useRotateYValues } from "@/utils/customHooks";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { AI, Bot, Circuits, Code, Cube } from "../globals/Icons";

const ITEMS = [
  {
    title: "Project Management",
    description: "Comprehensive oversight from concept to delivery.",
    icon: (
      <Cube className="h-4 w-4 text-mauve-light-11 dark:text-mauve-dark-11" />
    ),
    id: 1,
  },
  {
    title: "Programming",
    description: "Proficient in Python, C++, and more. ",
    icon: (
      <Code className="h-4 w-4 text-mauve-light-11 dark:text-mauve-dark-11" />
    ),
    id: 2,
  },
  {
    title: "Robotics Development",
    description: "From sensor integration to complex robotic systems.",
    icon: (
      <Bot className="h-4 w-4 text-mauve-light-11 dark:text-mauve-dark-11" />
    ),
    id: 3,
  },
  {
    title: "AI & Machine Learning:",
    description: "Implementing algorithms for enhanced robotic functionalities.",
    icon: (
      <AI className="h-4 w-4 text-mauve-light-11 dark:text-mauve-dark-11" />
    ),
    id: 4,
  },
  {
    title: "Custom PCB Design",
    description: "Efficient layouts ensuring signal integrity.",
    icon: (
      <Circuits className="h-4 w-4 text-mauve-light-11 dark:text-mauve-dark-11" />
    ),
    id: 5,
  },
];
const ITEM_WIDTH = 200;
const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const CONTAINER_WIDTH = ITEM_WIDTH + GAP;

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};



export default function Subtle3DCarousel() {
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, ITEMS.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const leftConstraint = -((ITEM_WIDTH + GAP) * (ITEMS.length - 1));

  const rotateYValues = useRotateYValues(x, ITEMS, ITEM_WIDTH, GAP);


  return (
    <div className="relative overflow-hidden rounded-[var(--outer-r)] border border-mauve-light-6/40 p-[var(--p-distance)] [--p-distance:16px] [--outer-r:24px] dark:border-mauve-dark-6/60">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{
          left: leftConstraint,
          right: 0,
        }}
        style={{
          width: ITEM_WIDTH,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: currentIndex * ITEM_WIDTH + ITEM_WIDTH / 2,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * (ITEM_WIDTH + GAP)) }}
        transition={SPRING_OPTIONS}
      >
        {ITEMS.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex shrink-0 flex-col items-start justify-between rounded-[calc(var(--outer-r)-var(--p-distance))] border border-mauve-light-6/40 bg-mauve-light-1 dark:border-mauve-dark-6/60 dark:bg-mauve-dark-1"
            style={{
              width: ITEM_WIDTH,
              height: "100%",
              rotateY: rotateYValues[index],
            }}
            transition={SPRING_OPTIONS}
          >
            <div className="mb-4 px-5 pt-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mauve-light-3 dark:bg-mauve-dark-3">
                {item.icon}
              </span>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-1 text-sm font-medium text-mauve-light-12 dark:text-mauve-dark-12">
                {item.title}
              </div>
              <p className="text-sm text-mauve-light-11 dark:text-mauve-dark-11">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex w-full justify-center">
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {ITEMS.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-150  ${
                currentIndex === index
                  ? "bg-mauve-light-9 dark:bg-mauve-dark-9"
                  : "bg-mauve-light-9/40 dark:bg-mauve-dark-9/40"
              }`}
              animate={{ scale: currentIndex === index ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
              transition={{
                duration: 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
