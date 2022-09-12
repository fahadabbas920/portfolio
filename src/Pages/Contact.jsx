// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons"
// import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faVoicemail } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return ( 
        <div className="contact main">
          <div className="intro-container">
            <h1>Contact</h1>
            <ul className="showing">
                <li><FontAwesomeIcon icon={faPerson}></FontAwesomeIcon> +971 52 8673166</li>
                <li><FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon>fahadabbas920@gmail.com</li>
                <li><FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon>linkedIn</li>

                
            </ul>
          </div>
        </div>
     );
}
 
export default Contact;