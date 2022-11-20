import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Cart.css";
import {
  increament,
  decrement,
  deletCart,
  getTotal,
} from "../Redux/Reducers/CartSlice";

export const CartProduct = () => {
  const { cartItem, TotalAmount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
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
                  <button onClick={() => dispatch(deletCart(item.id))}>
                    remove
                  </button>
                </div>
              </div>

              <div className="data-1">
                <button
                  onClick={() => {
                    dispatch(increament(item.id));
                    dispatch(getTotal(item.id));
                  }}
                >
                  +
                </button>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {item.Amount}</p>

                <button
                  onClick={() => {
                    if (item.quantity === 1) {
                      dispatch(deletCart(item.id));
                    } else {
                      dispatch(decrement(item.id));
                      dispatch(getTotal(item.id));
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="total"> Total Amount:{TotalAmount}</div>
    </div>
  );
};
