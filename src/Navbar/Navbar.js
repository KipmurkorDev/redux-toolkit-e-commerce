import React from 'react'
import { Link } from "react-router-dom";

import './Navbar.css'
export default function Navbar() {
  return (
<div className='header'>
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
<button>Cart</button>
</Link>
<Link to="/">
<button>Logout</button>
</Link>
</div>
  )
}
