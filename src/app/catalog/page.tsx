import React from "react";
import Card from "../components/Card";

export default function Catalog() {
  return (
    <main className=" w-[100%] bg-white">
      <div className=" text-black max-w-[1176px] m-auto pt-20 flex flex-col gap-10">
        <div>
          <h2 className=" text-[48px]">Catalog</h2>
        </div>
        <div className=" flex flex-wrap gap-5 justify-center ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className=" bg-[#1E2827] max-w-[122px] max-h-[50px] flex items-center ml-[90%] ease-in hover:scale-125 duration-200 rounded-[15px]">
          <button className=" pt-[18px] pb-[18px] pr-[35px] pl-[35px] text-xs  text-white">
            BUY NOW
          </button>
        </div>
      </div>
    </main>
  );
}
