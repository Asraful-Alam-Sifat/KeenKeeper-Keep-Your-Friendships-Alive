"use client";

import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { MessageSquareMore, PhoneCall, Video } from 'lucide-react';
import callIcon from '@/assets/Image-assets/call.png';
import textIcon from '@/assets/Image-assets/text.png';
import videoIcon from '@/assets/Image-assets/video.png';
import Image from 'next/image';



const Timeline = () => {

  const [timelineCards, setTimelineCards] = useState([]);


  useEffect(() => {
  const saved = localStorage.getItem('timeline_interactions');
  if (saved) {
    setTimelineCards(JSON.parse(saved));
  }
  }, []);


    return (
        <div className='max-w-9/12 mx-auto my-15'>
           <div>
            <h1 className='font-bold text-4xl mb-6'>TimeLine</h1>
                <Dropdown />
           </div>
      <section className='mt-6'>
        {timelineCards.length === 0 ? (
          <p className='text-gray-400 text-sm text-center py-10'>
            No interactions yet — go to a friend profile and click Call, Text or Video.
          </p>
        ) : (
          timelineCards.map((card, idx) => (
            <div key={idx} className='flex items-center gap-4 p-4 border-b border-gray-100 bg-base-100 mb-2 rounded-lg'>
              

              <div className='shrink-0 text-gray-400'>
                {card.type === 'Call'  && <Image className='w-8 h-8' src={callIcon} alt='call Icon' />}
                {card.type === 'Text'  && <Image className='w-8 h-8' src={textIcon} alt='Text Icon'/>}
                {card.type === 'Video' && <Image className='w-8 h-8' src={videoIcon} alt='Video Icon' />}
              </div>


              <div className='flex-1'>
                <p className='font-semibold text-sm'>
                  {card.type} <span className='font-normal text-gray-500'>with {card.friendName}</span>
                </p>
                <p className='text-xs text-gray-400'>{card.date}</p>
              </div>


              <div className='text-right shrink-0'>
                <p className='text-xs font-semibold text-gray-600'>{card.time}</p>
              </div>

            </div>
          ))
        )}
      </section>
        </div>
    );
};

export default Timeline;