import { Separator } from "@/components/globals/Icons";
import {Hello} from "@/components/landing/Hello";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  w-full">
      <Hello />
      <Separator/>

    </main>
  );
} 
