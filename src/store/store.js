import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import playlistSlice from "./playlistSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    playlists: playlistSlice,
  },
});
