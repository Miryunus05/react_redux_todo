import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get(
      'https://ecommerce-backend-fawn-eight.vercel.app/api/categories'
    );
    return response.data;
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default categorySlice.reducer;