'use client'
import Image from "next/image";
import { useRef, useState } from "react";
import dev from '@/public/dev.webp';

export const DeveloperCard = () => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col justify-center items-center gap-2 relative max-w-xs rounded-3xl border border-neutral-800 bg-neutral-950 p-4 md:p-8"
    >
      <div
        className="rounded-3xl pointer-events-none absolute -inset-px opacity-0 transition duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(205,205,205,.15), transparent 40%)`,
        }}
      />
      <a className="mb-4 " href="https://drive.google.com/file/d/1PZT7XO83HSmS2X5BmTjWntBAc7lTf9M1/view">
        <Image
          className="rounded-full border border-2 w-32"
          src={dev}
          width={800}
          height={800}
          alt="Developer"
        />
      </a>
      <a
        href="https://drive.google.com/file/d/1PZT7XO83HSmS2X5BmTjWntBAc7lTf9M1/view"
        target='_blank'
        className="hover:underline font-medium tracking-tight text-neutral-100"
      >
        Ebrahim Ramadan
      </a>
      <p className="text-sm text-neutral-300 mt-[-0.4rem]">
        Software Engineer
      </p>
      <div className="flex flex-col items-center justify-center">
      <p className="text-sm text-neutral-400">
        3-year experienced web developer
      </p>
      <p className="text-sm text-neutral-400">
        Currently working at <a href="https://onvo.me/" className="hover:underline text-white">Onvo</a>
      </p>
      <p className="text-sm text-neutral-400">
        Programming Instructor at <a href="https://ischoolvirtual.com/" className="hover:underline text-white">iSchool</a>
      </p>
      </div>
    </div>
  );
};
