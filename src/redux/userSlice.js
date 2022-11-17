import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
  },
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    
  },
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;
