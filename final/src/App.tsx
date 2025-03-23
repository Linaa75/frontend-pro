import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage, AboutPage, HotelPage } from './pages';
import { Header } from './components';

function App() {

  return (
    <div> 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<HotelPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App
