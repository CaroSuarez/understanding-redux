import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    type: "Guest",
    user: [],
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload || "Guest";
    },
  },
});

export const { setType } = usersSlice.actions;
export default usersSlice.reducer;
