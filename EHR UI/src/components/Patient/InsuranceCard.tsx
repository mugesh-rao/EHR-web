import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart as HeartFilled,
  FaRegHeart as HeartOutline,
} from "react-icons/fa"; // Importing icons from react-icons

interface InsuranceCardProps {
  insuranceProvider: string;
  planName: string;
  additionalPlansCount: number;
  instantCoverDetails: string;
  noRoomRentLimit: string;
  renewalBonus: string;
  unlimitedRestoration: string;
  coverAmount: number;
  cashlessHospitalsCount: number;
  monthlyPremium: number;
  annualPremium: number;
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({
  insuranceProvider,
  planName,
  additionalPlansCount,
  instantCoverDetails,
  noRoomRentLimit,
  renewalBonus,
  unlimitedRestoration,
  coverAmount,
  cashlessHospitalsCount,
  monthlyPremium,
  annualPremium,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-4 flex flex-row justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {insuranceProvider}
          </h3>
          <p className="text-gray-600">
            {planName} + {additionalPlansCount} more plans
          </p>
          <p className="text-gray-600 mt-1 text-sm">{instantCoverDetails}</p>
          <ul className="mt-2 text-gray-500 text-sm list-disc pl-5">
            <li>{noRoomRentLimit}</li>
            <li>{renewalBonus}</li>
            <li>{unlimitedRestoration}</li>
          </ul>
        </div>
        <div>
          {" "}
          <div className="mt-3">
            <p className="text-lg font-bold">₹{coverAmount}</p>
            <p className="text-gray-600 text-sm">
              Cashless Hospitals: {cashlessHospitalsCount}
            </p>
            <p className="text-gray-600 text-sm">
              Premium: ₹{monthlyPremium}/month or ₹{annualPremium} annually
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Link
              to="/Request-Insurance"
              className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-200"
            >
              View Plan Details
            </Link>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isLiked ? <HeartFilled size={24} /> : <HeartOutline size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
