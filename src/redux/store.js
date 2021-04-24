import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import cartReducer from './cartSlice.js';



export const store =  configureStore({
  reducer: {
    cart: cartReducer,
  },
})


export const persistedStore = persistStore(store)