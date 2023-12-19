import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [productsData, setproductsData] = useState([]);
  const [FilterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setproductsData(json);
    setFilterData(json);
  };

  return productsData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div>
          <h1 className="font-bold text-2xl text-center  mt-3">
            All products{" "}
          </h1>
          <div>
            <button></button>
          </div>
        </div>
        <div className=" mt-5 grid grid-cols-4 gap-y-10 gap-x-10  justify-items-center max-xl:flex max-xl:flex-wrap max-xl:justify-center ">
          {productsData.map((dataItems) => {
            return (
              <Link to={`/product/${dataItems?.id}`}>
                <ProductCard key={dataItems?.id} data={dataItems} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
