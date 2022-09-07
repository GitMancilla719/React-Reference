import { configureStore } from "@reduxjs/toolkit";
import DemoSlice from "../features/demoFeature/DemoSlice";

export const store = configureStore({
  reducer: {
    DemoSlice: DemoSlice.reducer,
  },
});
