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
      
    </div>
  );
};
