import { Separator } from "@/components/globals/Icons";
import { Me } from "@/components/globals/Me";
import {Hello} from "@/components/landing/Hello";


export default function Home() {
  return (
    <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 p-4 md:p-24 space-y-8 flex min-h-screen flex-col items-center  ">
        <Me/>

      <Hello />

    </main>
  );
} 
