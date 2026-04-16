"use client";

import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function TimelineFilter({ timelineCards, onFilterChange }) {
  const [selected, setSelected] = useState("Filter timeline");


  const filters = [
    { name: "All", id: 0 },
    { name: "Call", id: 1 },
    { name: "Text", id: 2 },
    { name: "Video", id: 3 },
  ];

  const handleSelect = (name) => {
    setSelected(name);
    onFilterChange(name);
  };

  return (
    <div className="relative inline-block text-left">
      <Menu>
        <MenuButton className="inline-flex w-64 justify-between items-center rounded-md border border-gray-300 bg-base-200 px-4 py-2 text-md font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none">
          {selected}

          <span className="ml-2 text-gray-400">
            <ChevronDown />
          </span>
        </MenuButton>

        <MenuItems className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg border border-gray-400 font-semibold z-10">
          <div className="py-1">
            {filters.map((filter) => (
              <MenuItem key={filter.id}>
                {({ focus }) => (
                  <button
                    onClick={() => handleSelect(filter.name)}
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
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
