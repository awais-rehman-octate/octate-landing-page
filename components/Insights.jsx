import { insightData } from "@/constants/data";
import React from "react";

const Insights = () => {
  return (
    <div className="bg-white py-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-center py-4 text-lg/8 font-semibold text-gray-700">
          Efficiency, Insight, Growth
        </h3>
        <h2 className="text-center text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-gray-700">
          Transformative Powerful ERP Solutions
        </h2>
        <p className="mt-4 text-center sm:px-12 lg:px-36 text-lg text-gray-500">
          Unlock the full potential of your business with our innovative
          cloud-powered platform. Streamline your operations, gain real-time
          insights, and drive growth with our comprehensive cloud based ERP
          software.
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-baseline lg:gap-x-8 md:gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none md:grid-cols-3 lg:grid-cols-4">
          {insightData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-2 w-[50px] h-[45px] mx-auto content-center mb-4 rounded-lg border-[1px] border-solid border-[#2E90FA]">
                <item.icon className="size-6 text-[#2E90FA] mx-auto" />
              </div>
              <h2 className="text-center font-semibold text-gray-500">
                {item.title}
              </h2>
              <p className="text-center text-gray-500 py-2 text-sm">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Insights;
