import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testimonials: [
    {
      id: 1,
      author: "Jean Dupont",
      message: "Excellent travail !",
      date: "2023-10-15T10:30:00Z",
      authorEmail: "jean@example.com"
    }
  ]
};

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      state.testimonials.push({
        id: Date.now(),
        ...action.payload,
        date: new Date().toISOString()
      });
    },
    updateTestimonial: (state, action) => {
      const index = state.testimonials.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.testimonials[index] = {
          ...state.testimonials[index],
          ...action.payload,
          updatedAt: new Date().toISOString()
        };
      }
    }
  }
});

export const { addTestimonial, updateTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;