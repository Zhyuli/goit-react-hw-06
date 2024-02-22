import { createSlice } from "@reduxjs/toolkit";
const filterInitialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    nameFilter(state, action) {
      return action.payload;
    },
  },
});

export const { nameFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
