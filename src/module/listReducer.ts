/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface listState {
  list: Array<string>;
  tileList: Array<number>;
}

// Define the initial state using that type
const initialState = {
  list: [],
  tileList: [],
} as listState;

export const listReducer = createSlice({
  name: "elementlist",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addKey: (state: listState, action: PayloadAction<string>) => {
      state.list = state.list.concat(action.payload);
    },
    clearCurrentRow: (state: listState) => {
      if (state.list.length % 5 !== 0) {
        return;
      }

      state.list.splice(state.list.length - 5, 5);
    },
    deleteKey: (state: listState) => {
      state.list.pop();
    },
    initialize: (state: listState) => {
      state.list = [];
      state.tileList = [];
    },
    updateTile: (state: listState, action: PayloadAction<Array<number>>) => {
      state.tileList = state.tileList.concat(action.payload);
    },
  },
});

export const { addKey, deleteKey, updateTile, clearCurrentRow, initialize } =
  listReducer.actions;

export default listReducer.reducer;
