import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://6440f89bfadc69b8e0772202.mockapi.io/goit-contacts/api/users-tweet';

export const fetchUserProfiles = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const checkPageUrl = createAsyncThunk(
  'contacts/checkPageUrl',
  async (_, thunkAPI) => {
    try {
      return window.location.href.includes('tweets');
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
