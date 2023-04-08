import { Link, Outlet } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="App gradient">
      <nav className="navbar">
        <Link to="/crypto-tracker/">Home</Link>
        <Link to="/crypto-tracker/about">About</Link>
        <Link to="/crypto-tracker/crypto">Crypto</Link>
      </nav>
      <h1 className="heading">Welcome to Crypto Tracker</h1>
      <div>
        <Outlet />
      </div>
      <footer className="footer">
        <div className="footer-logo">Logo</div>
        <nav className="footer-links">
          <a href="#" className="footer-link">
            Link 1
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
