import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faPerson } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="links-container">
        <li>
          <Link to={"/"} className="link">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={"/projects"} className="link">
            <FontAwesomeIcon icon={faProjectDiagram} />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="link">
            <FontAwesomeIcon icon={faPerson} />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link">
            <FontAwesomeIcon icon={faPhone} />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
