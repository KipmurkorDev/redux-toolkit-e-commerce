import React from "react";
import { useEffect } from "react";
// import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { addToCart, getTotal } from "../Redux/Reducers/CartSlice";
import "./Prducts.css";
import { getproducts, deleProduct } from "../Redux/Reducers/ProductSlice";
import { useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch, products]);

  return (
    <div className="products-grid">
      <div className="App-header">
      </div>
      <div className="products">
        {products.map((item) => (
          <div className="product-2">
            <div>
              <img className="img-1" src={item.image} alt={item.name} />
              <h4> Product:{item.name}</h4>
            </div>
            <div>
              <h4>Price:${item.price}</h4>
              <p>Discount: {item.discount_rate}%</p>
              <p>Description: {item.description}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  dispatch(getTotal(item.id))
                }}
             className="add-cart" >
                Add Cart
              </button>
              <button
                onClick={() => {
                  dispatch(deleProduct(item.id))
                }}
                style={{background: "red"}}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
