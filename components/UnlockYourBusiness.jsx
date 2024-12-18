import React from "react";
import { unlockYourBusinesstData } from "@/constants/data";

const UnlockYourBusiness = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <h2 className="text-center text-4xl font-semibold text-gray-700">
          Unlock Your Business Potential with Seamless Integrated Modules
        </h2>
        <p className="mt-4 text-center sm:px-12 lg:px-36 text-lg text-gray-500">
          Our cloud based ERP software brings together core business functions
          like accounting, procurement, inventory management, and more, giving
          you full control and visibility in one unified platform.
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-baseline lg:gap-x-8 md:gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none md:grid-cols-3 lg:grid-cols-4">
          {unlockYourBusinesstData.map((item, index) => (
            <div key={index} className="flex flex-col items-center mt-2">
              <div className="p-2 w-[75px] h-[75px] mx-auto content-center mb-4 rounded-full bg-[#2E90FA]/10">
                <item.icon className="size-8 text-[#2E90FA] mx-auto" />
              </div>
              <h2 className="text-center font-semibold text-gray-500">
                {item.title}
              </h2>
              <p className="text-center text-gray-500 py-2 text-sm">
                {item.description}
              </p>
              <a
                className="text-center text-[#2E90FA] font-semibold py-2 text-sm"
                href={item.path}
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnlockYourBusiness;
