import React, { useEffect, useState } from "react";
import Layouts from "../../Layout/Layouts";
import { FiArrowRightCircle } from "react-icons/fi";
import { RxShare2 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCoupon3Line } from "react-icons/ri";
import {
  FaMoneyBillWave,
  FaClock,
  FaDollarSign,
  FaBus,
  FaRegClock,
  FaStar,
  FaUser,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

function EqupimentsBuy() {
  const [showGSTIN, setShowGSTIN] = useState(false);
  const [userData, setUserData] = useState("");
  const { id } = useParams();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weight, setWeight] = useState("");
  const [insuranceStatus, setInsuranceStatus] = useState("");

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/insurance/${id}`);
        console.log(response,"eero");
        setApplication(response);
      } catch (err) {
        console.error('Failed to fetch application:', err);
        setError('Failed to fetch application');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchApplication();
    }
  }, [id]); // Depend on applicationId to refetch if it changes


  const plans = [
    { id: "1year", label: "1 Year @ ₹7,620" },
    { id: "2years", label: "2 Years @ ₹14,671" },
    { id: "3years", label: "3 Years @ ₹21,530" },
  ];
  return (
    <Layouts>
      <section className="pt-4">
        <div className="container mx-auto px-4">
         
          <div className="flex flex-col lg:flex-row ">
            <div className="lg:w-2/3 ">
             
              <div className="  gap-4 flex flex-col p-1 mb-4 rounded-lg ">
                <div className="bg-white rounded-lg p-6 ">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaBus className="text-slate-600 h-6 w-6" />
                      <h2 className="ml-2 text-lg font-semibold text-gray-700">
                  Health Gain
                      </h2>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <button className="text-slate-600 hover:text-slate-700 focus:outline-none">
                          <RxShare2 className="h-5 w-5" />
                        </button>
                        <button className="text-slate-600 hover:text-slate-700 focus:outline-none">
                          <AiOutlineHeart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
               
                 

                 
                </div>
                <div className="bg-white rounded-lg p-6 ">
                <div className="mb-4">
                    <div className="font-bold text-xl mb-2">Policy Period</div>
                  </div>

                  <p className="text-gray-700 text-base">
                    Choosing a multi-year plan saves your money and the trouble
                    of remembering yearly renewals.
                  </p>

                  <div className="flex flex-row gap-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`mb-2 p-2 border-2 border-dashed cursor-pointer ${
                        selectedPlan === plan.id
                          ? "bg-black text-white border-white"
                          : " border-black"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <p className="font-semibold">{plan.label}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-2">
                  Easy EMI options starting from ₹682/month.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View details ›
                </a>
                </div>
              
                <div className="bg-white rounded-lg p-6 ">
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <label htmlFor="coverAmount">Cover Amount</label>
                    <select
                      id="coverAmount"
                      className="w-full border-gray-300 bg-gray-200 p-3 rounded-md shadow-sm"
                    >
                      <option value="1">1 Lakh</option>
                      <option value="2">2 Lakh</option>
                      <option value="3">3 Lakh</option>
                      <option value="4">4 Lakh</option>
                      <option value="5">5 Lakh</option>
                    </select>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      Is this cover amount sufficient? Let's find out ›
                    </a>
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="premium">Premium</label>
                    <input
                      id="premium"
                      type="text"
                      className="w-full"
                      defaultValue="₹7,378/year"
                      disabled
                    />
                  </div>
                </div>
                </div>
                <div className="bg-white rounded-lg p-6 ">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Your pincode and state
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-evenly">
                    <div className="mb-4">
                      <label className="text-gray-600 block mb-1">
                        Pincode
                      </label>
                      <input
                        type="text"
                        className="border rounded-md p-2 w-full hover:ring-slate-500 ring-1"
                        placeholder="602301"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-gray-600 block mb-1">State</label>
                      <input
                        type="text"
                        className="border rounded-md p-2 w-full hover:ring-slate-500 ring-1"
                        placeholder="Tamil Nadu"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-gray-600 font-semibold block mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        className="border rounded-md p-2 w-full hover:ring-slate-500 ring-1"
                        placeholder="Your Address (Optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="bg-slate-600 text-white rounded-md px-4 py-2 hover:bg-slate-700"
                    >
                      Confirm and save Details
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 ">
                <button className="flex aspect-square h-16 w-full items-center justify-center rounded-md border-2 border-black border-dashed">
                  {/* <Upload className="h-8 w-8 text-black" /> */}
                  <span className="text-lg text-black">Upload</span>
                </button>
                </div>
                <div className="bg-white rounded-lg p-6 ">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Contact Details
                  </h2>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row space-x-4">
                      <div className="flex-grow mb-4">
                        <label className="text-gray-600 block mb-1">
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          className="border rounded-md p-2 w-full hover:ring-slate-500 ring-1"
                          placeholder="602301"
                        />
                      </div>
                      <div className="flex-grow mb-4">
                        <label className="text-gray-600 block mb-1">
                          Emergency Number
                        </label>
                        <input
                          type="text"
                          className="border rounded-md p-2 w-full hover:ring-slate-500 ring-1"
                          placeholder="Tamil Nadu"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <button
                        className="text-slate-500 hover:text-slate-700 font-semibold focus:outline-none"
                        onClick={() => setShowGSTIN(!showGSTIN)}
                      >
                        {showGSTIN ? "Hide GSTIN" : "Enter GSTIN (Optional)"}
                      </button>
                    </div>
                  </div>

                  {showGSTIN && (
                    <div className="flex flex-row space-x-4">
                      <div className="flex-grow mb-4">
                        <label className="text-gray-600 block mb-1">
                          Registered Company Number
                        </label>
                        <input
                          type="text"
                          className="border rounded-md p-2 w-full hover:ring-slate-500 ring-1"
                          placeholder="12ABCDE4567ABCD"
                        />
                      </div>
                      <div className="flex-grow mb-4">
                        <label className="text-gray-600 block mb-1">
                          Registered Company Name
                        </label>
                        <input
                          type="text"
                          className="border rounded-md p-2 w-full hover:ring-slate-500 ring-1"
                          placeholder="ABCDE Limited"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Additional images/buttons */}
            </div>

            <div className="lg:w-1/3 lg:ml-5">
              {/* Right fixed content */}
              <div className=" sticky  top-16 space-y-2">
                <div className="bg-white rounded-lg p-6 ">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                      ₹ 48,545 /total
                    </h2>
                    <FaMoneyBillWave className="text-gray-500 h-6 w-6" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Premium</span>
                      <span className="text-gray-800">₹ 14,690</span>
                    </div>
                    
                  
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-gray-800">₹ 4,478</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount</span>
                      <span className="text-gray-800">₹ 20,468</span>
                    </div>
                   
                  </div>
                  <Link to="/checkout" className="flex space-y-4 flex-col">
                    <button className="bg-slate-700 w-full py-2 mt-4 rounded-lg text-white">
                      {" "}
                      Book Now
                    </button>

                    <span className="text-xs">
                      By proceeding, I agree to FarmEase ’s{" "}
                      <a
                        href="your-user-agreement-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        User Agreement
                      </a>
                      ,{" "}
                      <a
                        href="your-terms-of-service-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        Terms of Service
                      </a>
                      , and{" "}
                      <a
                        href="your-privacy-policy-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </Link>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default EqupimentsBuy;
