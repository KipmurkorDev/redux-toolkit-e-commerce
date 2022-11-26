import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducers/ProductSlice'
import cartReducer from'./Reducers/CartSlice'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'





const store = configureStore({
      reducer:{
        products:productReducer,
        carts:cartReducer
    }

})

export default store;