import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfiles, checkAlternativeChose } from './operations';

const initialState = {
  usersProfiles: [],
  alternativeChose: false,
};

const usersProfilesSlice = createSlice({
  name: 'usersProfiles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserProfiles.fulfilled, (state, { payload }) => {
        state.usersProfiles = payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, { payload }) => {})
      .addCase(checkAlternativeChose.fulfilled, (state, { payload }) => {
        state.alternativeChose = payload;
      })
      .addCase(checkAlternativeChose.rejected, (state, { payload }) => {});
  },
});

export const usersProfilesReducer = usersProfilesSlice.reducer;
