import { configureStore } from '@reduxjs/toolkit';
import userReducer from './books/bookSlice';
import categoriesReducer from './bookCategories/categoriesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
  },
});

export default store;
