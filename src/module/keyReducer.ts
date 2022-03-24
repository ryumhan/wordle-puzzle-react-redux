/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface keyState {
  value: string;
  list: Array<string>;
}

// Define the initial state using that type
const initialState = {
  value: "",
  list: [],
} as keyState;

export const keyReducer = createSlice({
  name: "key",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addKey: (state: keyState, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.list.push(action.payload);
    },
    deleteKey: (state: keyState) => {
      state.list.pop();
    },
  },
});

export const { addKey, deleteKey } = keyReducer.actions;

export default keyReducer.reducer;
