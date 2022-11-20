import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;

      const find = state.find((item) => item.id === id);
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                Total: item.price * item.quantity,
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },

    increament(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
    deletCart: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    getTotal(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              Total: item.price * item.quantity,
            }
          : item
      );
    },
  },
});

export const { addToCart, increament, decrement, deletCart, getTotal } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
