import React, { useState, useEffect, Fragment } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineDomainAdd } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { BsCheck2All } from "react-icons/bs";
import chat from "../asset/Home/chatbot.png";
import "../App.css";
import Footer from "./Footer";
import BottomNavigator from "./BottomNavigator";
import { Menu, Listbox, Transition } from "@headlessui/react";

const languages = [
  { name: "Hindi" },
  { name: "Bengali" },
  { name: "Telugu" },
  { name: "Marathi" },
  { name: "Tamil" },
  { name: "Urdu" },
  { name: "Gujarati" },
  { name: "Kannada" },
  { name: "Odia" },
  { name: "Punjabi" },
  { name: "Malayalam" },
  { name: "Assamese" },
  { name: "Maithili" },
  { name: "Sanskrit" },
  { name: "Kashmiri" },
  { name: "Sindhi" },
];

const districts = [
  { name: "Chennai" },
  { name: "Coimbatore" },
  { name: "Madurai" },
  { name: "Tiruchirappalli" },
  { name: "Salem" },
  { name: "Tirunelveli" },
];

export default function Layouts({ children }) {
  const [show, setShow] = useState(false);

  const [profile, setProfile] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const scrollThreshold = 0.5; // 50% of the page height

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollDistance = currentScrollPos - prevScrollPos;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = currentScrollPos / pageHeight;

    setScrolled(scrollPercentage > scrollThreshold && scrollDistance > 0);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const location = useLocation();

  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/checkout":
        return "Checkout";
      case "/BuyNow":
        return "Buy Now";
      case "/category":
        return "Category";
      case "/history":
        return "History";
      case "/userAccount":
        return "Account";
      // Add other route cases here
      default:
        return "Grow Guard"; // Default text
    }
  };
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);

  return (
    <>
      <div className="absolute  w-full h-full">
        {/* desktop */}

        <div>
          <header
            className={`z-20 hidden sm:block sticky top-0 transition-all ${
              scrolled ? "-translate-y-full" : "translate-y-0"
            }`}
          >
            <div
              className={`w-full mx-auto bg-white shadow py-1 ${
                scrolled ? "sticky" : ""
              }`}
            >
              <nav className="container  px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                <div className="h-full flex items-center">
                  <div className="mr-10 flex items-center justify-center">
                   
                    <h3 className="text-xl text-gray-800 font-semibold   hidden lg:block">
                      Grow Guard
                    </h3>
                  </div>
                  <ul className="pr-12 xl:flex items-center h-full hidden">
                    <li>
                      <NavLink
                        to="/"
                        className="py-2 px-4 text-sm text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-slate-700"
                        activeClassName="text-slate-700 border-slate-700"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/category"
                        className="py-2 px-4 text-sm text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-slate-700 mx-10"
                        activeClassName="text-slate-700 border-slate-700"
                      >
                        Category
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/history"
                        className="py-2 px-4 text-sm text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-slate-700 mr-10"
                        activeClassName="text-slate-700 border-slate-700"
                      >
                        Order
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/account"
                        className="py-2 px-4 text-sm text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-slate-700"
                        activeClassName="text-slate-700 border-slate-700"
                      >
                        Account
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="h-full xl:flex items-center justify-end hidden">
                  <div className="w-full h-full flex items-center">
                    <div className="w-full pr-12 h-full flex items-center border-r">
                      <Link className="relative w-full" to="/category">
                        <div className="text-gray-500 absolute ml-3 inset-0 m-auto w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                        </div>
                        <input
                          className="border border-gray-100 focus:outline-none focus:border-slate-700 w-56 rounded text-sm text-gray-500 bg-gray-100 pl-8 py-2"
                          type="text"
                          placeholder="Search"
                        />
                      </Link>
                    </div>
                    <div className="w-full h-full flex">
                      <div className="w-32 h-full flex items-center justify-center border-r cursor-pointer text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                      </div>
                      <div
                        aria-haspopup="true"
                        className="cursor-pointer w-full flex items-center justify-end relative"
                        onClick={() => setProfile(!profile)}
                      >
                        {profile ? (
                          <ul className="p-2 w-40 border border-slate-300  bg-white absolute rounded z-40 left-0 shadow mt-[320px] ">
                            <Link
                              to="/userProfile"
                              className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-slate-700 focus:text-slate-700 focus:outline-none"
                            >
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-user"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <circle cx={12} cy={7} r={4} />
                                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span className="ml-2">My Profile</span>
                              </div>
                            </Link>
                            <Link
                              to="/mycart"
                              className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-slate-700 focus:text-slate-700 focus:outline-none flex items-center"
                            >
                              <FiShoppingCart className="w-6 h-6" />

                              <span className="ml-2">My Cart</span>
                            </Link>
                            <Link
                              to="/admin"
                              className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-slate-700 focus:text-slate-700 focus:outline-none flex items-center"
                            >
                              <MdOutlineDomainAdd className="w-6 h-6" />

                              <span className="ml-2">Become Seller</span>
                            </Link>

                            <Link
                              to="/useraccount"
                              className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-slate-700 flex items-center focus:text-slate-700 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-settings"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <circle cx={12} cy={12} r={3} />
                              </svg>
                              <span className="ml-2">My Account </span>
                            </Link>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-slate-700 focus:text-slate-700 focus:outline-none flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-help"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={9} />
                                <line x1={12} y1={17} x2={12} y2="17.01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                              </svg>
                              <span className="ml-2">Help Center</span>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                        <img
                          className="rounded-lg h-10 w-10 object-cover"
                          src="https://track2traininginstitute.files.wordpress.com/2021/07/apj.jpg?w=540"
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="visible xl:hidden flex items-center relative">
                  <ul className="p-2 w-64 border-r bg-white absolute top-0 -ml-2 rounded right-0 shadow mt-12 lg:mt-16 hidden">
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-slate-700 focus:text-slate-700 focus:outline-none">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={7} r={4} />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        <span className="ml-2">Profile</span>
                      </div>
                    </li>
                    <Link to="/">
                      <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-slate-700 focus:text-slate-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                          <span className="ml-2">Home</span>
                        </div>
                      </li>
                    </Link>
                    <Link to="/">
                      <li className="flex xl:hidden  cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-slate-700 focus:text-slate-700 focus:outline-none flex items-center relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-help"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <line x1={12} y1={17} x2={12} y2="17.01" />
                          <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                        </svg>
                        <span className="ml-2">Products</span>
                      </li>
                    </Link>
                    <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-slate-700 flex items-center focus:text-slate-700 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-settings"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      <span className="ml-2">Performance</span>
                    </li>
                  </ul>
                  <svg
                    onClick={() => setShow(!show)}
                    aria-label="Main Menu"
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                </div>
              </nav>
            </div>
          </header>
          {location.pathname === "/category" ? null : (
            <div className=" bg-gradient-to-b from-slate-700 to-slate-800  w-full">
              <div className="flex justify-between px-4 py-2  ">
                <Listbox
                  value={selectedLanguage}
                  onChange={setSelectedLanguage}
                >
                  <div className="relative ">
                    <Listbox.Button className="relative px-4 py-2 w-full cursor-default rounded-lg bg-white   pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">
                        {selectedLanguage.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <BsChevronDown
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {languages.map((language, languageIdx) => (
                          <Listbox.Option
                            key={languageIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 px-10 ${
                                active
                                  ? "bg-slate-100 text-slate-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={language}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {language.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                                    <BsCheck2All
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
                <Listbox
                  value={selectedDistrict}
                  onChange={setSelectedDistrict}
                >
                  <div className="relative ">
                    <Listbox.Button className="relative  w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">
                        {selectedDistrict.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <BsChevronDown
                          className="h-5 w-5 text-gray-800"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute w-full mt-1  max-h-60 w overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {districts.map((district, districtIdx) => (
                          <Listbox.Option
                            key={districtIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2  pl-10 pr-4 ${
                                active
                                  ? "bg-slate-100 text-slate-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={district}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {district.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                                    <BsCheck2All
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          )}

          {/* mobile statusbar */}
          <header
            className={`z-20 sticky top-0 bg-white shadow sm:hidden block`}
          >
            <div className="container mx-auto h-16 flex items-center justify-between px-6">
             
              <h3 className="lg:hidden text-xl font-semibold text-gray-800">
                {getPageName()}
              </h3>
              <Link to="/mycart" className="lg:flex items-center">
                <FaHeart className="lg:hidden text-xl text-slate-800 ml-4 transition-transform transform hover:scale-110 active:scale-95" />
              </Link>
            </div>
          </header>
          <main className="bg-gray-100 pb-[72px] sm:pb-0">{children}</main>

          <Link to="/chatbot">
            <img
              src={chat}
              className="w-[90px] h-[70px] fixed bottom-[40px] right-[30px] text-slate-600 z-100 animate-float "
              alt="chat"
            />
          </Link>

          <BottomNavigator />
          <Footer />
        </div>
      </div>
    </>
  );
}
