import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Layouts from "../../Layout/Layouts";

const DealerInfoCard = ({
  dealerName,
  address,
  isOpen,
  phoneNumber,
  direction,
}) => {
  function directioncall() {
    const link = direction; // Replace with your desired link

    window.open(link, "_blank");
  }

  return (
    <div className="transition-all duration-300 border bg-white border-slate-200 rounded-3xl p-6 lg:p-10 text-center flex flex-col space-y-4 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
      <h2 className="text-xl font-bold">{dealerName}</h2>
      <p className="text-gray-600 mt-2">{address}</p>
      <div className="flex items-center mt-4 flex-row justify-between">
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            isOpen ? "text-slate-500 " : "text-red-500 "
          }`}
        >
          {isOpen ? "Open" : "Closed"}
        </span>
        <span className="text-xl text-gray-500 flex-row flex">
          <BiSolidPhoneCall className="text-2xl" />
          {phoneNumber}
        </span>
      </div>
      <hr className="border border-gray-300" />
      <div className="flex flex-row justify-between mt-4">
        <a
          href={`tel:+91${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex flex-row items-center  text-black border border-slate-700 rounded-lg py-2 px-4">
            <FaPhoneAlt className="mr-2" />
            Call
          </button>
        </a>

        <button
          className="flex  flex-row items-center  text-gray-800 border border-red-700 rounded-lg  py-2 px-4 ml-2 "
          onClick={directioncall}
        >
          <FaMapMarkerAlt className="mr-2" />
          Directions
        </button>
      </div>
    </div>
  );
};

function WasteManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const dealerData = [
    {
      dealerName: "GT Insurance",
      address: "12, Singarapettai Street , Melpattampakkam , Cuddalore",
      isOpen: true,
      phoneNumber: "9865432550",
      direction: "https://goo.gl/maps/6iGhBpsVFhj7QJ1a6",
    },
    {
      dealerName: "OMNI Lights",
      address: "12, Singarapettai Street , Melpattampakkam , Cuddalore",
      isOpen: true,
      phoneNumber: "6374380946",
      direction: "https://goo.gl/maps/6iGhBpsVFhj7QJ1a6",
    },
    {
      dealerName: "Muthu Farms",
      address: "12, Singarapettai Street , Melpattampakkam , Cuddalore",
      isOpen: false,
      phoneNumber: "8754851550",
      direction: "https://goo.gl/maps/6iGhBpsVFhj7QJ1a6",
    },
    {
      dealerName: "Marimuthu Paddys",
      address: "12, Singarapettai Street , Melpattampakkam , Cuddalore",
      isOpen: false,
      phoneNumber: "8754851550",
      direction: "https://goo.gl/maps/6iGhBpsVFhj7QJ1a6",
    },
    // Add more dealer objects as needed
  ];

  const filteredDealers = dealerData.filter(
    (dealer) =>
      dealer.dealerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.phoneNumber.includes(searchTerm)
  );

  return (
    <Layouts>
      <div className="flex flex-col justify-center items-center py-[90px]">
        <div class="mx-auto mt-10 mb-6 relative w-full bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
          <input
            onChange={handleSearchChange}
            placeholder="Enter Name ,Address ..."
            class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <button class="w-full md:w-auto px-6 py-3 bg-slate-700 border-slate-700 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
            <div class="relative">
              <div class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  class="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <div class="flex items-center transition-all opacity-1 valid:">
                <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-2 mx-6">
          {filteredDealers.map((dealer, index) => (
            <DealerInfoCard
              key={index}
              dealerName={dealer.dealerName}
              address={dealer.address}
              isOpen={dealer.isOpen}
              phoneNumber={dealer.phoneNumber}
            />
          ))}
        </div>
      </div>
    </Layouts>
  );
}

export default WasteManagement;
