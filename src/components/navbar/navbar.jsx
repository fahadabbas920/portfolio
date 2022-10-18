import { Link } from "react-router-dom";
import menuClose from "../menuAutoClose";


const Navbar = () => {

  return (
    <nav className="navbar" id="navbar" onClick={()=>menuClose()}>
      <ul className="links-container">
        <li>
          {console.log(" jsx mounted")}
          <Link to={"/"} className="link" onClick={() => menuClose()}>
            <i className="fa-solid fa-house i--tag"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={"/projects"} className="link" onClick={() => menuClose()}>
            <i className="fa-solid fa-diagram-project i--tag"></i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="link" onClick={() => menuClose()}>
            <i className="fa-solid fa-person i--tag"></i>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link" onClick={() => menuClose()}>
            <i className="fa-solid fa-address-book i--tag"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
