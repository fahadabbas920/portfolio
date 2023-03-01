import menuClose from "../components/menuAutoClose";
// import { useEffect } from "react";
// import ReactGA from "react-ga"
import mainImg from "../assets/19362653.jpg"

const Main = () => {
  // useEffect(()=>{
  //   ReactGA.pageview(window.location.pathname)
  // },[])

  return (
    <div className="main" id="main" onClick={()=>menuClose()}>
      <div className="intro-container">
        <h2 className="showing">Hello, I'm</h2>
        <h1>FAHAD ABBAS</h1>
        <img src={mainImg} alt="main-img" id="main-img" className="showing"/>
        {/* <h2 className="showing">Welcome</h2> */}
        <p className="showing">
          A Front-End Web Developer passionate about creating <br /> interactive
          applications and experiences on the web.
        </p>
        <ul className="showing">
          {/* <li><a href="https://www.youtube.com">Resume</a></li> */}
          <li>
            <a
              href="https://github.com/fahadabbas920"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github">.</i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fahadabbas920/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin">.</i>
            </a>
          </li>
        </ul>
        <i className="fa-solid fa-arrow-down arrowClass"></i>
      </div>
      
    </div>
  );
};

export default Main;
