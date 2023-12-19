import React from "react";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({ data }) => {
  const { title, price, image, description } = data;
  const { rate } = data?.rating;
  return (
    <>
      <div className="rounded-xl w-[300px] shadow-md transition-all duration-150 delay-150 hover:shadow-xl cursor-pointer px-3 py-2 min-h-[45vh] h-auto">
        <img className="w-[50%] h-[50%] mx-auto" src={image} alt="" />
        <div className="mt-3">
          <h1>{title}</h1>
          <h3 className="mt-2">INR : {price}</h3>
          <h3 className="flex items-center">
            <FaRegStar /> . {rate}
          </h3>
          <p className="mt-2">{description.substring(0, 99)}....</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
