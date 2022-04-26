import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const uiSliceAction = uiSlice.actions;
export const uiSliceReducer = uiSlice.reducer;
