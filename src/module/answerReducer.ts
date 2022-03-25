/**
 * @author ryumhan
 * @date 2022-03-25
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface answerState {
  value: string;
}

// Define the initial state using that type
const initialState = {
  value: "",
} as answerState;

export const answerReducer = createSlice({
  name: "answer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateAnswer: (state: answerState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateAnswer } = answerReducer.actions;

export default answerReducer.reducer;
