import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";

const Header = () => {
  return (
    <nav className="bg-gray-200 h-[60px] flex fixed w-screen top-0 z-50 shadow-lg">
      <div className="flex justify-between  items-center lg: px-8 md:px-4 w-[1000px] mx-auto ">
        <Link to="/">
          <img src="https://placehold.co/40x40" alt="logo" />
        </Link>

        <div className="flex gap-4">
          <span className="relative">
            <BsFillCartFill className="text-xl hover:text-gray-600" />
            <p className="bg-red-500 text-white w-4 text-xs absolute text-center rounded-full -top-2 -right-2">
              1
            </p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
