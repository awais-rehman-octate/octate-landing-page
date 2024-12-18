import React from "react";
import { services } from "@/constants/data";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto w-full md:w-full px-6 lg:px-8 ">
        <h2 className="text-center text-4xl font-semibold text-gray-700">
          Industries We Serve
        </h2>
        <p className="mt-4 text-center sm:px-12 lg:px-36 text-lg text-gray-500">
          Octate is designed to cater to businesses across various industries,
          offering tailored tools to streamline operations, increase efficiency,
          and fuel growth. Whether you're in manufacturing, retail, service, or
          other sectors, our platform addresses your unique challenges and helps
          you optimize key business processes. Some of the industries we serve
          include
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-baseline lg:gap-x-8 md:gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((item, index) => (
            <div key={index}>
              <Image
                src={`/${item.image}`}
                alt={item.title}
                width={400}
                height={250}
                className="w-full sm:h-[180px] lg:h-[200px] xl:h-[280px] object-cover"
              />
              <h3 className="text-center py-4 text-lg/8 font-semibold text-gray-500">
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
