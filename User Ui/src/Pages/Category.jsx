import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "../Components/Products/ProductCard";
import Layouts from "../Layout/Layouts";
import ProductCardsData from "../Components/Products/ProductData";
import { FaSearchLocation } from "react-icons/fa";
import { Listbox } from "@headlessui/react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import Loader from "../Layout/Loader";
import { Link, useParams } from "react-router-dom";
import InsuranceCard from "../Components/Home/Products";

const locations = [
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Salem",
  "Sivaganga",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

function CustomDatePicker({ onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setIsOpen(true);
  };

  const handleDateChange = (ranges) => {
    setIsOpen(false);
    onChange(ranges);
  };

  return (
    <div className="relative">
      <input
        onClick={handleInputChange}
        readOnly
        className="text-lg font-semibold  bg-transparent"
        value={`${value.startDate?.toDateString()} - ${value.endDate?.toDateString()}`}
      />
      {isOpen && (
        <div className="absolute z-10 mt-2">
          <DateRangePicker
            onChange={handleDateChange}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={[value]}
            className="bg-white border rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
}

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "color",
    name: "Seasons",
    options: [
      { value: "Kharif", label: "Kharif", checked: false },
      { value: "Rabi", label: "Rabi", checked: false },
      { value: "Zaid", label: "Zaid", checked: true },
    ],
  },
  {
    id: "category",
    name: "Distance",
    options: [
      { value: "2 Km", label: "2 Km", checked: false },
      { value: "10 Km", label: "10 Km", checked: false },
      { value: "15 Km", label: "15 Km", checked: true },
      { value: "20 Km", label: "20 Km", checked: false },
    ],
  },
  {
    id: "size",
    name: "Categories",
    options: [
      { value: "Fresh Vege", label: "Fresh Vege", checked: false },
      { value: "Fresh Fruits", label: "Fresh Fruits", checked: false },
      { value: "Exoctic ", label: "Exoctic ", checked: false },
      { value: "Herbs", label: "Herbs", checked: false },
      { value: "Pulses & Cereals", label: "Pulses & Cereals", checked: false },
      { value: "Dry Fruits", label: "Dry Fruits", checked: true },
      { value: "Dairy", label: "Dairy", checked: true },
    ],
  },
  {
    id: "Paddy",
    name: "Grade",
    options: [
      { value: "Grade 1", label: "Grade 1", checked: false },
      { value: "Grade 2", label: "Grade 2", checked: false },
      { value: "Grade 3", label: "Grade 3", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Category() {
  const [from, setFrom] = useState(locations[0]);
  const [to, setTo] = useState(locations[1]);

  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    try {
      const response = await axios.get("http://localhost:1000/Insurance");
      setUsers(response.data);
      console.log(response);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [searchText, setSearchText] = useState("");
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleDateChange = (ranges) => {
    setSelectedDateRange(ranges.selection);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = ProductCardsData.filter(
    (dealer) =>
      dealer.ProductName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.Categories.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <Layouts>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <Disclosure
                        as="div"
                        className="border border-gray-300 rounded"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                              <span className="text-sm font-medium">Price</span>

                              <span className="transition group-open:-rotate-180">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </Disclosure.Button>

                            <Disclosure.Panel className="border-t border-gray-200 bg-white">
                              <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700">
                                  The highest price is $600
                                </span>

                                <button
                                  type="button"
                                  className="text-sm text-gray-900 underline underline-offset-4"
                                >
                                  Reset
                                </button>
                              </header>

                              <div className="border-t border-gray-200 p-4">
                                <div className="flex justify-between gap-4">
                                  <label
                                    htmlFor="FilterPriceFrom"
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-sm text-gray-600">
                                      $
                                    </span>
                                    <input
                                      type="number"
                                      id="FilterPriceFrom"
                                      placeholder="From"
                                      className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                  </label>

                                  <label
                                    htmlFor="FilterPriceTo"
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-sm text-gray-600">
                                      $
                                    </span>
                                    <input
                                      type="number"
                                      id="FilterPriceTo"
                                      placeholder="To"
                                      className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                  </label>
                                </div>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5 text-slate-600"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5 text-slate-600"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className=" max-w-screen bg-[#f8f9fa]   ">
            <div className="flex items-baseline justify-between border-b border-gray-200 py-6 bg-white px-4 sm:px-6 lg:px-4">
              <h1 className="text-4xl first-letter: font-bold tracking-tight text-gray-900">
                24 Result Found
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 p-2 bg-slate-400 rounded-lg">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-100 group-hover:text-gray-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-700 hover:text-gray-500 sm:ml-7 bg-slate-300 rounded-lg"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section
              aria-labelledby="products-heading"
              className="pb-24 pt-6 px-4 sm:px-6 lg:px-4  bg-[#f8f9fa]"
            >
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-4 ">
                {/* Filters */}
                <form className="hidden lg:block bg-white px-3 py-2 rounded-lg">
                  <h3 className="sr-only">Categories</h3>

                  <Disclosure
                    as="div"
                    className="border border-gray-300 rounded"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="  rounded p-2">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500 p-2">
                            <span className="font-medium text-gray-900">
                              Price
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        <Disclosure.Panel className="border-t border-gray-200 bg-white">
                          <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700">
                              The highest price is ₹600
                            </span>

                            <button
                              type="button"
                              className="text-sm text-gray-900 underline underline-offset-4"
                            >
                              Reset
                            </button>
                          </header>

                          <div className="border-t border-gray-200 p-4">
                            <div className="flex justify-between gap-4">
                              <label
                                htmlFor="FilterPriceFrom"
                                className="flex items-center gap-2 bg-slate-200 px-1 rounded-lg"
                              >
                                <span className="text-sm text-gray-600">₹</span>
                                <input
                                  type="number"
                                  id="FilterPriceFrom"
                                  placeholder="From"
                                  className="w-full rounded-md  shadow-sm sm:text-sm bg-slate-200 p-2"
                                />
                              </label>
                              <span className="flex items-center justify-center">
                                -
                              </span>
                              <label
                                htmlFor="FilterPriceTo"
                                className="flex items-center gap-2 bg-slate-200 px-1 rounded-lg"
                              >
                                <span className="text-sm text-gray-600">₹</span>
                                <input
                                  type="number"
                                  id="FilterPriceTo"
                                  placeholder="To"
                                  className="w-full rounded-md  shadow-sm sm:text-sm bg-slate-200 p-2"
                                />
                              </label>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <div className="py-6">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="mb-6 border border-gray-300 rounded p-2 "
                      >
                        {({ open }) => (
                          <>
                            <h3 className="  rounded p-2">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-4 space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3 ">
                  <div class="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-1 md:px-10 lg:grid-cols-1 lg:gap-2">
                    <div className="gap-2">
                      {users.map((user, index) => (
                        <Link to={`/insurance/${user._id}`} key={index}>
                          <InsuranceCard
                            key={user.id}
                            insuranceProvider={user.policyName}
                            planName={user.policyType}
                            additionalPlansCount={8}
                            instantCoverDetails="Reduce waiting for high blood pressure care from 4 years to 30 days with Instant Cover rider"
                            noRoomRentLimit="No Room Rent Limit"
                            renewalBonus="₹7.5 lakh Renewal Bonus"
                            unlimitedRestoration="Unlimited Restoration of cover"
                            coverAmount={user.premium.amount} // ₹5 Lakh
                            cashlessHospitalsCount={277}
                            monthlyPremium={615} // ₹615/month
                            annualPremium={7378} // ₹7,378 annually
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layouts>
  );
}
