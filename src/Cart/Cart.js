import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Cart.css";
import {
  updatCart,
  deletCart,
  getCart,
  clear
} from "../Redux/Reducers/CartSlice";

export const CartProduct = () => {
  let { cartItem, TotalAmount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  console.log(cartItem);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, cartItem]);

  TotalAmount = cartItem.reduce((sum, item)=>sum + item.amount, 0)

  return (
    <div className="grid-3">
      <div className="cart">
        {cartItem.length === 0 ? (
          <p> The cart is empty add more</p>
        ) : (
          cartItem.map((item) => (
            <div className="flex-container">
              <div className="img-cart">
                <img src={item.image} alt={item.name} />
                <h4> Product:{item.name}</h4>
                <h4>Price:${item.price}</h4>
                <p>Discount: {item.discount_rate}%</p>
                <p>Description: {item.description}</p>
                <div>
                  <button onClick={() => dispatch(deletCart(item))}>
                    remove
                  </button>
                </div>
              </div>

              <div className="data-1">
                <button
                  onClick={() => {
                    let newcart = {
                      ...item,
                      quantity: item.quantity + 1,
                      amount: item.quantity * item.price,
                    };
                    dispatch(updatCart(newcart));
                  }}
                >
                  +
                </button>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {item.amount}</p>

                <button
                  onClick={() => {
                    let newcart = {
                      ...item,
                      quantity: item.quantity -1,
                      amount: item.quantity * item.price,
                    };
                    if (item.quantity === 1) {
                      dispatch(deletCart(item));
                    } else {
                      dispatch(updatCart(newcart));
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))
        )}
        <button onClick={() => dispatch(clear())} style={{ color: "red" }}>
          {" "}
          clear
        </button>
      </div>
      <div className="total"> Total Amount:{TotalAmount}</div>
    </div>
  );
};
