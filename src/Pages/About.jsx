const About = () => {
  return (
    <div className="about">
      <div className="intro-container">
        <h1>About Me</h1>
        <p className="showing">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur hic voluptates ex. Omnis, nam dignissimos possimus ad hic molestias adipisci quod eveniet vitae pariatur ab, dolorem temporibus, beatae quos praesentium.
          {/* I'm a front-end web developer.
          My IT experience has given me a strong foundation for web development
          and building complex solutions. Currently in my last year of bachelor
          of computer science. I am passionate about coding and solving problems
          through code, and I am excited to work alongside other amazing
          programmers and learn so much more. */}
        </p>
        <h2 className="showing">Skills</h2>
        <ul className="showing">
          <li>
            <i className="fa-brands fa-html5"></i>
          </li>
          <li>
            <i className="fa-brands fa-css3-alt"></i>
          </li>
          <li>
            <i className="fa-brands fa-square-js"></i>
          </li>
          <li>
            <i className="fa-brands fa-bootstrap"></i>
          </li>
          <li>
            <i className="fa-brands fa-sass"></i>
          </li>
          <li>
            <i className="fa-brands fa-react"></i>
          </li>
          <li>VS code</li>
          <li>
            <i className="fa-brands fa-git-alt"></i>
          </li>
          <li>
            <i className="fa-brands fa-windows"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
