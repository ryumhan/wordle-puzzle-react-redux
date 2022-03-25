/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listReducer";
import countReducers from "./counterReducer";
import answerReducer from "./answerReducer";

export const store = configureStore({
  reducer: {
    counter: countReducers,
    answer: answerReducer,
    elementlist: listReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
