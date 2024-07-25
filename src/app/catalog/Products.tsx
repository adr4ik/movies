"use client";

import Card from "@/components/Card";
import { BASE_API } from "@/utils/constants";
import { Product } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";

const fetchData = async () => {
  const response = await fetch(BASE_API);
  const data = await response.json();
  return data;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const res = await fetchData();
    setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className=" flex flex-wrap gap-5 justify-center ">
      {products.map((item) => (
        <Card product={item} key={item.id} />
      ))}
    </div>
  );
}
