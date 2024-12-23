import { footerIcons } from "@/constants/data";
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
                    src="/octateLogoGray.png"
                    alt="Octate Logo"
                    width={50}
                    height={50}
                  />
                  <h2 className="text-blue-500 text-xl font-bold">
                    Octate Software
                  </h2>
                </div>
                <p className="mt-2 text-sm">
                  Infinite Possibilities. Technology beyond its limit.
                </p>
              </div>
              {/* Social Icons */}
              <div className="flex mt-4 space-x-4">
                {footerIcons.map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-400 hover:text-[#2E90FA] hover:scale-125 transition-all duration-200"
                  >
                    <Image 
                      src={`/${item.icons}`}
                      alt={item.icons}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
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
