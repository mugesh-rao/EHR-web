import React from "react";
import { FiHome, FiUsers, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../asset/Home/Logo.png";

function SideBar() {
  const { pathname } = useLocation();

  const isCurrentPath = (path) => pathname === path;
  return (
    <>
      <div className=" hidden sm:block  duration-300  h-screen lg:block  w-[250px]   bg-[#D0D9CD] ">
        <div className="font-bold text-lg flex items-center gap-x-3 bg-slate-900 h-20 justify-center ">
          <Link to="/" class="  w-10 h-10 ">
            <img src={logo} alt="logo" />
          </Link>

          <div className="tracking-wide text-white">Grow Guard</div>
        </div>

        <div className="pl-3 pt-4 mt-6 flex flex-col gap-y-2 text-gray-500 text-sm">
          <div className="text-gray-800 font-medium uppercase">Menu</div>
          <Link
            className={`px-2 py-3 hover:bg-slate-800 hover:text-white rounded-lg cursor-pointer flex flex-row gap-2 mr-4 text-gray-800  ${
              pathname === "/admin" ? "bg-slate-900 text-white font-bold" : ""
            }`}
            to="/admin"
          >
            <FiHome className="h-5 w-5 hover:text-slate-600" />
            <span>Home</span>
          </Link>
          <Link
            className={`px-2 py-3 hover:bg-slate-800 hover:text-white  rounded-lg cursor-pointer flex flex-row gap-2 mr-4 text-gray-800 ${
              pathname === "/admin/Wastes"
                ? " bg-slate-900 text-white font-bold"
                : ""
            }`}
            to="/admin/Wastes"
          >
            <FiUsers className="h-5 w-5  hover:text-slate-600" />
            <span>Waste </span>
          </Link>
          <Link
            className={`px-2 py-3 hover:bg-slate-800 hover:text-white rounded-lg cursor-pointer flex flex-row gap-2 mr-4 text-gray-800  ${
              pathname === "/admin/features"
                ? "bg-slate-900 text-white font-bold"
                : ""
            }`}
            to="/admin/features"
          >
            <BiSolidCategory className="h-5 w-5 hover:text-slate-600" />
            <span>Features</span>
          </Link>
          <Link
            className={`px-2 py-3 hover:bg-slate-800 hover:text-white rounded-lg cursor-pointer flex flex-row gap-2 mr-4 text-gray-800  ${
              pathname === "/admin/Orders"
                ? "bg-slate-900 text-white font-bold"
                : ""
            }`}
            to="/admin/Orders"
          >
            <FaHistory className="h-5 w-5 group-hover:text-slate-600" />
            <span>Orders</span>
          </Link>
          <Link
            className={`px-2 py-3 hover:bg-slate-800 hover:text-white rounded-lg cursor-pointer flex flex-row gap-2 mr-4 text-gray-800  ${
              pathname === "/admin/disease"
                ? "bg-slate-900 text-white font-bold"
                : ""
            }`}
            to="/admin/disease"
          >
            <PiPottedPlantDuotone className="h-5 w-5 group-hover:text-slate-600" />
            <span>Disease Detect</span>
          </Link>

          <div className="mt-4 text-gray-400/70 font-medium uppercase">
            Social
          </div>
          <Link
            className={`flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-slate-600 hover:font-semibold ${
              pathname === "/admin/1" ? "bg-slate-900 text-white font-bold" : ""
            }`}
            to="/admin"
          >
            <FiUser className="h-5 w-5 group-hover:text-slate-600" />
            <span>Profile</span>
          </Link>
          <Link
            className={`flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-slate-600 hover:font-semibold ${
              pathname === "/admin/1" ? "bg-slate-900 text-white font-bold" : ""
            }`}
            to="/admin"
          >
            <BsFillStarFill className="h-5 w-5 hover:text-slate-600" />
            <span>Friends</span>
          </Link>
          <Link
            className={`flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-slate-600 hover:font-semibold ${
              pathname === "/admin/1" ? "bg-slate-900 text-white font-bold" : ""
            }`}
            to="/admin"
          >
            <FiSettings className="h-5 w-5 hover:text-slate-600" />
            <span>Settings</span>
          </Link>
          <Link
            className={` absolute bottom-4  px-16 py-3 bg-red-800 rounded-lg cursor-pointer flex flex-row gap-2 mr-4 items-center justify-center text-center text-white font-bold `}
            to="/admin"
          >
            <FiLogOut className="h-5 w-5 hover:text-slate-600" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar;
