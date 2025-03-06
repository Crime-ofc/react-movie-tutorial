import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/react-movie-tutorial/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/react-movie-tutorial/" className="nav-link">Home</Link>
        <Link to="/react-movie-tutorial/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  )
}

export default NavBar
