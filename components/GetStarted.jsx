import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const GetStarted = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-12 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Left side */}
          <div className="w-full">
          <h2 className="text-center text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-gray-700">
              Discover a Modern and Flexible ERP Solution
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our ERP application offers low-cost, fast, and modern solutions
              that rival the best in the market. Seamlessly integrated modules
              and cutting-edge features ensure your business operates at peak
              efficiency.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <button
                type="submit"
                className="flex-none rounded-md bg-[#2E90FA] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2E90FA]/90 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get Started Today
              </button>
              <button
                type="submit"
                className="flex-none rounded-md bg-white border-1px px-3.5 py-2.5 text-sm font-semibold text-gray-500 shadow-sm hover:bg-gray-100  hover:text-[#2E90FA] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 inline-flex mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
                Get Started Today
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="max-w-xl lg:max-w-lg">
            <video className="w-full rounded-lg" controls>
              <source src="getStartedVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
