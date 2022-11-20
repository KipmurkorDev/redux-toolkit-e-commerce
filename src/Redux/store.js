import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducers/ProductSlice'
import cartReducer from'./Reducers/CartSlice'





const store = configureStore({
      reducer:{
        products:productReducer,
        cart:cartReducer
    }
})

export default store;