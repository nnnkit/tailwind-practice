import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <Link href="/one">Lesson One</Link>
      <Link href="/two">Lesson Two</Link>
    </div>
  );
}
