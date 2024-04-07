import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import adImage2 from "../../asset/ads.png";
import vege1 from "../../asset/Vege1.jpg";
import vege2 from "../../asset/vege2.jpg";
import vege3 from "../../asset/vege3.jpg";

import adImage from "../../asset/wes.png";

SwiperCore.use([Navigation, Autoplay]);

export function AdsCarousel() {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSlidesPerView(2.2);
      } else if (screenWidth >= 768) {
        setSlidesPerView(2.1);
      } else {
        setSlidesPerView(1.2);
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
    <section className="p-5 w-full relative mx-auto ">
      <Swiper
        spaceBetween={2}
        navigation={{
          prevEl: ".swiper-button-prevs",
          nextEl: ".swiper-button-nexts",
        }}
        autoplay={{ delay: 4000 }}
        slidesPerView={slidesPerView}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <AdsSlide img={adImage} />
        </SwiperSlide>
        <SwiperSlide>
          <AdsSlide img={vege1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <AdsSlide img={vege2} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <AdsSlide img={vege3} />
        </SwiperSlide>
        <SwiperSlide>
          <AdsSlide img={vege2} />
        </SwiperSlide>
      </Swiper>
      <div className=" swiper-button-prevs absolute left-0 top-1/2 transform -translate-y-1/2  cursor-pointer hidden sm:block  ">
        <FaChevronLeft size={24} />
      </div>
      <div className="swiper-button-nexts absolute right-0 top-1/2 transform -translate-y-1/2  cursor-pointer hidden sm:block ">
        <FaChevronRight size={24} />
      </div>
    </section>
  );
}

const AdsSlide = ({ img }) => {
  return (
    <article className="rounded-xl p-3  ">
      <a href="/#">
        <div className="relative overflow-hidden rounded-xl">
          <img src={img} alt="Ad" className="object-contain w-full h-full" />
        </div>
      </a>
    </article>
  );
};
