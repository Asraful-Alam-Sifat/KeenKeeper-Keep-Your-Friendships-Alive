import { MessageSquareMore, PhoneCall, RotateCcw, Video } from 'lucide-react';
import React from 'react';



const RecentInteractions = ({ showAll, setShowAll, interactions }) => {

    const safeInteractions = Array.isArray(interactions) ? interactions : [];

// console.log(interactions)
    return (
        <div className="bg-base-100 rounded-xl shadow-gray-300 shadow-md border-2 border-gray-100 p-6">
          
          {/* Header Row */}
  <div className="flex justify-between items-center mb-3">
    <h4 className="font-medium text-lg text-green-900">Recent Interactions</h4>
    <button
      onClick={() => setShowAll(!showAll)}
      className="btn text-sm text-gray-600 flex items-center gap-1 hover:text-green-700 hover:border-green-700 transition"
    >
      <RotateCcw className="w-4 h-4" />

      {showAll ? 'Show Less' : 'Full History'}
    </button>
  </div>

  {/* Cards */}
  {interactions.length === 0 ? (
    <p className="text-sm text-gray-400 text-center py-4">
      No interactions yet — click Call, Text or Video above.
    </p>
  ) : (
    (showAll ? safeInteractions : safeInteractions.slice(0, 4)).map((item, idx) => (
      <div key={idx} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
        
        {/* Left: Icon */}
        <div className="shrink-0 text-gray-400">
          {item.type === 'Call'  && <PhoneCall className="w-8 h-8 text-black" />}
          {item.type === 'Text'  && <MessageSquareMore className="w-8 h-8 text-black" />}
          {item.type === 'Video' && <Video className="w-8 h-8 text-black" />}
        </div>

        {/* Middle: type + note */}
        <div className="flex-1">
                  <p className="font-medium text-md ">{item.type}</p>
                  <p className="text-gray-400 text-sm">{item.note}</p>
                </div>
        
                {/* Right: time + date */}
                <div className="text-right shrink-0">
                  <p className="text-xs font-semibold text-gray-600">{item.time}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
        
              </div>
            ))
          )}
        
        </div>
    );
};

export default RecentInteractions;