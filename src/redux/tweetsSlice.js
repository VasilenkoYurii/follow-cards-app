import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfiles } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const initialState = {
  usersProfiles: [],
  isLoading: false,
  alternative: false,
};

const usersProfilesSlice = createSlice({
  name: 'usersProfiles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserProfiles.pending, state => {
        handlePending(state);
      })
      .addCase(fetchUserProfiles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.usersProfiles = payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, { payload }) => {
        handleRejected(state);
      });
  },
});

export const usersProfilesReducer = usersProfilesSlice.reducer;
