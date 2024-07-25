import React, { useState } from "react";
import Products from "./Products";
import Link from "next/link";

export default function Catalog() {
  return (
    <main className=" w-[100%] bg-white">
      <div className=" text-black max-w-[1176px] m-auto pt-20 flex flex-col gap-10">
        <div>
          <h2 className=" text-[48px]" id="catalog">
            Catalog
          </h2>
        </div>

        <Products />

        <div className=" bg-[#1E2827] max-w-[122px] max-h-[50px] flex items-center ml-[90%] ease-in hover:scale-105 duration-300 rounded-[15px]">
          <Link href="?modal=false">
            <button className=" pt-[18px] pb-[18px] pr-[35px] pl-[35px] text-xs  text-white">
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
