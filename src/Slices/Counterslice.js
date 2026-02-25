import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    countNumber: 0,
  },
  reducers: {
    incr: (state) => {
      state.countNumber = state.countNumber + 1;
    },
    decr: (state) => {
      state.countNumber = state.countNumber - 1;
    },
  },
});
export const { incr, decr } = counterSlice.actions;
export default counterSlice;
