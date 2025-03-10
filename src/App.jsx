
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/favorites';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <MovieProvider>
        <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/react-movie-tutorial/" element={<Home />}/>
          <Route path="/react-movie-tutorial/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
