import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [
      { id: 123, title: "Pulp fiction" },
      { id: 333, title: "The piano" },
    ],
  },
  reducers: {
    addMovie: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
