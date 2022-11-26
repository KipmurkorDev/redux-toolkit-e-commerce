import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, getCart, updatCart } from "../Redux/Reducers/CartSlice";
import "./Prducts.css";
import { getproducts, deleProduct } from "../Redux/Reducers/ProductSlice";
import { useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.carts.cartItem);
  console.log(cartItem);
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getproducts());
    dispatch(getCart());
  }, [dispatch, products, cartItem]);
  const handlecartitem = (data) => {
    const itemInCart = cartItem.findIndex(
      (item) => item.id_product === data.id_product
    );
    console.log(itemInCart);
    if (itemInCart < 0) {
      dispatch(addCart(data));
    } else {
      let newcart = {
        ...cartItem[itemInCart],
        quantity: cartItem[itemInCart].quantity + 1,
        amount: cartItem[itemInCart].quantity * cartItem[itemInCart].price,
      };
      console.log(cartItem[itemInCart]);
      console.log(newcart);
      dispatch(updatCart(newcart));
    }
  };

  return (
    <div className="products-grid">
      <div className="App-header"></div>
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
                  handlecartitem({
                    id_product: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    discount_rate: item.discount_rate,
                    description: item.description,
                  });
                }}
                className="add-cart"
              >
                Add Cart
              </button>
              <button
                onClick={() => {
                  dispatch(deleProduct(item.id));
                }}
                style={{ background: "red" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
