import React from "react";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-4 sm:py-8 lg:px-8">
      <h2 className="text-center text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-gray-700">
        What Our Clients Say About Us
      </h2>
      <Slider />
    </section>
  );
};

export default Testimonials;
