import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies";
import usersReducer from "./users";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    users: usersReducer,
  },
});
