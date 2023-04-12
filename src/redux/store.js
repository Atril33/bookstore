import { configureStore } from '@reduxjs/toolkit';
import userReducer from './books/bookSlice';
import categoriesReducer from './bookCategories/categoriesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    name: categoriesReducer,
  },
});

export default store;
