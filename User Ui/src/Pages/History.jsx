import React from "react";
import Layouts from "../Layout/Layouts";
import { FaCheckCircle, FaEye } from "react-icons/fa";

const HistoryItem = ({
  orderNumber,
  date,
  equipmentID,
  rentalProvider,
  completed,
  totalCost,
  duration,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-slate-500">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-slate-500">{orderNumber}</h2>
        <span className="text-gray-600">Date: {date}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Equipment ID:</span>
          <span className="font-semibold">{equipmentID}</span>
        </div>
        <button className="px-3 py-1 text-sm rounded-lg bg-slate-500 text-white hover:bg-slate-600 transition duration-300">
          <FaEye className="mr-1 inline-block" /> View Details
        </button>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Rental Provider:</span>
          <span className="font-semibold">{rentalProvider}</span>
        </div>
        <span className={`text-${completed ? "slate" : "gray"}-600`}>
          <FaCheckCircle className="mr-1 inline-block" />{" "}
          {completed ? "Completed" : "Not Completed"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Total Cost:</span>
          <span className="font-semibold">{totalCost}</span>
        </div>
        <span className="text-gray-600">Duration: {duration}</span>
      </div>
    </div>
  );
};

const History = () => {
  const historyItems = [
    {
      orderNumber: "#RNT789",
      date: "Aug 15, 2023",
      equipmentID: "EQP789",
      rentalProvider: "ABC Rentals",
      completed: true,
      totalCost: "₹1,200",
      duration: "3 Days",
    },
    {
      orderNumber: "#RNT789",
      date: "Aug 15, 2023",
      equipmentID: "EQP789",
      rentalProvider: "ABC Rentals",
      completed: true,
      totalCost: "₹1,200",
      duration: "3 Days",
    },
    // Add more history items here
  ];
  return (
    <Layouts>
      <div class="flex items-center justify-center   mt-6">
        <div class="flex flex-col">
          <div class="rounded-xl border border-slate-200 bg-white p-4 ">
            <form class="">
              <div class="relative mb-10 w-full flex  items-center justify-between rounded-md">
                <svg
                  class="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" class=""></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-slate-500 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
                  placeholder="Search by name, type, manufacturer, etc"
                />
              </div>

      
              
            </form>
          </div>
        </div>
      </div>

      <div className="mx-4 my-3 flex flex-col gap-2">
        {/* {historyItems.map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))} */}
      </div>
    </Layouts>
  );
};

export default History;
