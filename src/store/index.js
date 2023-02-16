import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    }
  }
});

const videoSlice = createSlice({
  name: "video",
  initialState: [],
  reducers: {
    addVideo(state, action) {
      state.push(action.payload);
    },
    removeVideo(state, action) {
      //
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    video: videoSlice.reducer
  }
});

console.log(store);
