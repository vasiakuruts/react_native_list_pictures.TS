import { createSlice } from "@reduxjs/toolkit";
import { getPhotos } from "../thunk";

const initialState: any = {
  photos: {},
};
export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
  },
});

export default photosSlice.reducer;
