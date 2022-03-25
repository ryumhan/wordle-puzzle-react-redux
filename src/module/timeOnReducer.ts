/**
 * @author ryumhan
 * @date 2022-03-25
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface timeState {
  onTime: number;
  onReset: number;
}

// Update OnTime Sequence
const initialState = {
  onTime: 0,
  onReset: 0,
} as timeState;

export const timeOnReducer = createSlice({
  name: "timeOn",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onTime: (state: timeState) => {
      state.onTime = state.onTime + 1;
    },
    onReset: (state: timeState) => {
      state.onReset = state.onReset + 1;
    },
  },
});

export const { onTime, onReset } = timeOnReducer.actions;

export default timeOnReducer.reducer;
