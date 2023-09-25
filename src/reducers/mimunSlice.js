import { createSlice } from "@reduxjs/toolkit";
import { fetchMimun } from "../actions";

const initialState = {
  mimunData: [],
  isLoading: false,
  error: null,
};

const mimunSlice = createSlice({
  name: "mimun",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMimun.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMimun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = [action.payload[0]];
      })
      .addCase(fetchMimun.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default mimunSlice.reducer;
