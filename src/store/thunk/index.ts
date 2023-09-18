import { createAsyncThunk } from "@reduxjs/toolkit";
import { unsplashApi } from "../../utils/axios";

export const getPhotos = createAsyncThunk(
  "get-photos",
  async (page: number, { rejectWithValue }) => {
    try {
      const photos = await unsplashApi.get(`/photos?page=${page}`);
      return photos.data;
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
