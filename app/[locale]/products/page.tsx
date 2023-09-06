import ProductContainer from "@/containers/ProductContainer";
import { getData } from "@/service/getData";
import React from "react";

async function Products() {
  const { category } = await getData("category");

  return <ProductContainer category={category} />;
}

export default Products;
