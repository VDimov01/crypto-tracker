import { Link, Outlet } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="App gradient">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Crypto</Link>
      </nav>
      <h1 className="heading">Welcome to Crypto Tracker</h1>
      <div>
        <Outlet />
      </div>
      <footer className="footer">
        <div className="footer-logo">Logo</div>
        <nav className="footer-links">
          <a href="https://github.com/VDimov01" target="_blank" className="footer-link">
            Github
          </a>
          <a href="#" className="footer-link">
            Link 2
          </a>
          <a href="#" className="footer-link">
            Link 3
          </a>
        </nav>
      </footer>
    </div>
  );
};
