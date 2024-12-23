import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto py-10 px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Tagline */}
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0 px-4">
            <div className="flex flex-col items-start">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Image
                    src="/octate-logo-icon.png"
                    alt="Octate Logo"
                    width={40}
                    height={40}
                  />
                  <h2 className="text-blue-500 text-2xl font-bold">
                    Octate Software
                  </h2>
                </div>
                <p className="mt-2 text-sm">
                  Infinite Possibilities. Technology beyond its limit.
                </p>
              </div>
              {/* Social Icons */}
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#2E90FA] hover:scale-125 transition-all duration-200">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="linkedin"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2E90FA] hover:scale-125 transition-all duration-200">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="facebook"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2E90FA] hover:scale-125 transition-all duration-200">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="youtube"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 00-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0082.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2E90FA] hover:scale-125 transition-all duration-200">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="instagram"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2E90FA] hover:scale-125 transition-all duration-200">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="twitter"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-4/5 grid grid-cols-2 lg:grid-cols-5 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    About Octate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Why Octate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    News & Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Features</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Accounting & Finance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Order Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Procurement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Inventory Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Warehouse Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Project & Job Costing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Project Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Business Process Re-engineering
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Help Center
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Octate Academy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Become a Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Help Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2E90FA]">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Location</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start text-gray-600">
                  {/* Address Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  Al Wasl Road, Dubai, United Arab Emirates
                </li>
                <li className="flex items-start text-gray-600">
                  {/* Email Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  info@octate.ooo
                </li>
                <li className="flex items-start text-gray-600">
                  {/* Contact Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  +971 54 000 0000
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6 flex flex-col lg:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">
            © 2024 Octate Software. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="hover:text-[#2E90FA]">
              Accessibility
            </a>
            <a href="#" className="hover:text-[#2E90FA]">
              Legal
            </a>
            <a href="#" className="hover:text-[#2E90FA]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#2E90FA]">
              Cookies
            </a>
            <a href="#" className="hover:text-[#2E90FA]">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
