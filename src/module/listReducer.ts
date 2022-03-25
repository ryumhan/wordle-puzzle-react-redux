/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface listState {
  list: Array<string>;
  titeList: Array<number>;
}

// Define the initial state using that type
const initialState = {
  list: [],
  titeList: [],
} as listState;

export const listReducer = createSlice({
  name: "elementlist",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addKey: (state: listState, action: PayloadAction<string>) => {
      state.list = state.list.concat(action.payload);
    },
    deleteKey: (state: listState) => {
      state.list.pop();
    },
    UpdateTile: (state: listState, action: PayloadAction<Array<number>>) => {
      state.titeList = state.titeList.concat(action.payload);
    },
  },
});

export const { addKey, deleteKey, UpdateTile } = listReducer.actions;

export default listReducer.reducer;
