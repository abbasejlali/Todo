import { configureStore } from "@reduxjs/toolkit";

// Reducers
import DataReducer from "/redux toolkit/features/FetchDataSlice";

const store = configureStore({
  reducer: {
    DataReducer,
  },
});

export default store;
