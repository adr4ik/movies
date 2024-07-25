"use client";

import { BASE_API } from "@/utils/constants";
import { Product } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const createProduct = async (product: Product) => {
  await fetch(BASE_API, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
};

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const route = useRouter();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = {
      title,
      description,
      price: +price,
      image,
    };

    await createProduct(product);
    route.push("/");
  };

  return (
    <div>
      <form
        onSubmit={handleClick}
        className=" bg-black text-white max-w-[500px] mx-auto mt-10 rounded-xl p-20 flex flex-col gap-3"
      >
        <h1 className=" text-3xl font-semibold text-center mb-3">Add form </h1>
        <input
          className=" outline-none p-2 rounded-lg text-black"
          type="text"
          placeholder="For title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className=" outline-none p-2 rounded-lg text-black"
          type="text"
          placeholder="For Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className=" outline-none p-2 rounded-lg text-black"
          type="number"
          placeholder="For Price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className=" outline-none p-2 rounded-lg text-black"
          type="text"
          placeholder="Url image..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          type="submit"
          className=" mt-3 p-3 bg-white text-black py-3 font-medium rounded-md"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
