import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const getproducts = createAsyncThunk("Products", async () => {
  let products = [];
  await axios
    .get("https://e-commerce-b5db9-default-rtdb.firebaseio.com/Products.json")
    .then((data) => {
      for (let key in data.data) {
        products.push({
          id: key,
          name: data.data[key].name,
          price: data.data[key].price,
          image: data.data[key].image,
          discount_rate: data.data[key].discount_rate,
          description: data.data[key].description,
        });
      }
    });
  return products;
});
export const addproducts = createAsyncThunk(
  "postProducts",
  async (data) => {
    const response = await axios
      .post(
        "https://e-commerce-b5db9-default-rtdb.firebaseio.com/Products.json",
        data
      )
      .then((data) => data.json());
    return response;
  },
  getproducts()
);
export const deleProduct = createAsyncThunk(
  "postProducts",
  async (id) => {
    const response = await axios
      .delete(`https://e-commerce-b5db9-default-rtdb.firebaseio.com/Products/${id}.json`)
      .then((data) => data.json());
    return response;
  },
  getproducts()
);
export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getproducts.pending]: (state) => {
      state.loading = true;
    },
    [getproducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
      console.log(state);
    },
    [getproducts.rejected]: (state) => {
      state.loading = false;
    },
    [addproducts.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});
const productReducer = productsSlice.reducer;
export default productReducer;
