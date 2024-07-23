import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <main className=" w-[100%] bg-[#1E2827]">
      <div className=" text-white max-w-[1176px] m-auto pt-20 flex flex-col gap-16 pb-5">
        <div className=" flex justify-between">
          <div className=" flex flex-col gap-7">
            <Image src="/homepageLogo.svg" alt="logo" width={50} height={50} />
            <p>+380 (68) 443-94-26</p>
            <p
              className="
             max-w-[181px] max-h-[72px]"
            >
              1678 S. Pioneer Road Salt Lake City UT 84104
            </p>
          </div>
          <nav className=" flex flex-col justify-evenly text-xs cursor-pointer text-[18px]">
            <Link
              href="/aboutus"
              className=" ease-in hover:scale-110 duration-200"
            >
              ABOUT US
            </Link>
            <Link
              href="/catalog"
              className=" ease-in hover:scale-125 duration-200"
            >
              CATALOG
            </Link>
            <Link
              href="/sale"
              className=" ease-in hover:scale-125 duration-200"
            >
              SALE
            </Link>
          </nav>
          <div className=" flex items-center gap-5">
            <Image
              src="/Icons/fb.png"
              alt="logo"
              width={44}
              height={44}
              className=" ease-in hover:scale-110 duration-200 cursor-pointer"
            />

            <Image
              src="/Icons/instagram.png"
              alt="logo"
              width={44}
              height={44}
              className=" ease-in hover:scale-110 duration-200 cursor-pointer"
            />
            <Image
              src="/Icons/youtube.png"
              alt="logo"
              width={44}
              height={44}
              className=" ease-in hover:scale-110 duration-200 cursor-pointer"
            />
          </div>
        </div>
        <div className=" flex justify-between">
          <p>©2022 The Watch Spot. All rights reserved.</p>
          <p className=" flex gap-5 ease-in hover:scale-110 duration-200 cursor-pointer">
            Privacy Policy{" "}
            <span className=" flex gap-5 ease-in hover:scale-110 duration-200 cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
