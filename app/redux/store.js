import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import testimonialReducer from './slices/testimonialSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonials: testimonialReducer,
  },
});