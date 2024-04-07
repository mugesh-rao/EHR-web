import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AiTwotoneEye, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

import { Dialog, Transition } from "@headlessui/react";

export default function QuickView({ product, closeModal }) {
  const [isModalOpen, setIsModalOpen] = useState(true); // Changed to true for demonstration

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Transition
      appear
      show={isModalOpen}
      as="div"
      className="fixed inset-0 z-50 "
      onClose={closeModal}
    >
      <Dialog
        as="div"
        className="min-h-screen px-4 text-center"
        onClose={closeModal}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        </Transition.Child>

        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="inline-block w-full max-w-xl  p-6 mt-8 mb-24  text-left align-middle transition-all transform bg-white shadow-xl rounded-lg ">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
              onClick={closeModal}
            >
              X
            </button>
            <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-col items-stretch justify-center lg:space-x-8">
              <CarouselProvider
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={3}
                isPlaying={true}
                interval={4000}
                infinite={true}
                className="flex flex-row"
              >
                <div className="flex items-center">
                  <ButtonBack
                    aria-label="slide back"
                    className="mr-2 cursor-pointer"
                    role="button"
                  >
                    <MdOutlineNavigateNext className="w-8 h-8 lg:w-12 lg:h-12 rotate-180 bg-slate-100 rounded-full " />
                  </ButtonBack>
                </div>
                <div className="slider">
                  <div className="lg:relative ">
                    <Slider>
                      {Array.from({ length: 3 }).map((_, index) => (
                        <Slide key={index} index={index}>
                          <div className="flex">
                            <img
                              src={product.Img}
                              alt={product.ProductName}
                              className="w-full h-full rounded-2xl"
                            />
                          </div>
                        </Slide>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="flex items-center">
                  <ButtonNext
                    role="button"
                    aria-label="next slide"
                    className="cursor-pointer ml-2"
                  >
                    <MdOutlineNavigateNext className="w-8 h-8 lg:w-12 lg:h-12 bg-slate-100 rounded-full " />
                  </ButtonNext>
                </div>
              </CarouselProvider>
              <div className="flex flex-col justify-center items-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                  {product.ProductName}
                </h1>
                <p className="text-base leading-normal text-gray-600 mt-2">
                  {product.Categories}
                </p>
                <p className="text-3xl font-medium text-gray-600 mt-8 md:mt-10">
                  {product.Price}
                </p>
                <div className="flex justify-evenly items-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 mt-8 md:mt-16">
                  <Link
                    to="/BuyNow"
                    className="rounded-lg w-full px-auto  py-3 border border-slate-800 text-base font-medium  text-white uppercase  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-slate-800 "
                  >
                    <div className="mx-16">Add to Cart</div>
                  </Link>
                  <button className="rounded-lg px-4 py-2  flex items-center justify-center  border border-slate-800 text-base font-medium leading-none text-gray-800 uppercase bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800 hover:bg-slate-800 hover:text-white">
                    <AiTwotoneEye className="mx-4 w-8 h-8 text-slate-800 hover:text-white" />
                  </button>
                  <button className="rounded-lg px-4 py-2  flex items-center justify-center border border-slate-800 text-base font-medium leading-none text-gray-800 uppercase bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800 hover:bg-slate-800 ">
                    <AiOutlineHeart className="mx-4 w-8 h-8 text-slate-800 hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
