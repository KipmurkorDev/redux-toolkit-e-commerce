import './App.css';
import { Route, Routes } from "react-router-dom";
import AddProduct from './AddProduct/AddProduct'
import Products from './Products/Products'
import Login from './Login/Login';
import Contact from './Navbar/Contact';
import {CartProduct} from './Cart/Cart'
import Navbar from './Navbar/Navbar'
function App() {

  return (
    <div className="App">
      <>
      <Navbar />

      <Routes>
          <Route index element={<Login/>} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/cart" element={<CartProduct />} />

          <Route exact path="/addproduct" element={<AddProduct />} />

          <Route exact path="/contacts" element={<Contact />} />

        </Routes>
      </>       
    </div>
  );

  }

export default App;
