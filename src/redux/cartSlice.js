import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    itemsQuantity: 0,
    totalAmount: 0,
  },

  reducers: {
    
    addToCart: (state, { payload }) => {

      if(state.cart.length > 0) {

        const existItem = state.cart.find(item => payload.course_id === item.course_id);

        if(existItem) {
          state.cart = state.cart.map(item => item === existItem ? {...existItem, quantity: existItem.quantity + 1} : item);
          state.itemsQuantity = state.itemsQuantity + 1;
          state.totalAmount = state.totalAmount + payload.price;

        } else if (!existItem) {
          state.cart.push({...payload, quantity: 1});
          state.itemsQuantity = state.itemsQuantity + 1;
          state.totalAmount = state.totalAmount + payload.price;
        }
        
      } else {
        state.cart.push({...payload, quantity: 1});
        state.itemsQuantity = state.itemsQuantity + 1;
        state.totalAmount = state.totalAmount + payload.price;
      }
    },

    deleteFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(course => course.course_id !== payload.course_id)
      state.itemsQuantity = state.itemsQuantity - payload.quantity;
      state.totalAmount = state.totalAmount - (payload.price * payload.quantity);
    },

    increaseQuantity: (state, { payload }) => {
      state.cart = state.cart.map(item => item.course_id === payload.course_id ? {...item, quantity: item.quantity + 1} : item);
      state.itemsQuantity = state.itemsQuantity + 1;
      state.totalAmount = state.totalAmount + payload.price;
    },
    decreaseQuantity: (state, { payload }) => {

      if(payload.quantity === 1) {
        state.cart = state.cart.filter(course => course.course_id !== payload.course_id);
        state.itemsQuantity = state.itemsQuantity - 1;
        state.totalAmount = state.totalAmount - payload.price;

      } else {
        state.cart = state.cart.map(item => item.course_id === payload.course_id ? {...item, quantity: item.quantity - 1} : item);
        state.itemsQuantity = state.itemsQuantity - 1;
        state.totalAmount = state.totalAmount - payload.price;
      }
    },
  },
})

// Action creators generated for each reducer function
export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const selectItemsQuantity = state => state.cart.itemsQuantity;

const rootReducer = cartSlice.reducer;

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;