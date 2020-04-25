import React from "react";
import Head from "next/head";
import Hero from "../components/one/Hero";
import Destinations from "../components/one/Destinations";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <main className="">
        <Hero />
        <Destinations />
      </main>
    </div>
  );
}
