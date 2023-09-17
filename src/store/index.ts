import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./slice";

const store = configureStore({
  reducer: {
    photos: photosSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
