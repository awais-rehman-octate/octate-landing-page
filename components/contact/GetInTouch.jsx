import Image from "next/image";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[#2E90FA]/60 -z-10" />
        <Image
          alt=""
          src="/workImage.png"
          fill
          className="absolute inset-0 -z-20 object-cover object-right md:object-center"
          priority
        />
        <div className="mx-auto flex flex-col items-center">
          <h2
            style={{
              lineHeight: {
                base: "30px",
                sm: "40px",
                lg: "60px",
              },
            }}
            className="mx-2 text-white text-xl sm:text-4xl lg:text-6xl font-semibold text-center sm:w-[85%] lg:w-[75%]  "
          >
            Get in touch with our team of world renowned experts
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
