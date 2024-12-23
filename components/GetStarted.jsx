import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const GetStarted = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-12 sm:py-18 lg:py-24 ">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Left side */}
          <div className="w-full">
            <p className="px-2 py-1 my-2 inline-block border bg-gray-50 rounded-lg sm:text-md lg:text-lg font-semibold text-gray-700">
              Revolutionize Your Enterprise Effieciency
            </p>
            <h2 className="text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-gray-700">
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
            </div>
          </div>
          {/* Right Side */}
          <div className="max-w-xl lg:max-w-lg">
            <video className="w-full  h-[100%] ml-auto rounded-lg" controls>
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
