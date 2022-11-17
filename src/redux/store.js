import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./pageSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    counter: counterSlice,
  },
});
