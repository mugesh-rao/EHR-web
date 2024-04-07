import React from "react";
import {
  AiOutlineReload,
  AiOutlineFileSearch,
  AiFillEye,
} from "react-icons/ai";

function OrderProductCard() {
  return (
    <div className="mt-6 md:mt-0 flex bg-slate-100 p-4 rounded-lg justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
      <div className="w-full md:w-40">
        <img
          className="w-full hidden md:block"
          src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
          alt="dress"
        />
        <img
          className="w-full md:hidden"
          src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
          alt="dress"
        />
      </div>
      <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
            High Quaility Italic Dress
          </h3>
          <div className="flex justify-start items-start flex-col space-y-2">
            <p className="text-sm leading-none text-gray-800">
              <span className="text-gray-300">Style: </span> Italic Minimal
              Design
            </p>
            <p className="text-sm leading-none text-gray-800">
              <span className="text-gray-300">Size: </span> Small
            </p>
            <p className="text-sm leading-none text-gray-800">
              <span className="text-gray-300">Color: </span> Light Blue
            </p>
          </div>
          <div className="flex items-center text-sm leading-none text-gray-800">
            Delivered <span className="ml-2 text-gray-400">June 15, 2023</span>
          </div>
          <div className="flex items-center text-sm leading-none text-gray-800">
            Return and Cancel eligible until June
          </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base xl:text-lg leading-6">
            $20.00 <span className="text-red-300 line-through"> $30.00</span>
          </p>
          <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
            $20.00
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <button className="flex items-center text-gray-800 space-x-2">
          <AiOutlineReload />
          Buy it again
        </button>
        <button className="flex items-center text-gray-800 space-x-2">
          <AiOutlineFileSearch />
          Track Package
        </button>
        <button className="flex items-center text-gray-800 space-x-2">
          <AiFillEye />
          View Your Items
        </button>
      </div>
    </div>
  );
}

export default OrderProductCard;
