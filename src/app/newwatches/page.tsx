import Image from "next/image";
import React from "react";

export default function Section3NewWatches() {
  return (
    <main className=" w-[100%] bg-white">
      <div className=" text-black max-w-[1176px] m-auto pt-20 flex flex-col gap-16">
        <div>
          <h6 className=" text-[12px]">New watches</h6>
          <h1 className=" text-[40px] max-w-[448px] ">
            Green And Bronze—The Match Made In Heaven
          </h1>
        </div>
        <div className=" flex justify-between">
          <div>
            {" "}
            <Image
              src="/Sector3Picture1.png"
              alt="newWatches"
              width={576}
              height={422}
            />
          </div>
          <div>
            {" "}
            <Image
              src="/Sector3Picture2.png"
              alt="newWatches"
              width={576}
              height={422}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
