import {DeveloperCard} from "@/components/dev/DeveloperCard";
import { Loader } from "@/components/globals/Icons";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 md:p-24 bg-gradient-to-t from-transparent to-primary-900"
    >
      <Suspense fallback={
        <Loader/>
      }>
      <DeveloperCard />

      </Suspense>
      
      
    </main>
  );
}
