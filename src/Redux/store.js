import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducers/ProductSlice'
import cartReducer from'./Reducers/CartSlice'





const store = configureStore({
      reducer:{
        products:productReducer,
        carts:cartReducer
    }
})

export default store;