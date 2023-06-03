import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfiles, checkPageUrl } from './operations';

const initialState = {
  usersProfiles: [],
  alternativeUrl: false,
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
      .addCase(checkPageUrl.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.alternative = payload;
      })
      .addCase(checkPageUrl.rejected, (state, { payload }) => {});
  },
});

export const usersProfilesReducer = usersProfilesSlice.reducer;
