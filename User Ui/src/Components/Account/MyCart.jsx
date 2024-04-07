import React from "react";
import Layouts from "../../Layout/Layouts";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../context/action/wishListAction";

function MyCart() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max 2019",
      // ... other product properties
    },
    {
      id: 2,
      name: "Adidas UltraBoost",
      // ... other product properties
    },
    // Add more products as needed
  ];

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <Layouts>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <h2 className="text-lg font-bold text-gray-900">
                {product.name}
              </h2>
              {/* Other product details */}
              <div className="flex space-x-2 mt-2">
                <button
                  className="flex items-center justify-center w-20 h-8 bg-slate-500 text-white text-xs font-semibold rounded-md transition duration-300 hover:bg-slate-600"
                  onClick={() => dispatch(addToWishlist(product))}
                >
                  Add
                </button>
                <button
                  className="flex items-center justify-center w-20 h-8 bg-red-500 text-white text-xs font-semibold rounded-md transition duration-300 hover:bg-red-600"
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                >
                  Remove
                </button>
              </div>
              {wishlist.items.some((item) => item.id === product.id) ? (
                <button
                  className="flex items-center justify-center w-20 h-8 bg-red-500 text-white text-xs font-semibold rounded-md mt-2 transition duration-300 hover:bg-red-600"
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                >
                  Remove from Wishlist
                </button>
              ) : (
                <button
                  className="flex items-center justify-center w-20 h-8 bg-slate-500 text-white text-xs font-semibold rounded-md mt-2 transition duration-300 hover:bg-slate-600"
                  onClick={() => dispatch(addToWishlist(product))}
                >
                  Add to Wishlist
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">My Wish List </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                alt="product"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-slate-500 hover:text-slate-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-slate-500 hover:text-slate-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">259.000 ₭</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-slate-500 py-1.5 font-medium text-slate-50 hover:bg-slate-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default MyCart;
