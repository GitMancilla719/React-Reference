import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DEMO_API = "https://jsonplaceholder.typicode.com/posts";

// PUT ALL ASYNC LOGIC OF A FEATURE IN ONE SLICE (GET, POST, PUT/PATCH, DELETE)

export const fetchPosts = createAsyncThunk("demo/getPosts", async () => {
  const response = await axios.get(DEMO_API);
  return response.data;
});

const DemoSlice = createSlice({
  name: "Demo",
  initialState: {
    value: null,
    status: "idle", // idle, loading, success, failed
  },
  reducers: {
    // reset: (state, action) => {
    //   return (state.value = null), (state.status = "idle");
    // },
    reset: (state) => {
      state.value = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
        state.value = null;
      });
  },
});

export const { reset } = DemoSlice.actions;

export default DemoSlice;
