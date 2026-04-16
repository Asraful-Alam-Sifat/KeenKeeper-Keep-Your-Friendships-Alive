"use client";

import { ChartLine, Clock3, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoImage from "../../assets/Image-assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname()

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-20 flex-col md:flex-row">
        <div className="flex-1">
          <Link
            href="/"
            className="btn-ghost text-2xl font-semibold text-green-950 "
          >
            <Image src={logoImage} alt="logo Image" />
          </Link>
        </div>


        <div className="flex gap-5 mt-5 md:mt-0">
          <Link href='/' >
          <button
            className={`btn bg-base-100 border-none text-lg shadow-none hover:bg-green-900 rounded-sm transition-all duration-300
      ${pathName === '/' ? "bg-green-950 text-white" : "text-gray-500 "}`}
          >
            <House /> Home
          </button>
          </Link>

            <Link href='/timeline'>
          <button
            className={`btn bg-base-100 border-none text-lg shadow-none hover:bg-green-900 rounded-sm transition-all duration-300
      ${pathName === '/timeline' ? "bg-green-950 text-white" : "text-gray-500"}`}
          >
            <Clock3 />
            Timeline
          </button>
            </Link>

            <Link href='/stats'>
          <button
            className={`btn bg-base-100 border-none text-lg shadow-none hover:bg-green-900 rounded-sm transition-all duration-300
      ${pathName === '/stats' ? "bg-green-950 text-white" : "text-gray-500"}`}
          >
            <ChartLine /> Stats
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
