import { createSlice } from '@reduxjs/toolkit';

const myCata = 'Categories';
const initialState = {
  bookName: myCata,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusCheck: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
