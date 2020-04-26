import React from "react";

const Two = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-8 antialiased bg-gray-300">
      <div className="">
        <div
          className="relative bg-teal-800 rounded-lg overflow-hidden"
          style={{ paddingBottom: "80%" }}
        >
          <img
            className="absolute bottom-0 h-full w-full object-cover shadow-md"
            src="/img/chicago.jpg"
            alt=""
          />
        </div>
        <div className="px-4 -mt-16 relative">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex text-xs items-baseline">
              <span className="uppercase bg-red-200 rounded-lg px-2 text-red-800 font-semibold">
                new
              </span>
              <div className="ml-2 uppercase tracking-wide text-xs text-gray-600 leading-tight font-semibold">
                <span>2 beds</span> &bull;
                <span> 2 baths</span>
              </div>
            </div>
            <h4 className="font-semibold text-lg leading-tight mt-2">
              Moderen home in city center
            </h4>
            <div className="mt-2">$1900.90 / day</div>
            <div className="mt-2 text-indigo-600 flex items-center">
              {[1, 2, 3, 4, 5].map((_a, i) => (
                <svg
                  className={`h-6 w-6 fill-current ${
                    i < 4 ? "text-red-500" : "text-gray-400"
                  } `}
                >
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              ))}
              <span className="ml-2">340 ratings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
