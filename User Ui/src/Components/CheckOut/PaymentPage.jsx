import React from "react";
import {
  FaRegCalendarAlt,
  FaClock,
  FaBus,
  FaUser,
  FaRupeeSign,
} from "react-icons/fa";
import Layouts from "../../Layout/Layouts";
import { Link } from "react-router-dom";

function PaymentPage() {
  return (
    <Layouts>
      <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" class="text-2xl font-bold text-gray-800">
          Machine
        </a>
        <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div class="relative">
            <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span class="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  class="flex h-6 w-6 items-center cursor-pointer justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  to="/Checkout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </Link>
                <span class="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  class="flex h-6 w-6 items-center cursor-pointer justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  to="/payments"
                >
                  3
                </Link>
                <span class="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className=" text-slate-700 font-bold  text-xl">
            Pay 892.5 to confirm booking
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <FaBus className="text-slate-600 h-6 w-6" />
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-700">Chennai</p>
              <p className="text-sm text-gray-500">Coimbatore</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <FaRegCalendarAlt className="text-slate-600 h-6 w-6" />
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-700">
                21 Aug 2023 08:20 PM
              </p>
              <p className="text-sm text-gray-500">
                22 Aug 2023 06:05 AM (9h 45m)
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaBus className="text-slate-600 h-6 w-6" />
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-700">
                Krish Travels (NON AC Seater / Sleeper 2+1)
              </p>
              <p className="text-sm text-gray-500">Mugesh Rao</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center">
            <FaUser className="text-slate-600 h-6 w-6" />
            <div className="ml-2">
              <p className="text-sm text-gray-700">Mugesh Rao</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <FaRupeeSign className="text-slate-600 h-6 w-6" />
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-700">Grand Total</p>
              <p className="text-2xl font-semibold text-slate-600">892.5</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <p className="text-sm font-semibold text-gray-700">Base Fare</p>
            <p className="text-sm text-gray-500 ml-2">850</p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-sm font-semibold text-gray-700">Operator Gst</p>
            <p className="text-sm text-gray-500 ml-2">42.5</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-700">Payment Options</p>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              name="payment_option"
              id="option_book_now"
              className="peer hidden"
              checked
            />
            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              htmlFor="option_book_now"
            >
              <div className="ml-5">
                <span className="mt-2 font-semibold">Book Now Pay Later</span>
                <p className="text-gray-500 text-sm leading-6">
                  Tripmoney, Lazypay, Simpl, ZestMoney, ICICI, HDFC and more
                </p>
              </div>
            </label>
          </div>

          {/* Repeat similar structure for other payment options */}

          <div className="flex items-center mt-2">
            {/* Add payment option icons and details */}
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="bg-slate-600 text-white px-4 py-2 rounded-md text-sm">
            Book Now
          </button>
        </div>
      </div>
    </Layouts>
  );
}

export default PaymentPage;
