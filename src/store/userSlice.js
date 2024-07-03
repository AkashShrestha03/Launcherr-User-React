import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  registerSuccess: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccessUser: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
      localStorage.removeItem("admin");
    },
    registerSuccessful: (state) => {
      state.registerSuccess = true;
    },
    registerComplete: (state) => {
      state.registerSuccess = false;
    },
  },
});

export const {
  registerComplete,
  signInSuccessUser,
  signOut,
  registerSuccessful,
} = userSlice.actions;
export { userSlice };
