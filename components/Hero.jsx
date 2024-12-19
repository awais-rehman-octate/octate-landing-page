import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto w-[90%] py-4 mt-16 sm:py-12 ">
      <div className="relative isolate overflow-hidden pt-16 sm:rounded-xl md:pt-24 lg:pt-0 h-[680px]">
        <div className="absolute inset-0 bg-gradient-to-r z-10 from-white via-white/80 to-transparent"></div>
        {/* text */}
        <div className=" relative w-full md:w-2/3 xl:w-1/2  z-20 lg:mx-0 lg:flex-auto lg:py-24 px-4 lg:px-0 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2E90FA] ">
            Revolutionize Your Business with Powerful ERP Solutions
          </h2>
          <p className="mt-6 text-pretty text-base text-gray-500">
            Empower your team with our intuitive and user-friendly cloud based
            ERP application. Streamline your business operations, boost
            productivity, and achieve unprecedented growth. Our cutting-edge
            technology and comprehensive suite of tools will revolutionize the
            way you work, delivering unparalleled results and a seamless user
            experience.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="https://staging.octate.ooo/"
              className="rounded-md bg-[#2E90FA] px-3.5 py-2.5 lg:text-base text-sm font-semibold text-white shadow-sm hover:bg-[#2E90FA]/80 transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Explore Octate Features
            </a>
          </div>
        </div>
        <Image
          fill
          alt="App screenshot"
          src="/backgroundImage.png"
          sizes="70vw"
          className="max-w-none rounded-md bg-white/5 ring-1 ring-white/10 object-cover ml-[42px] object-center"
        />
      </div>
    </div>
  );
}
