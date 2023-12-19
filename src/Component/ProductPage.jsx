import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import SinglePage from "./SinglePage";

const ProductPage = () => {
  const [singleProductData, setsingleProductData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await data.json();
    setsingleProductData(json);
  };
  return singleProductData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <SinglePage singleProductData={singleProductData} />
    </>
  );
};

export default ProductPage;
