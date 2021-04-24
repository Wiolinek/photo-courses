import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, { payload }) => {

      if(state.cart.length > 0) {

        const existItem = state.cart.find(item => payload.id === item.id);

        if(existItem) {
          state.cart = state.cart.map(item => item === existItem ? {...existItem, quantity: existItem.quantity + 1} : item)

        } else if (!existItem) {
          state.cart.push({...payload, quantity: 1})
        }
        
      } else {
        state.cart.push({...payload, quantity: 1})
      }
    },

    deleteFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(course => course.id !== payload.id)
    },

    increaseQuantity: (state, { payload }) => {
      state.cart = state.cart.map(item => item.id === payload.id ? {...item, quantity: item.quantity + 1} : item)
    },
    decreaseQuantity: (state, { payload }) => {

      if(payload.quantity === 1) {
        state.cart = state.cart.filter(course => course.id !== payload.id)

      } else {
        state.cart = state.cart.map(item => item.id === payload.id ? {...item, quantity: item.quantity - 1} : item)
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

const rootReducer = cartSlice.reducer;

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;