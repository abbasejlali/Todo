import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const GetData = createAsyncThunk("FetchData/GetData", () => {
  return fetch("https://hr-todo.sahda.ir")
    .then((res) => res.json())
    .then((data) => data);
});

const FetchDataSlice = createSlice({
  name: "FetchData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(GetData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    builder.addCase(GetData.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default FetchDataSlice.reducer;
export { GetData };
