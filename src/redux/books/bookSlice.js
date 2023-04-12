import { createSlice } from '@reduxjs/toolkit';
import data from '../../components/Todo/TodoData';

const initialState = {
  bookData: data,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookData.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookData = state.bookData.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = userSlice.actions;
export default userSlice.reducer;
