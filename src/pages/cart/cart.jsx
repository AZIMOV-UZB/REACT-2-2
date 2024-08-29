import Empty from "../../components/empty/empty";
import NewCart from "../../components/newcart/new-cart";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.length ? (
        <NewCart data={cart} />
      ) : (
        <Empty
          url="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          title="Savatcha bo'sh"
        />
      )}
    </div>
  );
};

export default Cart;
