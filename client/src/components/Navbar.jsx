
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <img
            src="/images/sunny-print-logo.png"
            alt="Sunny Print"
          />
        </Link>

        {/* NAVIGATION */}
        <div className="navbar-links">

          <Link to="/">Home</Link>

          <Link to="/about">About Us</Link>

          <Link to="/services">Products & Services</Link>

          <Link to="/contact">Contact</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
