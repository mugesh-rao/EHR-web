import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { Link } from "react-router-dom";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export function HomeCategory() {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(6);
  const categoryCardsData = [
    {
      Name: "Urea",
      Img: "https://5.imimg.com/data5/SELLER/Default/2023/2/KH/HC/WV/107257257/whatsapp-image-2023-01-02-at-11-44-00-am-5-.jpeg",
    },
    {
      Name: "Ammonia",
      Img: "https://www.farming-machine.com/wp-content/uploads/2020/04/mini-paddy-harvester.jpg",
    },
    {
      Name: "Cotton Machine",
      Img: "https://www.farming-machine.com/wp-content/uploads/2020/04/Agricultural-Combine-Soybean-Harvester.jpg",
    },
   
    // Add more data as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSlidesPerView(6.5);
      } else if (screenWidth >= 768) {
        setSlidesPerView(4.5);
      } else {
        setSlidesPerView(2.5);
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
    <section className="p-5 w-full relative mx-auto">
      <Swiper
        spaceBetween={10}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{ delay: 6000 }}
        slidesPerView={slidesPerView}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {categoryCardsData.map((cardData, index) => (
          <SwiperSlide key={index}>
            <Category {...cardData} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2  cursor-pointer hidden sm:block  ">
        <FaChevronLeft size={24} />
      </div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2  cursor-pointer  hidden sm:block ">
        <FaChevronRight size={24} />
      </div>
    </section>
  );
}

const Category = ({ Name, Img }) => {
  return (
    <article className="rounded-xl bg-white p-1 ring-1 ring-slate-200  ">
      <Link to="/category" className="items-center justify-center flex flex-col">
        <div className="relative overflow-hidden w-28 h-24">
          <img
            src={Img}
            alt="Product"
            className="w-full h-full"
          />
        </div>
        <div className="mt-1 p-1">
          <h2 className="text-slate-700 text-center">{Name}</h2>
        </div>
      </Link>
    </article>
  );
};

