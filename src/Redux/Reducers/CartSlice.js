import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  Totalquantity: 0,
  TotalAmount:0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemInCart >= 0) {
        state.cartItem[itemInCart] = {
          ...action.payload,
          quantity: state.cartItem[itemInCart].quantity + 1,
          Amount: state.cartItem[itemInCart].price*(state.cartItem[itemInCart].quantity)
        };
      } else {
        let newitem = {
          ...action.payload,
          quantity: 1,
          Amount: action.payload.price,
        };
        state.cartItem.push(newitem);
      }

    },
    increament(state, { payload }) {
      const newcart = state.cartItem.findIndex((item) => item.id === payload);
      state.cartItem[newcart] = {
        ...state.cartItem[newcart],
        quantity: state.cartItem[newcart].quantity + 1,
      };
    },

    decrement(state, { payload }) {
      const newcart = state.cartItem.findIndex((item) => item.id === payload);
      state.cartItem[newcart] = {
        ...state.cartItem[newcart],
        quantity: state.cartItem[newcart].quantity - 1,
      };

    },
    deletCart: (state, { payload }) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== payload);
      state.TotalAmount = 0;

    },
    getTotal(state, { payload }) {
      const newcart = state.cartItem.findIndex((item) => item.id === payload);
      state.cartItem[newcart] = {
        ...state.cartItem[newcart],
        Amount:
          state.cartItem[newcart].quantity * state.cartItem[newcart].price,
      };
      state.Totalquantity = state.cartItem.reduce((sum, item)=>sum + item.quantity, 0)
      state.TotalAmount = state.cartItem.reduce((sum, item)=>sum + item.Amount, 0)


    },

  },
});

export const { addToCart, increament, decrement, deletCart, getTotal , getTotalQuantity} =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
