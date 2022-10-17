const Main = () => {
  return (
    <div className="main">
      <div className="intro-container">
        <span className="showing">Hi, I'm</span>
        <h1>FAHAD ABBAS</h1>
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
      </div>
    </div>
  );
};

export default Main;
