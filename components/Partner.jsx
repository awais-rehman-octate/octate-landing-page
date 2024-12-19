import { partner } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 justify-center">
        <h2 className="text-center text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-gray-700">
          Our Consulting Partners
        </h2>
        <div className="grid grid-cols-1 py-8 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {partner.map((item, index) => (
            <Image
              key={index}
              alt={item.alt}
              src={`/${item.image}`}
              width={158}
              height={100}
              className="col-span-2 max-h-16  mx-auto object-contain lg:col-span-1 sm:h-[180px] lg:h-[200px]"
              priority
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
