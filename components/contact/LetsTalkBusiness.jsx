import React from "react";

const LetsTalkBusiness = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-12 sm:py-18 lg:py-24 ">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Left side */}
          <div className="w-full">
            <h2 className="text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-[#2E90FA]">
              Let’s talk business
            </h2>
            <p className="mt-4 text-md text-gray-500">
              Ensure your query is received by the right department quickly,
              simply by filling in the form we can review and ensure you message
              is handled by the correct people. We enjoy your feedback and find
              it invaluable in improving our systems and also our procedures.
            </p>
          </div>
          {/* Right Side */}
          <div className="max-w-xl lg:max-w-lg">
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  id="Name"
                  name="name"
                  type="text"
                  placeholder="Type Your Full Name"
                  className="block min-w-0 grow py-3.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  id="Email"
                  name="email"
                  type="text"
                  placeholder="Type Your Email"
                  className="block min-w-0 grow py-3.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="mt-2">
              <textarea
                id="Message"
                name="message"
                placeholder="Your Message..."
                rows={3}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                defaultValue={""}
              />
            </div>
            <div className="mt-2">
              <button className="rounded-full bg-[#2E90FA] px-3.5 py-1.5 lg:text-base text-sm text-white shadow-sm hover:bg-[#2E90FA]/80 transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                {" "}
                Submit <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalkBusiness;
