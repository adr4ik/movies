import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <main>
      <div className=" max-w-[276px]  ease-in hover:scale-125 duration-200">
        <Image src="/watches/2.png" alt="watches" width={276} height={274} />
        <p className=" truncate ...">
          Tube Watch S42 Date Steel With Black Case sdasdasdasdad
        </p>
        <p>$495</p>
      </div>
    </main>
  );
}
