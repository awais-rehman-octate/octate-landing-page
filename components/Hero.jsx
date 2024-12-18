import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-30 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Octate - A cloud based ERP application.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-[#2E90FA] ">
              Revolutionize Your Business with Powerful ERP Solutions
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Empower your team with our intuitive and user-friendly cloud based
              ERP application. Streamline your business operations, boost
              productivity, and achieve unprecedented growth. Our cutting-edge
              technology and comprehensive suite of tools will revolutionize the
              way you work, delivering unparalleled results and a seamless user
              experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://staging.octate.ooo/"
                className="rounded-md bg-[#2E90FA] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2E90FA]/80 transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explore Octate Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
