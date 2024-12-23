import React, { useState } from "react";
import { services } from "@/constants/data";
import Image from "next/image";

const Services = () => {
  const [expandedItems, setExpandedItems] = useState("");
  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="bg-gray-50 py-12 sm:py-16 w-full">
      <div className="w-full md:w-full px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-gray-700">
          Industries We Serve
        </h2>
        <p className="text-center sm:px-12 lg:px-36 text-lg text-gray-500">
          Octate is designed to cater to businesses across various industries,
          offering tailored tools to streamline operations, increase efficiency,
          and fuel growth. Whether you're in manufacturing, retail, service, or
          other sectors, our platform addresses your unique challenges and helps
          you optimize key business processes. Some of the industries we serve
          include
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-baseline md:gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((item, index) => (
            <div key={index} className="relative group">
              <div className="">
                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full sm:h-[180px] lg:h-[200px] xl:h-[280px] object-cover"
                />
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-opacity-0  duration-500">
                  <Image
                    src={`/${item.image}`}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover -z-10 absolute top-0 left-0"
                  />
                  <div className="absolute w-full h-full z-1 bg-[#2E90FA]/0 group-hover:bg-[#2E90FA]/80 duration-300" />
                  {/* Text on Hover */}
                  <div className="px-2">
                    <h3 className="text-left mt-4 relative z-2 py-4 lg:text-md font-semibold text-white">
                      {item.title}
                    </h3>

                    <p
                      className={`text-white relative bottom-2 z-2 ${
                        expandedItems[index] ? "" : "line-clamp-4"
                      }`}
                    >
                      {item.description}
                    </p>
                    {item.description.length > 150 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-white absolute bottom-2 left-1/2 -translate-x-1/2 z-2 hover:underline cursor-pointer"
                      >
                        {expandedItems[index] ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-center py-2 text-lg/8 font-semibold text-gray-500">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        {/* CTA Button  */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-[#2E90FA] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2E90FA]/80 transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Talk to Our Experts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
