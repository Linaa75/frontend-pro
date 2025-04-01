import { Routes, Route } from 'react-router';
import { HomePage, AboutPage, HotelPage, PageNotFound } from './pages';
import { Header } from './components';

function App() {

  return (
    <div> 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<HotelPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App
