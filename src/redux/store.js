import { configureStore } from "@reduxjs/toolkit";
import websitesReducer from "./slices/websiteSlice";

export const store = configureStore({
  reducer: {
    websites: websitesReducer,
  },
});
