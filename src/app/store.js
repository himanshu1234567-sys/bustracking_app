import { configureStore } from '@reduxjs/toolkit';
import busReducer from '../features/busSlice';

export const store = configureStore({
  reducer: {
    bus: busReducer,
  },
});
