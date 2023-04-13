import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookName: 'Categories',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusCheck: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
