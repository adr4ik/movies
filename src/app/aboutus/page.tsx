import Image from "next/image";
import React from "react";

export default function Aboutus() {
  return (
    <main className=" w-[100%] bg-white">
      <div className=" text-black max-w-[1176px] m-auto pt-20 flex justify-between">
        <div>
          <h2 className=" text-5xl" id="about-us">
            About us
          </h2>
        </div>
        <div className=" flex flex-col gap-24">
          <div className=" flex justify-between text-[14px]">
            <p className=" max-w-[439px] max-h-[90px]">
              Welcome to our premium watch collection, where luxury and style
              meet functionality and precision. Our selection of timepieces
              embodies the very best in Swiss craftsmanship and engineering,
              ensuring that you'll always have a reliable and stylish accessory
              on your wrist.
            </p>
            <p className=" max-w-[380px] max-h-[90px]">
              At our premium watch collection, we believe that a watch is more
              than just a timekeeping device – it's a statement piece that
              reflects your personality and style. So why settle for anything
              less than the best? Browse our collection today and discover the
              perfect watch for you.
            </p>
          </div>
          <div>
            <Image
              src="/aboutUspicture.png"
              alt="aboutUs"
              width={892}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
