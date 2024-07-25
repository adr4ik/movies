import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" bg-black">
      <div className=" bg-black text-white max-w-[1176px] m-auto pt-11 pb-30">
        <div className=" flex justify-between items-center ">
          <div className=" flex items-center justify-between gap-36">
            <div>
              {" "}
              <Link href="/" className=" flex items-center">
                <Image
                  src="/homepageLogo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <p>thewatchspot</p>
              </Link>
            </div>

            <nav className=" flex gap-10 text-xs cursor-pointer">
              <Link href="#about-us">ABOUT US</Link>
              <Link href="#catalog">CATALOG</Link>
              <Link href="#sale">SALE</Link>
              <Link href="/add-product">ADD PRODUCT</Link>
            </nav>
          </div>

          <div className=" bg-[#1E2827]">
            <button className=" pt-5 pb-5 pr-9 pl-9 text-xs ease-in hover:scale-125 duration-200">
              +380 (68) 443-94-26
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
