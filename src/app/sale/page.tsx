import Image from "next/image";
import React from "react";

export default function Sale() {
  return (
    <main className=" w-[100%] bg-white">
      <div className=" text-black max-w-[1176px] m-auto pt-20 flex flex-col gap-16 pb-20">
        <div>
          <h2 className=" text-[40px]">Sale</h2>
        </div>
        <div className=" flex justify-between">
          <div className=" flex flex-col justify-between gap-5">
            <Image
              src="/SaleSector/68.png"
              alt="watches"
              width={146}
              height={146}
              className=" bg-black"
            />
            <Image
              src="/SaleSector/66.png"
              alt="watches"
              width={146}
              height={146}
            />
            <Image
              src="/SaleSector/65.png"
              alt="watches"
              width={146}
              height={146}
            />
            <Image
              src="/SaleSector/64.png"
              alt="watches"
              width={146}
              height={146}
            />
          </div>
          <div className=" bg-black">
            <Image
              src="/SaleSector/67.png"
              alt="watches"
              width={406}
              height={614}
            />
          </div>

          <div className=" flex flex-col max-w-[369px] justify-stretch gap-7">
            <div className=" flex flex-col justify-between gap-7">
              <h3 className=" text-[38px]">
                Greenlane Watch By Police For MenHT{" "}
              </h3>
              <p className=" text-[14px]  text-neutral-500">
                Product tag: PEWJK2227003
              </p>
              <p className=" text-[18px]">
                $700{" "}
                <span className=" text-[12px]  text-neutral-500">$1000</span>
              </p>
            </div>
            <div className=" flex flex-col justify-between gap-7">
              <hr />
              <h4 className=" text-[18px] font-normal">DESCRIPTION</h4>
              <p className=" text-[14px] text-left text-neutral-500">
                Richly detailed with an understated design - the Police Men’s
                Greenlane watch features a versatile multifunction design that
                fits effortlessly into work and play. The steel case is adorned
                with a semi-transparent black dial. The timepiece exhibits a
                contrast through a black IP bracelet with matching crown and
                pushers.
              </p>
            </div>
            <div className=" flex flex-col gap-7 text-left">
              <hr />
              <h4 className=" text-[18px]">DETAILS & FEATURESTION</h4>
              <p className=" text-[14px] text-left  text-neutral-500">
                Gender: man Size: 46x54.5mm Case Colour: Steel Band Material:
                Metal Case Material: Metal Features: Multifunction Water
                Resistant: 5 (ATM) Band Colour: Steel
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
