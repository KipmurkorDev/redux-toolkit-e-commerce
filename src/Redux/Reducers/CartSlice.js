import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItem: [],
  Totalquantity: 0,
  TotalAmount: 0,
};
export const getCart = createAsyncThunk("carts", async () => {
  let cartItem = [];
  await axios
    .get("https://e-commerce-b5db9-default-rtdb.firebaseio.com/carts.json")
    .then((data) => {
      console.log(data);
      for (let key in data.data) {
        cartItem.push({
          id: key,
          name: data.data[key].name,
          price: data.data[key].price,
          id_product: data.data[key].id_product,
          quantity: data.data[key].quantity,
          amount: data.data[key].amount,
          image: data.data[key].image,

          discount_rate: data.data[key].discount_rate,
          description: data.data[key].description,
        });
      }
    });
  return cartItem;
});

export const addCart = createAsyncThunk(
  "postCart",
  async (data) => {
    let newData = { ...data, quantity: 1, amount: data.price };
    const response = await axios
      .post(
        "https://e-commerce-b5db9-default-rtdb.firebaseio.com/carts.json",
        newData
      )
      .then((data) => data.json());
    return response;
  },
  getCart()
);
export const updatCart = createAsyncThunk(
  "updatecart",
  async (data) => {
    console.log(data.id);
    const response = await axios
      .put(
        `https://e-commerce-b5db9-default-rtdb.firebaseio.com/carts/${data.id}.json`,
        data
      )
      .then((data) => data.json());
    return response;
  },
  getCart()
);
export const deletCart = createAsyncThunk(
  "deletCart",
  async (data) => {
    console.log(data.id);
    const response = await axios
      .delete(
        `https://e-commerce-b5db9-default-rtdb.firebaseio.com/carts/${data.id}.json`,
        data
      )
      .then((data) => data.json());
    return response;
  },
  getCart()
);
export const clear = createAsyncThunk(
  "deletCart",
  async (data) => {
    const response = await axios
      .delete(
        `https://e-commerce-b5db9-default-rtdb.firebaseio.com/carts.json`,
        data
      )
      .then((data) => data.json());
    return response;
  },
  getCart()
);

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.pending]: (state) => {
      state.loading = true;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.cartItem = payload;
      console.log(state.cartItem);
    },
    [getCart.rejected]: (state) => {
      state.loading = false;
    },
    [addCart.fulfilled]: (state, action) => {
      state.cartItem.push(action.payload);
    },
  },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
