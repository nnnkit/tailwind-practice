import React from "react";

const Hero = () => {
  return (
    <div className="flex bg-gray-100">
      <div className="p-8 mx-w-xl sm:max-w-4xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <img
            className="h-10"
            src="https://raw.githubusercontent.com/tailwindcss/designing-with-tailwindcss/master/01-getting-up-and-running/02-the-utility-first-workflow/public/img/logo.svg"
            alt=""
          />

          <img
            className="mt-6 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover sm:object-center sm:mt-8 lg:hidden"
            src="https://raw.githubusercontent.com/tailwindcss/designing-with-tailwindcss/master/01-getting-up-and-running/02-the-utility-first-workflow/public/img/beach-work.jpg"
            alt=""
          />

          <h1 className="mt-6 text-3xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
            You can work from anywhere. <br className="hidden lg:inline" />
            <span className="text-indigo-500 font-bold">
              Take advantage of it.
            </span>
          </h1>
          <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div>
            <a href="#" className="btn btn-indigo md:text-base shadow-lg">
              Book your escape
            </a>
            <a href="#" className="ml-2 btn btn-gray md:text-base">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img
          className="absolute w-full h-full object-center object-cover"
          src="https://raw.githubusercontent.com/tailwindcss/designing-with-tailwindcss/master/01-getting-up-and-running/02-the-utility-first-workflow/public/img/beach-work.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
