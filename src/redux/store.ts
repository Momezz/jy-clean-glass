import { configureStore } from '@reduxjs/toolkit';
import uploadsSlice from './features/uploadsSlice';

const store = configureStore({
  reducer: {
    upload: uploadsSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
