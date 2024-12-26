import React from "react";

const Connect = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[#2E90FA] py-12 sm:py-18 lg:py-24 ">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Left side */}
          <div className="w-full">
            <h2 className="text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-white">
              Connect with us for everything business
            </h2>
            <p className="mt-4 text-md text-white">
              Stay up-to-date with the latest news, products, and also
              promotions by following us on social media or subscribing to our
              newsletter.
            </p>
          </div>
          {/* Right Side */}
          <div className="max-w-xl lg:max-w-lg">
            <div className="mt-2">
              <div className="px-3.5 w-full flex justify-between py-3.5 border border-1-white">
                <p className="py-1.5 text-white text-sm">
                  Join our mailing list
                </p>
                <button className="py-1.5 px-2 text-sm text-white hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  {" "}
                  Submit <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
