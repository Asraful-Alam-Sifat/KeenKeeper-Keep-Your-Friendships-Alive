"use client";

import React, { useEffect, useState } from 'react';
import { Label, Legend, Pie, PieChart, Tooltip } from 'recharts';

const colors = {
    Text: '#7e35e1',
    Video: '#37a163',
    Call: '#244d3f',
}



const Stats = () => {
    const [data, setData] = useState([]);
    const [isAnimationActive, setIsAnimationActive] = useState(true);
    
    useEffect(() => {
        const saved = localStorage.getItem('timeline_interactions');
        if(saved) {
            const cards = JSON.parse(saved);
            const counts = cards.reduce((acc, card) => {
                acc[card.type] = (acc[card.type] || 0) + 1;
                return acc;
            }, {});

            const cartData = Object.entries(counts).map(([name, value]) => ({
                name,
                value,
                fill: colors[name] || '#888',
            }))

            setData(cartData);
        }
    }, [])

    return (
        <div className='max-w-9/12 mx-auto my-15 '>
            <h1 className='font-bold text-5xl capitalize'>Friendship Analytics</h1>
            <div className='bg-base-100 mt-5 p-6 rounded-xl'>
                <h3 className='font-semibold text-3xl ml-3 text-[#244d3f]'>By Interaction Type</h3>

                <div className='flex justify-center items-center mt-5'>

    <PieChart width={500} height={450} style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive >
      <Pie
        data={data}
        cx="50%"
        cy="45%"
        innerRadius="65%"
        outerRadius="85%"
        cornerRadius="5%"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />

      <Legend />
      <Tooltip />
    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Stats;