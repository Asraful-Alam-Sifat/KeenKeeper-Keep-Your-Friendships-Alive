import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-[#244d3f]">404</h1>
            <h2 className='text-2xl font-semibold mt-4 mb-2'>page not found</h2>
            <p className='text-gray-500 mb-8 max-w-md'>Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <Link href="/" className='bg-[#244d3f] text-white px-6 py-3 rounded-xl font-medium hover:bg-green-800 transition'>
            Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;