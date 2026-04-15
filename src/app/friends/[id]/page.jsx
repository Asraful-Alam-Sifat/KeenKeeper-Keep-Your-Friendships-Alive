"use client";

import React, { use, useState } from 'react';
import Data from '@/assets/Json/Data.json';
import Image from 'next/image';
import SnoozeIcon from '../../../assets/Iocns-assets/Snooze.png';
import ArchiveIcon from '../../../assets/Iocns-assets/Archive.png';
import DeleteIcon from '../../../assets/Iocns-assets/Delete.png';
import { MessageSquareMore, PhoneCall, Video } from 'lucide-react';
import RecentInteractions from './RecentInteractions';




const FriendDetails = ({params}) => {
    const paramsPromise = use(params)
    const friend = Data.find(f => f.id === parseInt(paramsPromise.id));

    const [interactions, setInteractions] = useState(friend.interactions || []);
    const [showAll, setShowAll] = useState(false);
   
    const formatDate = () => {
      const date = new Date(friend.next_due_date);
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
    }
const handleCheckIn = (type) => {
  const now = new Date();
  const newCard = {
    type: type,
    note: `${type} with ${friend.name}`,
    time: now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
    date: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  };
  setInteractions([newCard, ...interactions]);
};

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-x-5  my-15'>
            <div className='col-span-1 '>
                <div className='bg-base-100 rounded-xl shadow-gray-350 shadow-md p-5 text-center border-2 border-gray-100'>
                     <Image 
                     className='rounded-full w-19 h-20 mx-auto'
                       src={friend.picture} 
                       alt={friend.name} 
                       width={50} 
                       height={50} 
                     />
                    <h3 className='font-bold text-xl text-center'>{friend.name}</h3>
                    <div className='mt-3 mb-2 text-center'>
                       {friend.status.toLowerCase() === 'overdue'
                       ? <span className='bg-red-600 text-white px-3 py-0.5 rounded-xl font-medium text-xm capitalize'>{friend.status}</span>
                       : friend.status.toLowerCase() === 'almost due'
                           ? <span className='bg-yellow-400 text-white px-3 py-0.5 rounded-xl font-medium text-xm capitalize'>{friend.status}</span>
                           : friend.status.toLowerCase() === 'on-track'
                               ? <span className='bg-green-800 text-white px-3 py-0.5 rounded-xl font-medium text-xm capitalize'>{friend.status}</span>
                               :'' }
                    </div>
                    <div className="flex gap-2 justify-center ">
                      {friend.tags && friend.tags.map((tag, index) => (
                        <p key={index} className="font-medium text-sm bg-green-200 rounded-full px-3 py-0.5 capitalize">
                          {tag}
                        </p>
                      ))}
                    </div>
                    <p className='mt-4 font-medium text-base text-gray-500 '>{friend.bio}</p>
                    {friend.email && <p className='text-medium text-base text-gray-500'>Preferred: <span className='font-medium'>Email</span></p>}
                </div>

                <div className='flex flex-row md:flex-col md:gap-y-2'>
                    <button className='mt-5 bg-base-100 rounded-sm shadow-gray-300 shadow-md border-2 border-gray-100 p-1.5 flex justify-center items-center font-semibold text-lg gap-2 hover:bg-gray-200 transition-all duration-300'>
                        <Image
                         src={SnoozeIcon}
                          alt='Snooze' />
                        Snooze 2 Weeks</button>
                       
                    <button className='bg-base-100 rounded-sm shadow-gray-300 shadow-md border-2 border-gray-100 p-1.5 flex justify-center items-center font-semibold text-lg gap-2 hover:bg-gray-200 transition-all duration-300'>
                        <Image
                         src={ArchiveIcon}
                          alt='Archive' />
                        Archive</button>
                       
                    <button className='bg-base-100 rounded-sm shadow-gray-300 shadow-md border-2 border-gray-100 p-1.5 flex justify-center items-center font-semibold text-lg text-red-400 gap-2 hover:bg-gray-200 transition-all duration-300'>
                        <Image 
                          src={DeleteIcon}
                           alt='Delete' />
                        Delete</button>
                </div>
            </div>

            <div className='col-span-3 '>

                <div className='grid grid-cols-3 gap-5'>

                    <div className=' bg-base-100 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 p-5 text-center'>
                        <span className='font-bold text-green-900 text-2xl'>{friend.days_since_contact}</span>
                        <p className='font-medium text-xl capitalize text-gray-500'>days since contact</p>
                    </div>

                    <div className=' bg-base-100 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 p-5 text-center' >
                        <span className='font-bold text-green-900 text-2xl'>{friend.goal}</span>
                        <p className='font-medium text-xl capitalize text-gray-500'>Goal(Days)</p>
                    </div>

                    <div className=' bg-base-100 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 p-5 text-center'>
                        <span className='font-bold text-green-900 text-2xl'>{formatDate()}</span>
                        <p className='font-medium text-xl capitalize text-gray-500'>Next Due</p>
                    </div>

                </div>

                <div className='bg-base-100 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 mt-4 p-5'>
                    <div className='flex justify-between'>
                        <h4 className='font-medium text-lg text-green-900 '>Relationship Goal</h4>
                        <button className='btn '>Edit</button>
                    </div>
                    <p className='font-medium text-lg text-gray-500'>Connect every <span className='text-black font-bold'>{`${friend.goal} days`}</span></p>
                </div>
 
                <div className='bg-base-100 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 p-5 mt-5'>
                    <h4 className='font-medium text-lg text-green-900'>Quick Check-In</h4>

                    <div className='grid grid-cols-3 mt-4 gap-5'>
                        <button
                         onClick={()=> handleCheckIn('Call')}
                          className='bg-base-200 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 p-6 text-center text-lg font-bold hover:border-blue-500 hover:bg-gray-300 transition-all duration-300 '><PhoneCall className='mx-auto w-10 h-10 mb-2'/> <span className='text-gray-500 '>Call</span></button>

                        <button
                         onClick={()=> handleCheckIn('Text')}
                          className='bg-base-200 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 p-6 text-center text-lg font-bold hover:border-blue-500 hover:bg-gray-300 transition-all duration-300  '><MessageSquareMore className='mx-auto w-10 h-10 mb-2' /> <span className='text-gray-500 '>Text</span></button>

                        <button
                         onClick={()=> handleCheckIn('Video')}
                          className='bg-base-200 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 p-6 text-center text-lg font-bold hover:border-blue-500 hover:bg-gray-300 transition-all duration-300 '><Video className='mx-auto w-10 h-10 mb-2'/> <span className='text-gray-500 '>Video</span></button>
                    </div>
                </div>
 
                <div>
                    {/* <div className='flex justify-between'>
                        <h4 className='font-semibold text-lg text-green-900'>Recent Interactions</h4>
                        <button className='btn '>
                            <Image 
                              src={ClockCounterClockWise}
                              alt='Clock Counter ClockWise' />
                            Full History</button>
                    </div> */}

                        <RecentInteractions
                          setShowAll={setShowAll}
                            showAll={showAll}
                              interactions={interactions} />
                </div>
            </div>      
        </div>
    );
};

export default FriendDetails;