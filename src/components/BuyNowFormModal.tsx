"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function BuyNowFormModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-36 rounded-3xl">
            <div className=" flex justify-between gap-12">
              <div className=" flex flex-col gap-5">
                <Image
                  src="/watches/1.png"
                  alt="watches"
                  width={276}
                  height={274}
                />
                <p>name</p>
                <p>price</p>
              </div>
              <div className=" flex flex-col gap-5">
                <div>
                  <p>Tittle</p>
                  <input
                    type="text"
                    className=" outline-double p-2 rounded-lg text-black"
                    placeholder="For Title..."
                  />
                </div>
                <div>
                  <p>Image</p>
                  <input
                    type="text"
                    className=" outline-double p-2 rounded-lg text-black"
                    placeholder="For Image url..."
                  />
                </div>
                <div>
                  <p>Price</p>
                  <input
                    type="text"
                    className=" outline-double p-2 rounded-lg text-black"
                    placeholder="For Price..."
                  />
                </div>
                <div>
                  <p>Description</p>
                  <textarea
                    name=""
                    id=""
                    placeholder="For Description"
                    className=" outline-double p-2 rounded-lg text-black"
                  ></textarea>
                </div>
                <Link
                  href={pathname}
                  className="  ease-in hover:scale-105 duration-300 rounded-[25px]"
                >
                  <button
                    type="button"
                    className="pt-[18px] pb-[18px] pr-[35px] pl-[35px] text-s  text-white bg-[#1E2827]"
                  >
                    Close Modal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
