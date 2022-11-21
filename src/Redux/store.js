import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducers/ProductSlice'
import cartReducer from'./Reducers/CartSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage
};

const reducercart = persistReducer(persistConfig, cartReducer);

const store = configureStore({
      reducer:{
        products:productReducer,
        carts:reducercart
    }

})

export default store;