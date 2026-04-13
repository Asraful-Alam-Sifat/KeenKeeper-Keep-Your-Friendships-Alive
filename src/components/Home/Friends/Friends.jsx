import React, { use } from 'react';


const getFriendsData = async () => {
    const res = await fetch('/Data.json');
    return res.json();
}
const Friends = () => {
    const FriendsDataPromies = getFriendsData();
    const FriendsData = use(FriendsDataPromies);
    console.log(FriendsData);
    return (
        <div>
            <h3>Your Friends</h3>
            <section>

            </section>
        </div>
    );
};

export default Friends;