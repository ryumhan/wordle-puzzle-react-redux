/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface counterState {
  value: number;
}

// Define the initial state using that type
const initialState = {
  value: 1,
} as counterState;

export const counterReducer = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    Increament: (state: counterState) => {
      ++state.value;
    },
    initCounter: (state: counterState) => {
      state.value = 1;
    },
  },
});

export const { Increament, initCounter } = counterReducer.actions;

export default counterReducer.reducer;
