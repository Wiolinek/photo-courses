import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import cartReducer from './cartSlice.js';
import coursesReducer from './coursesSlice.js';
// import filtersReducer from './filtersSlice.js';


export const store =  configureStore({
  reducer: {
    cart: cartReducer,
    courses: coursesReducer,
    // filtered: filtersReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"],
    },
  }),
})


export const persistedStore = persistStore(store)