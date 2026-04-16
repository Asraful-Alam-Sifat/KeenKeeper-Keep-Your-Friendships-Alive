"use client";

// 1. Remove the Heroicons import line that is causing the error
import { useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

export default function TimelineFilter() {
  const [selected, setSelected] = useState('Filter timeline');

  // 2. Use emojis instead of the Icon components
const filters = [
    { name: 'Call', },
    { name: 'Text', },
    { name: 'Video',  },
  ];

  return (
    <div className="relative inline-block text-left">
      <Menu>
        <MenuButton className="inline-flex w-64 justify-between items-center rounded-md border border-gray-300 bg-base-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          {selected}
          {/* Replace ChevronDownIcon with a simple arrow */}
          <span className="ml-2 text-gray-400"><ChevronDown /></span>
        </MenuButton>

        <MenuItems className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {filters.map((filter) => (
              <MenuItem key={filter.name}>
                {({ focus }) => (
                  <button
                    onClick={() => setSelected(filter.name)}
                    className={`${
                      focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } flex w-full items-center px-4 py-2 text-sm`}
                  >

                    {filter.name}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}