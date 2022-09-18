import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="links-container">
        <li>
          <Link to={"/"} className="link">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={"/projects"} className="link">
            <i className="fa-solid fa-diagram-project"></i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="link">
            <i className="fa-solid fa-person"></i>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link">
            <i className="fa-solid fa-address-book"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
