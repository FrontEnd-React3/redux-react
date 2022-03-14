import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./userNameSlice";

export const store = configureStore({
  reducer: {
    userNameReducer: userNameReducer
  }
});
