import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmDataFromApi } from './redux/filmActions';
import { clearFilmData } from './redux/filmSlice';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { filmData, loading: filmLoading, error: filmError } = useSelector((state) => state.film);

  const [url, setUrl] = useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchFilmDataFromApi(url));
  };

  useEffect(() => {
    dispatch(fetchFilmDataFromApi('people/1'));
  }, [dispatch]);

  const handleClearData = () => {
    dispatch(clearFilmData());
  };

  return (
    <>
      <div className="container">
        <div className="banner">
          <h1>SWAPI</h1>
        </div>

        <div className="search-bar">
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
            placeholder="people/1"
          />
          <button className="btn btn-danger" onClick={handleSearch}>Get info</button>
        </div>

        {filmLoading && <p>Завантаження...</p>}
        {filmError && <p style={{ color: 'red' }}>Помилка: {filmError}</p>}

        {filmData && (
          <div className="data">
            <pre>{JSON.stringify(filmData, null, 2)}</pre>
          </div>
        )}

        <Footer clearTodos={handleClearData} />
      </div>
    </>
  );
}

export default App;
