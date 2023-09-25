import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./api";

export const fetchMimun = createAsyncThunk(
  "mimun/fetch",
  async (stationName, { rejectWithValue }) => {
    try {
      const data = await fetchData(stationName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
