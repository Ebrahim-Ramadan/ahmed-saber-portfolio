import {Blog} from "@/blogs/Blog";
import { Loader } from "@/components/globals/Icons";
import { Me } from "@/components/globals/Me";
import { Suspense } from "react";

export default async function Home() {
  
  return (
    <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 p-4 md:p-24 space-y-8 flex min-h-screen flex-col items-center  "
    >
        <Me/>

      <Suspense fallback={
        <Loader/>
      }>
        <Blog  />

      </Suspense>
      
      
    </main>
  );
}

export const metadata = {
  data: 'Ahemd Saber | Blogs',
  description: 'Ahemd Saber Blogs',
}