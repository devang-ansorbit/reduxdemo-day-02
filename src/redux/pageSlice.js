import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    setIncrem: (state) => {
      (state.value += 1);
    },
    setDecrem: (state) => {
      (state.value -= 1);
    },
   
  },
});

export const { setIncrem, setDecrem, setcounter } = counterSlice.actions;
export default counterSlice.reducer;
