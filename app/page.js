import {Hello} from "@/components/landing/Hello";
import Subtle3DCarousel from "@/components/landing/Subtle3DCarousel";
import { ProjectDrawer } from "@/components/ProjectDrawer/ProjectDrawer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  w-full">
      <Hello />
    </main>
  );
}
