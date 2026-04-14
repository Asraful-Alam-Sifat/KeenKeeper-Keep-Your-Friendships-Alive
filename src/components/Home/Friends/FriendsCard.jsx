import Image from 'next/image';
import React from 'react';

const FriendsCard = ({friends}) => {
  console.log(friends.status)

    return (
<div className=" p-4 py-5 rounded-lg bg-base-100 border-2 border-gray-200 shadow-xl hover:border-blue-600 transition-all duration-300">
  
      <Image 
      className='rounded-full w-19 h-20 mx-auto'
        src={friends.picture} 
        alt={friends.name} 
        width={50} 
        height={50} 
      />
      <h4 className="font-bold text-xl text-center mt-3">{friends.name}</h4>
      <p className='font-medium text-gray-500 text-center mb-2'>{friends.days_since_contact}d ago</p>
      
      <div className="flex gap-2 justify-center">

        {friends.tags && friends.tags.map((tag, index) => (
          <p key={index} className="font-medium text-sm bg-green-200 rounded-full px-3 py-0.5">
            {tag}
          </p>
        ))}
      </div>
      <div className='mt-3 text-center'>
         {friends.status.toLowerCase() === 'overdue'
         ? <span className='bg-red-600 text-white px-3 py-0.5 rounded-xl font-medium text-xm'>{friends.status}</span>
         : friends.status.toLowerCase() === 'almost due'
             ? <span className='bg-yellow-400 text-white px-3 py-0.5 rounded-xl font-medium text-xm'>{friends.status}</span>
             : friends.status.toLowerCase() === 'on-track'
                 ? <span className='bg-green-800 text-white px-3 py-0.5 rounded-xl font-medium text-xm'>{friends.status}</span>
                 :'' }
     </div>
    </div>
    );
};

export default FriendsCard;