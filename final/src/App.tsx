import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage, AboutPage, HotelPage } from './pages';
import { Header } from './components';
import Loader from './components/Loader/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div> 
    {loading ? (
      <Loader />
    ) : (
      <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<HotelPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      </div>
    )}
    </div>
  );
}

export default App
