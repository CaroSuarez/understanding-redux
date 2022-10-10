import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (obj, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${obj?.id || ""}`
      );

      if (!response.ok) {
        const error = response.status;
        throw error;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Dentro del catch");
      return rejectWithValue("Ups, something wrong!");
    }
  }
);

// fetchUsers is a thunk, it returns one of three possible status from the asyng function inside:
// pending, fullfil, rejected.
// The thunkAPI allows me to access to the store of redux, so I can call my current status, or dispatch
// some action...etc inside the async function.

const usersSlice = createSlice({
  name: "users",
  initialState: {
    type: "Guest",
    loading: false,
    list: [],
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload || "Guest";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload.length
          ? [...action.payload]
          : [action.payload];
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        console.log("Dentro del case rejected");
      });
  },
});

export const { setType, getUsers } = usersSlice.actions;
export default usersSlice.reducer;
