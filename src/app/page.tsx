import Image from "next/image";
import React from "react";

import Link from "next/link";
import "./style.css";
import Aboutus from "./aboutus/page";
import Catalog from "./catalog/page";
import Section3NewWatches from "./newwatches/page";
import Sale from "./sale/page";
import Footer from "./footer/page";

export default function homepage() {
  return (
    <main className=" w-[100%] bg-black ">
      <div className=" bg-black text-white max-w-[1176px] m-auto pt-11 pb-30">
        <div className=" flex justify-between items-center mt-20">
          <h1 className=" text-6xl w-[750px] font-normal">
            Welcome to our collection of premium watches
          </h1>
          <p className=" text-sm w-[282px] h-[90px] font-normal">
            Our watches are not just timepieces, but also an expression of your
            personality and lifestyle. From classic designs to modern ones, we
            have a watch to suit every taste and occasion.
          </p>
        </div>
        <div className=" flex justify-between items-center mt-20 pb-20">
          <div className=" bg-[#1E2827] max-w-[436px] max-h-[255px]">
            <Image src="/watches/1.png" alt="1" width={348} height={233} />
          </div>
          <div>
            <Image
              src="/HomepagePicture.png"
              alt="homepagepicture"
              width={676}
              height={394}
            />
          </div>
        </div>
      </div>
      <Aboutus />
      <Catalog />
      <Section3NewWatches />
      <Sale />
      <Footer />
    </main>
  );
}
