
import Banner from "@/components/Home/Banner/Banner";
import Header from "@/components/Home/Banner/Header";
import Friends from "@/components/Home/Friends/Friends";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto pb-20">
      <Header />
      <Banner />
      <hr className="text-gray-200 my-10 border"/>
      <Suspense fallback={<div className="h-full flex justify-center text-center"><span className="loading loading-spinner loading-xl"></span></div>}>
          <Friends />
      </Suspense>
      
    </div>
  );
}
