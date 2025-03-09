import { fetchFilmStart, fetchFilmSuccess, fetchFilmFailure } from './filmSlice';

export const fetchFilmDataFromApi = (url) => {
  return async (dispatch) => {
    dispatch(fetchFilmStart());
    try {
      const response = await fetch(`https://swapi.py4e.com/api/${url}`);
      if (!response.ok) {
        throw new Error('Щось пішло не так...');
      }
      const data = await response.json();
      dispatch(fetchFilmSuccess(data));
    } catch (error) {
      dispatch(fetchFilmFailure(error.message));
    }
  };
};
