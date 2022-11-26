import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
export default function Navbar() {
  let {Totalquantity, cartItem} = useSelector((state) => state.carts);
  Totalquantity=cartItem.reduce((sum, item)=>sum + item.quantity, 0)
  return (
    <div className="header">
      <Link to="/addproduct">
        <button>AddProduct</button>
      </Link>
      <Link to="/contacts">
        <button>Contacts</button>
      </Link>
      <Link to="/Products">
        <button>Products</button>
      </Link>
      <Link to="/cart">
        <button>Cart <sup>{Totalquantity}</sup></button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}
