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
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cartItem);
  return (
    <div>
      {cartItem.map((item) => (
        <div className="cart">
          <div className="colum-1">
            <div className="img-cart">
              <img src={item.image} alt={item.name} />
              <h4> Product:{item.name}</h4>
            </div>
            <div>
              <h4>Price:${item.price}</h4>
              <p>Discount: {item.discount_rate}%</p>
              <p>Description: {item.description}</p>
              <button onClick={() => dispatch(deletCart(item.id))}>
                remove
              </button>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                dispatch(increament(item.id));
                dispatch(getTotal(item.id));
              }}
            >
              +
            </button>
            <p>Quantity: {item.quantity}</p>
            <p>Total: {item.Total}</p>

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
      ))}
    </div>
  );
};
