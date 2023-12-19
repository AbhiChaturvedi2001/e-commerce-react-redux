import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const AllProduct = () => {
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

  return (
    <>
      <div className=" mt-5 grid grid-cols-4 gap-y-10 gap-x-10  justify-items-center max-xl:flex max-xl:flex-wrap max-xl:justify-center ">
        {FilterData.map((items) => {
          return (
            <>
              <ProductCard data={items} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllProduct;
