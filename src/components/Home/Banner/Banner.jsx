import React from 'react';
// flex mt-20 flex-col justify-center items-center gap-y-3 p-4 md:flex-row md:justify-around sm:
const Banner = () => {
    return (
        <div className='max-w-11/12 mx-auto mt-20 p-2 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-3 xl:grid-cols-4'>

            <div className='w-full md:w-80 h-40 bg-base-100 border-2 border-gray-300 rounded-lg flex justify-center items-center flex-col text-gray-500 text-xl font-bold mx-auto hover:border-blue-700 transition-all duration-300 shadow-sm'><span className='font-bold text-green-950 text-3xl '>10</span>Total Friends</div>

            <div className='w-full md:w-80 h-40 bg-base-100 border-2 border-gray-300 rounded-lg flex justify-center items-center flex-col text-gray-500 text-xl font-bold mx-auto hover:border-blue-700 transition-all duration-300 shadow-sm'><span className='font-bold text-green-950 text-3xl '>3</span>On Track</div>

            <div className='w-full md:w-80 h-40 bg-base-100 border-2 border-gray-300 rounded-lg flex justify-center items-center flex-col text-gray-500 text-xl font-bold mx-auto hover:border-blue-700 transition-all duration-300 shadow-sm'><span className='font-bold text-green-950 text-3xl '>6</span>Need Attention</div>

            <div className='w-full md:w-80 h-40 bg-base-100 border-2 border-gray-300 rounded-lg flex justify-center items-center flex-col text-gray-500 text-xl font-bold mx-auto hover:border-blue-700 transition-all duration-300 shadow-sm'><span className='font-bold text-green-950 text-3xl '>12</span>Interactions This Month</div>
        </div>
    );
};

export default Banner;