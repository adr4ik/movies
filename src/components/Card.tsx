import { Product } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";

export default function Card({ product }: { product: Product }) {
  return (
    <main>
      <div className=" max-w-[276px]  ease-in active:outline-dotted rounded-3xl hover:scale-110 duration-200 cursor-pointer">
        <Image src="/watches/2.png" alt="watches" width={276} height={274} />
        <p className=" truncate ...">
          Tube Watch S42 Date Steel With Black Case sdasdasdasdad
        </p>
        <p>$495</p>
      </div>
    </main>
  );
}
