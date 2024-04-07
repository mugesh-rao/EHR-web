import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  FaHeart as HeartFilled,
  FaRegHeart as HeartOutline,
} from "react-icons/fa"; 

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function Products() {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const ProductCardsData = [
    {
      owner: "John Doe",
      machineName: "Tractor",
      hourlyRate: 50,
      ratePerAcre: "$5",
      location: "Farmville, USA",
      crop: "Corn",
      brand: "Brand 1",
      distance: 12,

      discount: "10",
      availability: "Available",
      averageRating: 4.5,
      Img: "https://santhoshagrimachinery.com/wp-content/uploads/2019/12/kartar_933_round_baler_e.jpg",
    },
    {
      owner: "Jane Smith",
      machineName: "Harvester",
      hourlyRate: 60,
      ratePerAcre: "$6",
      location: "Harvest City, Canada",
      crop: "Wheat",
      brand: "Kartar",
      distance: 12,

      discount: "5",
      availability: "Available",
      averageRating: 4.2,
      Img: "https://m.media-amazon.com/images/I/61ZqC4Tu68S.jpg",
    },
    {
      owner: "Michael Johnson",
      machineName: "Seeder",
      hourlyRate: 45,
      ratePerAcre: "₹4",
      location: "Seedville, Australia",
      crop: "Rice",
      brand: "Brand 3",
      distance: 12,
      discount: "15",
      availability: "Available",
      averageRating: 4.2,
      Img: "https://m.media-amazon.com/images/I/61ZqC4Tu68S.jpg",
    },
    // Add more data as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSlidesPerView(4);
      } else if (screenWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section class="p-5 w-full ">
      <Swiper
        spaceBetween={10}
        navigation
        autoplay={{ delay: 100000 }}
        slidesPerView={slidesPerView}
        loop
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {ProductCardsData.map((cardData, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...cardData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export function ProductCard({
  owner,
  machineName,
  hourlyRate,
  ratePerAcre,
  totalRate,
  location,
  crop,
  brand,
  discount,
  distance,
  availability,
  averageRating,
  Img,
}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="rounded-xl bg-white p-3 ring-2 my-2 ring-slate-200">
      <a href="/#" className="flex flex-col h-full">
        
        <div className="p-1">
          <h2 className="text-slate-700 text-center">{machineName}</h2>
          <ul className="text-slate-400 text-sm list-inline list-disc flex flex-row justify-around">
            <li>{brand}</li>
            <li>{availability}</li>
            <li>39 Trips</li>
          </ul>

          <div className="flex items-center justify-between">
            <p className="flex flex-col">
              <span className="text-lg font-bold text-slate-500">{crop}</span>
              <span className="text-slate-400 text-sm">{location}</span>
            </p>

            <p>
              <span className="text-sm bg-gray-200 text-slate-500 py-1 px-1 rounded-md">
                {distance} km away
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between my-1 border-t-2 border-dashed border-slate-200">
            <span className="flex flex-col justify-center items-center">
              <span className="text-base font-bold text-slate-500 mt-1">
                ₹ {hourlyRate} / hr
              </span>
              <span className="text-sm font-semibold text-slate-400 underline">
                ₹ {hourlyRate * 12.5} total
              </span>
            </span>
            <div className="gap-2 flex items-center ">
              <div className=" mt-1 group inline-flex rounded-lg bg-slate-100 p-2 hover:bg-slate-200">
                <span className="hover:text-slate-500  text-slate-400">
                  Book Now
                </span>
              </div>
              <div className="mt-1 group inline-flex rounded-lg bg-slate-100 p-2 hover:bg-slate-200">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="hover:text-slate-500  text-slate-400"
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
      </a>
    </div>
  );
}




const InsuranceCard = ({
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
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="rounded-lg m-2 overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
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
            <div
              className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-200"
            >
              View Plan Details
            </div>
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

export const FruitCard = ({
  Img,
  averageRating,
  cropName,
  brand,
  availability,
  crop,
  location,
  distance,
  price,
  link,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="rounded-xl bg-white p-3 ring-2 my-2 ring-slate-200">
      <a href="/#" className="flex flex-col h-full">
        <div className="relative flex-grow-1">
          <div className="aspect-w-3 aspect-h-3">
            <img
              src={Img}
              alt="Product"
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
          <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <FaStar className="text-yellow-400" />
            <span className="text-slate-400 ml-1 text-sm">{averageRating}</span>
          </div>
        </div>

        <div className="p-1">
          <h2 className="text-slate-700 text-center">{cropName}</h2>
          <ul className="text-slate-400 text-sm list-inline list-disc flex flex-row justify-around">
            <li>{brand}</li>
            <li>{availability}</li>
            <li>39 Trips</li>
          </ul>

          <div className="flex items-center justify-between">
            <p className="flex flex-col">
              <span className="text-lg font-bold text-slate-500">{crop}</span>
              <span className="text-slate-400 text-sm">{location}</span>
            </p>

            <p>
              <span className="text-sm bg-gray-200 text-slate-500 py-1 px-1 rounded-md">
                {distance} km away
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between my-1 border-t-2 border-dashed border-slate-200">
            <span className="flex flex-col justify-center items-center">
              <span className="text-base font-bold text-slate-500 mt-1">
                ₹ {price}{" "}
                <span className="text-base font-light text-slate-500 mt-1">
                  /Kg
                </span>
              </span>
            </span>

            <div className="gap-2 flex items-center ">
              <Link
                to={link}
                className="mt-1 group inline-flex rounded-lg bg-slate-100 p-2 hover:bg-slate-200"
              >
                <span className="hover:text-slate-500  text-slate-400">
                  Buy Now
                </span>
              </Link>
              <div className="mt-1 group inline-flex rounded-lg bg-slate-100 p-2 hover:bg-slate-200">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="hover:text-slate-500  text-slate-400"
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
      </a>
    </div>
  );
};
export const FertilizerCard = ({
  Img,
  averageRating,
  fertilizerName,
  brand,
  availability,
  type,
  location,
  distance,
  price,
  link,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="rounded-xl bg-white p-3 ring-2 my-2 ring-slate-200">
      <a href="/#" className="flex flex-col h-full">
        <div className="relative flex-grow-1">
          <div className="aspect-w-3 aspect-h-3">
            <img
              src={Img}
              alt="Fertilizer"
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
          <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <FaStar className="text-yellow-400" />
            <span className="text-slate-400 ml-1 text-sm">{averageRating}</span>
          </div>
        </div>

        <div className="p-1">
          <h2 className="text-slate-700 text-center">{fertilizerName}</h2>
          <ul className="text-slate-400 text-sm list-inline list-disc flex flex-row justify-around">
            <li>{brand}</li>
            <li>{availability}</li>
            <li>{type}</li>
          </ul>

          <div className="flex items-center justify-between">
            <p className="flex flex-col">
              <span className="text-lg font-bold text-slate-500">{type}</span>
              <span className="text-slate-400 text-sm">{location}</span>
            </p>

            <p>
              <span className="text-sm bg-gray-200 text-slate-500 py-1 px-1 rounded-md">
                {distance} km away
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between my-1 border-t-2 border-dashed border-slate-200">
            <span className="flex flex-col justify-center items-center">
              <span className="text-base font-bold text-slate-500 mt-1">
                ₹ {price}
              </span>
            </span>
            <div className="gap-2 flex items-center">
              <Link
                to={link}
                className="mt-1 group inline-flex rounded-lg bg-slate-100 p-2 hover:bg-slate-200"
              >
                <span className="hover:text-slate-500 text-slate-400">
                  Buy Now
                </span>
              </Link>
              <div className="mt-1 group inline-flex rounded-lg bg-slate-100 p-2 hover:bg-slate-200">
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
      </a>
    </div>
  );
};
export const CategoryList = ({ categories }) => {
  return (
    <div className="overflow-x-scroll flex space-x-4 p-4">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-16 h-16 object-cover rounded-full"
          />
          <p className="text-center mt-2">{category.name}</p>
        </div>
      ))}
    </div>
  );
};
