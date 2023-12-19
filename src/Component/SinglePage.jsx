import React, { useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SinglePage = (props) => {
  const dispatch = useDispatch();
  const { singleProductData } = props;
  const { id, title, price, description, image } = singleProductData;
  const { rate } = singleProductData?.rating;
  const handleToggle = () => {
    dispatch(addItems(singleProductData));
  };

 // when the every items push the array it should re-render the pages

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center space-x-10 absolute top-[30%] ">
        <img className="w-[300px]" src={image} alt="" />
        <div className="w-[30%] mx-auto">
          <h1>{title}</h1>
          <h2 className="mt-3">
            INR : {price} -{" "}
            <span className="flex items-center space-x-5">
              <FaRegStar />
              {rate}{" "}
            </span>
          </h2>
          <p className="mt-3">{description}</p>
          <button
            onClick={handleToggle}
            className="px-2 mt-3 bg-red-700 w-full text-white  py-2 cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
