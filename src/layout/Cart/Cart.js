import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import BuyButton from "../../components/Buttons/BuyButton";
function CartPage() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div className="cart font-main">
      <Navbar />
      <h1 className="text-center text-5xl mt-8">
        <span className="text-hover-color">Cart</span> Page
      </h1>
      <div>
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-none flex flex-row gap-4 items-center w-4/5 mx-auto mt-3 pr-2 shadow-md rounded-xl"
          >
            <img
              src={item.thumb}
              alt={item.title}
              className="w-[150px] rounded-xl"
            />
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
        <div className="total w-4/5 mx-auto mt-3 flex flex-row justify-between items-center">
          <p>total items : {totalQuantity} item</p>
          <p>total price : {totalPrice}$</p>
        </div>
        <div className="w-4/5 mx-auto my-5">
          <BuyButton title="Buy It" />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
