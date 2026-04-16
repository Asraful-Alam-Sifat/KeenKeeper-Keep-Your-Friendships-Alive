import { Plus } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="mt-20">
        <h1 className="font-bold text-5xl text-center">
          Friends to keep close in your life
        </h1>
        <p className="font-base text-gray-500 text-center mt-4 mb-10 ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <div className="flex justify-center">
          <button className="btn text-lg bg-green-950 text-white hover:bg-green-900 transition-all duration-300 text-center">
            <Plus />
            Add a Friend
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
