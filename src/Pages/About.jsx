// import { useHistory } from "react-router-dom";


const About = () => {

// let history = useHistory();

// history.push("portfolio/");



// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }





  return (
    <div className="about">
      <div className="intro-container">
        <h1>About Me</h1>
        <p className="showing">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur hic voluptates ex. Omnis, nam dignissimos possimus ad hic molestias adipisci quod eveniet vitae pariatur ab, dolorem temporibus, beatae quos praesentium
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
