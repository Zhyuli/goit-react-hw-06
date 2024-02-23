import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    nameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { nameFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
