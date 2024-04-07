import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaStar, FaSeedling } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { RiUserLocationFill } from "react-icons/ri";

function ProductCard({
  ProductName,
  Rating,
  Price,
  Categories,
  weight,
  type,
  owner,
  machineName,
  hourlyRate,
  ratePerAcre,
  totalRate,
  location,
  crop,
  brand,
  link,
  discount,
  distance,
  availability,
  averageRating,
}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="rounded-xl bg-white  ring-2 my-2 ring-slate-200 hover:ring-slate-500 cursor-pointer">
      <div className="flex h-full flex-col sm:flex-row">
        <div className="p-3  flex flex-col justify-between w-full">
          <div className="">
            <h2 className="text-slate-700 text-center  font-bold">
              {machineName}
            </h2>
            <ul className="text-slate-400 text-sm  flex flex-row gap-4 ">
              <span className="font-bold ">{brand} </span>
              <span className="flex flex-row items-center justify-center gap-2">
                {" "}
                <FaStar className="w-h h-4" />
                <span>4.5</span>
              </span>
              <span>45 reviews</span>
            </ul>
          </div>
          <div className="flex justify-around flex-row">
            <div className="flex items-center ">
              <BiTime className="text-gray-500 mr-1 " />
              <p className="text-sm text-gray-500">Time: 21:00</p>
            </div>
            <div className="flex items-center mt-1">
              <RiUserLocationFill className="text-gray-500 mr-1" />
              <p className="text-sm text-gray-500">Cuddalore</p>
            </div>
            <div className="flex items-center mt-1">
              <FaSeedling className="text-gray-500 mr-1" />
              <p className="text-sm text-gray-500">Paddy</p>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <BiTime className="w-5 h-5  mr-1" />
            <p className="text-sm text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap">
              Available From : 27 August 2023 to 8 August 2023 in Cuddalore
              travel to Madurai for Paddy Harvest
            </p>
          </div>
          <div className="max-h-15 overflow-hidden my-2 ">
            <ul className="list-disc flex flex-row gap-4 overflow-hidden overflow-ellipsis whitespace-nowrap">
              <li className="text-sm text-gray-500 mr-4 mb-1">District A</li>
              <li className="text-sm text-gray-500 mr-4 mb-1">District B</li>
              <li className="text-sm text-gray-500 mr-4 mb-1">District C</li>
              <li className="text-sm text-gray-500 mr-4 mb-1">District D</li>
              <li className="text-sm text-gray-500 mr-4 mb-1">District D</li>
              <li className="text-sm text-gray-500 mr-4 mb-1">District D</li>
              <li className="text-sm text-gray-500 mr-4 mb-1">District D</li>
            </ul>
          </div>

          <div className="flex items-center justify-between  ">
            <span className="flex flex-row justify-center items-center space-x-8">
              <span className="text-base font-bold text-slate-500 ">
                ₹ {hourlyRate} / hr
              </span>
              <span className="text-sm font-semibold text-slate-400 underline">
                ₹ {hourlyRate * 12.5} total
              </span>
            </span>
            <div className="gap-2 flex items-center">
              <Link
                to={`/BuyNow`}
                className="group inline-flex rounded-lg bg-slate-100 p-2 hover:bg-slate-200 cursor-pointer"
              >
                <span className="hover:text-slate-500 text-slate-400">
                  Book Now
                </span>
              </Link>
              <div className="group inline-flex rounded-lg bg-slate-100 p-2 hover:bg-slate-200 cursor-pointer">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="hover:text-slate-500 text-slate-400"
                >
                  {isLiked ? (
                    <BsHeartFill className="w-6 h-6" />
                  ) : (
                    <BsHeart className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
