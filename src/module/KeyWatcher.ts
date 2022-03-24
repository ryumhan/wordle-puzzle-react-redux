/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface keyState {
  value: string;
}

// Define the initial state using that type
const initialState = {
  value: "",
} as keyState;

export const KeyWatcher = createSlice({
  name: "keyWatcher",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    watchKey: (state: keyState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { watchKey } = KeyWatcher.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectKey = (state: RootState) => {
  return state.KeyWatcherReducer.value;
};

export default KeyWatcher.reducer;
