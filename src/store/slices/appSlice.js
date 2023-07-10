import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    colorTheme: null,
    instructor: 'All',
  },
  reducers: {
    setColorTheme: (state, action) => {
      state.colorTheme = action.payload;
    },
    setInstructor: (state, action) => {
      state.instructor = action.payload;
    },
  },
});

export const { setColorTheme, setInstructor } = appSlice.actions;

export default appSlice.reducer;
