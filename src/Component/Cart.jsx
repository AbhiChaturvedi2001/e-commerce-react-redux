import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQty, increaseQty } from "../utils/cartSlice";

const Cart = () => {
  // fetching the store using dipatch and useSelector
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const itemsQty = useSelector((store) => store.cart.quantity);
  const cartAmount = useSelector((store) => store.cart.cartAmount);

  // handle increase the quantity of the product
  const handleIncQty = () => {
    dispatch(increaseQty());
  };
  // handle decrease the quantity of the product
  const handleDecQty = () => {
    dispatch(decreaseQty());
  };

  // handle to clear the whole cart
  const handleCartItems = () => {
    dispatch(clearCart());
  };

  return items.length === 0 ? (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-center -translate-y-1/2">
      <img
        src="https://media0.giphy.com/media/kG3EDN0eXqq4V1Pd6W/giphy.gif?cid=ecf05e47qljw0lweff0xi80phdpz7v3zpijwyy04gusboy25&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt=""
      />
      <h3 className="mt-4">Opps ! there is no items</h3>
    </div>
  ) : (
    <>
      <div className="w-[10%] text-center mx-auto">
        <h1 className="font-bold text-xl">Cart Items- ({items.length})</h1>
        <button
          onClick={handleCartItems}
          className="px-2 py-2 bg-black mt-2  text-white capitalize cursor-pointer"
        >
          clear cart
        </button>
        <div>
          <h1>
            Amount: <span>{cartAmount}</span>
          </h1>
        </div>
      </div>
      <div>
        {items.map((item) => {
          const { image, title, id, price } = item;
          return (
            <>
              <div
                key={id}
                className="flex justify-center space-x-5 items-center h-[40vh]"
              >
                <img className="w-[100px]" src={image} alt="" />
                <div>
                  <h1>{title}</h1>
                  <h2>{price}</h2>
                  <div className="flex space-x-4 ">
                    <button onClick={handleDecQty}>-</button>
                    <p>{itemsQty}</p>
                    <button onClick={handleIncQty}>+</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
