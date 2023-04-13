import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import data from '../../components/Todo/TodoData';

const initialState = {
  bookData: data,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const addNew = {
        item_id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.bookData.push(addNew);
    },
    removeBook: (state, action) => {
      state.bookData = state.bookData.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = userSlice.actions;
export default userSlice.reducer;
