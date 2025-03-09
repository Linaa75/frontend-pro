import { createSlice } from '@reduxjs/toolkit';

const filmSlice = createSlice({
  name: 'film',
  initialState: {
    filmData: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchFilmStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFilmSuccess(state, action) {
      state.loading = false;
      state.filmData = action.payload;
    },
    fetchFilmFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearFilmData(state) {
      state.filmData = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { fetchFilmStart, fetchFilmSuccess, fetchFilmFailure, clearFilmData } = filmSlice.actions;
export default filmSlice.reducer;
