import React from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Import React Icons
import { AiOutlineBell, AiOutlineGlobal } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { FiInfo } from "react-icons/fi";
import Layouts from "../Layout/Layouts";
import { Link } from "react-router-dom";

function AccountCard({ title, icon }) {
  return (
    <div className="rounded-lg hover:border-slate-400 border bg-white p-4 mb-8 flex flex-col items-start cursor-pointer">
      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center ">
        {icon}
      </div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">Description of the card content.</p>
      </div>
    </div>
  );
}

function Account() {
  return (
    <Layouts>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Account</h1>
        <div className="flex items-center space-x-3  my-4 ">
          <p className="text-gray-700">Mugesh Rao</p>
          <Link to="/profile" className="text-slate-500  hover:underline">
            Go to profile
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          <AccountCard title="Personal info" icon={<FaUser />} />
          <AccountCard title="Login & security" icon={<FaLock />} />
          <AccountCard title="Payments & payouts" icon={<AiOutlineBell />} />
          <AccountCard title="Taxes" icon={<GiReceiveMoney />} />
          <AccountCard title="Notifications" icon={<AiOutlineBell />} />
          <AccountCard title="Privacy & sharing" icon={<AiOutlineBell />} />
        </div>
      </div>
    </Layouts>
  );
}

export default Account;
