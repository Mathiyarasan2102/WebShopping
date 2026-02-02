import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mockWebsites from "../../data/mockWebsites";

// Simulated async fetch (swap with real API later)
export const fetchWebsiteData = createAsyncThunk(
  "websites/fetchWebsiteData",
  async (category) => {
    await new Promise((res) => setTimeout(res, 400));
    const payload = mockWebsites[category];
    if (!payload) throw new Error("Category not found");
    return payload;
  }
);

const websiteSlice = createSlice({
  name: "websites",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearWebsites: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWebsiteData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWebsiteData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWebsiteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to load data";
      });
  },
});

export const { clearWebsites } = websiteSlice.actions;
export default websiteSlice.reducer;
