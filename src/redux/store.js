import { configureStore } from '@reduxjs/toolkit';
import { usersProfilesReducer } from './tweetsSlice';

export const store = configureStore({
  reducer: {
    usersProfiles: usersProfilesReducer,
  },
});
