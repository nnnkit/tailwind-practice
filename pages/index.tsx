import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="p-8 p-12">
          <img
            className="h-10"
            src="https://raw.githubusercontent.com/tailwindcss/designing-with-tailwindcss/master/01-getting-up-and-running/02-the-utility-first-workflow/public/img/logo.svg"
            alt=""
          />
          <img
            className="mt-6 rounded-lg shadow-xl"
            src="https://raw.githubusercontent.com/tailwindcss/designing-with-tailwindcss/master/01-getting-up-and-running/02-the-utility-first-workflow/public/img/beach-work.jpg"
            alt=""
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
            You can work from anywhere.{" "}
            <span className="text-indigo-500 font-extrabold">
              Take advantage of it.
            </span>
          </h1>
          <p className="mt-2 text-gray-600">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div>
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white px-5 py-3  text-sm rounded-lg mt-4 shadow-lg uppercase tracking-wider font-semibold"
            >
              Book your escape
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
