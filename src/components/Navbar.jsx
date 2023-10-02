import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function Navbar({ isAuth }) {
  return (
    <nav>
      <ul className="h-[48px] flex justify-center items-center gap-[36px] bg-yellow-500 text-gray-800">
        <li>
          <Link
            to={"/"}
            className="transition duration-300 ease-in-out hover:text-white flex items-center"
          >
            <AiOutlineHome size={20} className="mr-1" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/create-post"}
            className="transition duration-300 ease-in-out hover:text-white flex items-center"
          >
            <AiOutlinePlusCircle size={20} className="mr-1" />
            Post
          </Link>
        </li>
        {!isAuth ? (
          <li>
            <Link
              to={"/login"}
              className="transition duration-300 ease-in-out hover:text-white flex items-center"
            >
              <AiOutlineLogin size={20} className="mr-1" />
              Login
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to={"/logout"}
              className="transition duration-300 ease-in-out hover:text-white flex items-center"
            >
              <AiOutlineLogout size={20} className="mr-1" />
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
