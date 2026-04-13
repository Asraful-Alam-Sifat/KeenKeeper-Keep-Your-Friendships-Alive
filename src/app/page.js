
import Banner from "@/components/Home/Banner/Banner";
import Header from "@/components/Home/Banner/Header";
import Friends from "@/components/Home/Friends/Friends";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Banner />
      <hr className="text-gray-200 my-10"/>
      <Friends />
    </div>
  );
}
