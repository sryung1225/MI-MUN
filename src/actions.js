import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./api";

export const fetchMimun = createAsyncThunk(
  "mimun/fetch",
  async (sidoName, { rejectWithValue }) => {
    try {
      const data = await fetchData(sidoName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
