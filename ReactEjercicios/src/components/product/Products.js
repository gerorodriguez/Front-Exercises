import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  const productsMapped = products.map((product) => <Product name={product} />);
  return <div>{productsMapped}</div>;
};

export default Products;
