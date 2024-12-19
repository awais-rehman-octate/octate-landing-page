import Image from "next/image";
import React from "react";

const LetsWorkTogether = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-16">
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
          className="mx-2 text-white text-xl sm:text-4xl lg:text-5xl font-bold text-center sm:w-[85%] lg:w-[75%]  "
        >
          Streamline Your Operations, Gain Real-Time Insights and Fuel Your
          Business Growth today!
        </h2>
        <div className="mt-8 sm:mt-12 lg:mt-16 flex items-center justify-center gap-x-6">
          <a
            href="https://staging.octate.ooo/"
            className="rounded-md text-[#2E90FA] px-3.5 py-2.5 text-sm font-semibold bg-white shadow-sm hover:bg-white/90 transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Explore Octate Features
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetsWorkTogether;
