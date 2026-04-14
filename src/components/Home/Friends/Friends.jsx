import React, { use } from 'react';
import friendsData from '@/assets/Json/Data.json';
import FriendsCard from './FriendsCard';


const Friends = () => {
    console.log(friendsData);
    return (
        <div className='max-w-11/12 mx-auto'>
            <h3 className='font-bold text-xl capitalize mt-18'>Your Friends</h3>
            <section className=' grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {friendsData.map(friends => {
                   return (
                     <FriendsCard 
                    key={friends.id}
                    friends={friends}/>
                   )
                })}
            </section>
        </div>
    );
};

export default Friends;