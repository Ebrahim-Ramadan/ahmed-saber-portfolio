import { LeftArrow } from "@/components/globals/Icons";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";
import { blogsData } from "./BlogsData";

export const Blog = () => {
  return (
    <div className="gap-4">
      <div className="py-2">
        <p className="text-lg md:text-xl font-bold">My Blogs (3)</p>
        <p className="text-gray-100 text-xs md:text-sm">
          I write about what happened and how exactly it did, (way away from
          tech twt) .
        </p>
      </div>
      <div className="flex  gap-4 w-full h-full flex-col  mb-4 ">
        <div className="flex flex-row items-center justify-end gap-2 p-2">
          <div className="flex flex-col items-center gap-4 col-span-1">
            <Image
              src="/Blogs/dev.jpg"
              className="w-6"
              width={100}
              height={100}
            />
            <a
              href="https://dev.to/ebrahimramadan/"
              target="_blank"
              rel="noreferrer"
              className=" backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-full px-2 py-1 md:px-4 md:py-2 text-end text-white font-medium text-xs md:text-sm"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)",
              }}
            >
              Join
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 col-span-1">
            <div className="flex flex-col items-center gap-4 col-span-1">
              <Image
                src="/Blogs/daily.dev.png"
                className="w-6"
                width={100}
                height={100}
              />

              <a
                href="https://app.daily.dev/sharmojj"
                target="_blank"
                rel="noreferrer"
                className=" backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-full px-2 py-1 md:px-4 md:py-2 text-end text-white font-medium text-xs md:text-sm"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)",
                }}
              >
                Join
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 col-span-1">
            <Image
              src="/Blogs/medium.png"
              className="w-6"
              width={100}
              height={100}
            />
            <a
              href="https://medium.com/@sharmojj"
              target="_blank"
              rel="noreferrer"
              className=" backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-full px-2 py-1 md:px-4 md:py-2 text-end text-white font-medium text-xs md:text-sm"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)",
              }}
            >
              Join
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full h-full">
        {blogsData.map((blog) => (
          <Link
            href={`blogs/${blog.slug}`}
            key={blog.id}
            className=" backdrop-blur-3xl transition duration-200 bg-white/10 hover:bg-white/20 rounded-lg h-full w-full overflow-hidden"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 0 0, rgba(252, 180, 45, .1) 20%, rgba(252, 180, 45, 0) 80%), radial-gradient(ellipse at 0 100%, rgba(130, 80, 223, .1) 20%, rgba(130, 80, 223, 0) 80%)",
            }}
          >
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

export const BlogLinks = ({ links }) => {
  return (
    <div className="flex flex-row items-center justify-end">
      {links.map((link, index) => (
        <div key={index}>{link}</div>
      ))}
    </div>
  );
};

export const BackToBlogs = () => {
  return (
    <div className="flex w-full">
      <Link href="/blogs" className="hover:bg-white/10 rounded-full p-2">
        <LeftArrow />
      </Link>
    </div>
  );
};
export const BlogHeader = ({ title, desc, imgPath }) => {
  return (
    <div className="flex flex-col gap-6 py-8">
      <BackToBlogs />
      <div className=" relative">
        <Image
          width={1000}
          className="rounded-lg inset-0 object-cover w-full"
          height={500}
          src={imgPath}
        />
        <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="hidden md:block absolute bottom-4 left-4">
          <h1 class="text-lg md:text-2xl font-medium ">{title}</h1>
          <p class="text-xs md:text-sm text-gray-200 px-2 ">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export const BlogFooter = ({ textToCopy, BlogLinks }) => {
  const [Copied, setCopied] = React.useState(false);

  return (
    <div>
      <Separator />
      <div className="flex flex-row justify-end gap-2 ">
        <Image
          src="/mysignature.png"
          width={500}
          height={500}
          className="w-1/2 md:w-1/4"
        />
      </div>
      <div className="mt-8 flex flex-row items-center justify-between gap-2 ">
        <button
          onClick={() => {
            copyToClipboard(textToCopy);
            setTimeout(() => {
              setCopied(true);
            }, 200);
          }}
          className="bg-white/10 text-xs md:text-base flex flex-row items-center font-medium  gap-2 px-2 py-1 md:px-4 md:py-2 rounded-full hover:bg-white/20"
        >
          {Copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-check"
            >
              <path d="M18 6 7 17l-5-5" />
              <path d="m22 10-7.5 7.5L13 16" />
            </svg>
          ) : (
            <Copy className="w-3 md:w-4" />
          )}
          {Copied ? "copied" : "Copy Link"}
        </button>
        <div className="flex flex-row items-center gap-2">
          {BlogLinks.map((item, index) => (
            <div key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <Image
                  width={100}
                  height={100}
                  alt={item.img}
                  className=" w-8"
                  src={item.img}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
