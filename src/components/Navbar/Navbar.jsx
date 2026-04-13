"use client";

import { ChartLine, Clock3, House } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [toogleBtn, setToogleBtn] = useState('home');


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20 flex-col md:flex-row">
  <div className="flex-1">
    <Link href='/' className="btn-ghost text-2xl font-semibold text-green-950 "><span className="font-bold text-black text-2xl">Keen</span>Keeper</Link>
  </div>
  <div className="flex gap-5 mt-5 md:mt-0">

    <button
    onClick={()=> setToogleBtn("home")}
    className={`btn bg-base-100 border-none text-lg shadow-none hover:bg-green-900 rounded-sm transition-all duration-300
      ${toogleBtn === 'home'
        ? 'bg-green-950 text-white'
        : 'text-gray-500 '
      }`}><House/> Home</button>

    <button
    onClick={()=> setToogleBtn("timeline")}
    className={`btn bg-base-100 border-none text-lg shadow-none hover:bg-green-900 rounded-sm transition-all duration-300
      ${toogleBtn === 'timeline'
        ? 'bg-green-950 text-white'
        : 'text-gray-500'
      }`}><Clock3 />Timeline</button>

    <button
    onClick={()=> setToogleBtn("stats")}
    className={`btn bg-base-100 border-none text-lg shadow-none hover:bg-green-900 rounded-sm transition-all duration-300
      ${toogleBtn === 'stats'
        ? 'bg-green-950 text-white'
        : 'text-gray-500'
      }`}><ChartLine /> Stats</button>

  </div>
</div>
        </div>
    );
};

export default Navbar;