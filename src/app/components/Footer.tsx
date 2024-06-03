import Image from "next/image";
import React from "react";

interface IFooterProps {}

export default function Footer() {
  return (
    <nav className="border-b text-center py-4 flex max-w-5xl mx-auto justify-between">
      <div className="flex gap-2 items-center justify-center">
        <Image alt="logo" width={45} height={25} src="/jeje.jpg" />{" "}
        <span>RCG</span>
      </div>
    </nav>
  );
}
