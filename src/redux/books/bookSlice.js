import { createSlice } from '@reduxjs/toolkit';
import data from '../../components/Todo/TodoData';

const initialState = {
  bookData: data,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    bookAdd: (state, action) => {
      state.push(action.payload);
    },
    bookRemove: (state, action) => {
      const bookId = action.payload;
      state.bookData.filter((item) => item.id !== bookId);
    },
  },
});

export const { bookAdd, bookRemove } = userSlice.actions;
export default userSlice.reducer;
