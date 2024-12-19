"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Testimonials from "./Testimonials";
import { testimonials } from "@/constants/data";

const Slider = () => {
  const [isNavigationBtnsOn, setIsNavigationBtnsOn] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsNavigationBtnsOn(false);
      } else {
        setIsNavigationBtnsOn(true);
      }
    });

    return () => {};
  }, []);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={isNavigationBtnsOn}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index} className="py-4 sm:py-12">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img
              alt={item.companyLogoAlt}
              src={item.companyLogo}
              className="mx-auto h-12"
            />
            <figure className="mt-10">
              <blockquote className="text-center text-md font-semibold text-gray-700 sm:text-2xl/9">
                <p>{item.quote}</p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  alt={item.alt}
                  src={item.image}
                  className="mx-auto size-10 rounded-full"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <p className="font-semibold text-gray-700">{item.name}</p>
                  <span className="text-gray-500">•</span>
                  <p className="text-gray-600">{item.designation}</p>
                </div>
                <p className="text-center text-gray-500 text-sm font-semibold">
                  {item.experience}
                </p>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
