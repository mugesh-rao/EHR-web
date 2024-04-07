import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
const menuItems = [
  { path: "/", icon: AiOutlineHome, label: "Home" },
  { path: "/category", icon: BiSolidCategory, label: "Category" },
  { path: "/history", icon: FaHistory, label: "Orders" },
  { path: "/account", icon: AiOutlineUser, label: "Account" },
];

function BottomNavigator() {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 z-20 w-full bg-white shadow-lg px-4 py-1.5 border-t-2 border-slate-100 lg:hidden">
      <div className="flex justify-between items-center">
        {menuItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center cursor-pointer ${
              isActive(path) ? "bg-slate-100 p-2 rounded-lg" : "p-2"
            }`}
          >
            <Icon size={24} color={isActive(path) ? "slate" : "gray"} />
            <span
              className={`text-xs mt-1 ${
                isActive(path) ? "text-slate-500" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavigator;
