import menuClose from "../components/menuAutoClose";

const Contact = () => {
  return (
    <div className="contact" onClick={() => menuClose()}>
      <div className="intro-container">
        <h1>Contact</h1>
        <p>YOUR OPINION MATTERS, I'M HAPPY TO ASSIST YOU</p>
        <ul className="showing">
          <li>
            <a href="tel:+971528673166">
              <i className="fa-solid fa-phone"></i>Call or WhatsApp: +971 52
              8673166
            </a>
          </li>
          <li>
            <a href="mailto:fahadabbas920@gmail.com">
              <i className="fa-solid fa-envelope"></i>Send email:
              fahadabbas920@gmail.com
            </a>
          </li>
          <li>
          <a href="/" disabled="disabled"><i class="fa-solid fa-location"></i>
            United Arab Emirates</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
