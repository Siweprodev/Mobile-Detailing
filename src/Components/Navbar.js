import "./Navbar.css";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
