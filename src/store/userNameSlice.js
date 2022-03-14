import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: "Adam",
//   status: ""
// };
export const userNameSlice = createSlice({
  name: "nameUpdater",
  initialState: {value: "Adam"},
  reducers: {
    nameChanger: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { nameChanger } = userNameSlice.actions;
export const selectCount = state => state.counter.value;

export default userNameSlice.reducer;
