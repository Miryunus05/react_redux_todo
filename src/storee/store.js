import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import categoryReducer from './categorySlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    categories: categoryReducer,
    products: productReducer,
  },
});

export default store;