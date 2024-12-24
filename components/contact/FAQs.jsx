import { faqs } from "@/constants/data";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function FAQs() {
  return (
    <div className="bg-gray-50 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <h2 className="text-center text-lg py-2 sm:text-2xl lg:text-3xl font-semibold text-[#2E90FA]">
          Frequently Asked Questions
        </h2>
        <div className="py-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 mt-2 text-left text-sm font-medium text-gray-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
