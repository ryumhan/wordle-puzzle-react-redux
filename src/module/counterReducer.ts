/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface counterState {
  raw: number;
}

// Define the initial state using that type
const initialState = {
  raw: 0,
} as counterState;

export const counterReducer = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increament: (state: counterState) => {
      state.raw = ++state.raw;
    },
    initCounter: (state: counterState) => {
      state.raw = 0;
    },
  },
});

export const { increament, initCounter } = counterReducer.actions;

export default counterReducer.reducer;
