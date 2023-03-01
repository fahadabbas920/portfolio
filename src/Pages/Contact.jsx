import menuClose from "../components/menuAutoClose";
import contactImg from "../assets/contact.jpg"

const Contact = () => {
  return (
    <div className="contact" id="contact" onClick={() => menuClose()}>
      <div className="intro-container">
        <h1>Get in Touch</h1>
        <img src={contactImg} alt="" id="contactImg"/>
        <p>Let's start a conversation. :{`)`}</p>
        <ul className="showing contact-ul">
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
          <a href="https://goo.gl/maps/rhmppmeG5QKdD5xT6" disabled="disabled"><i className="fa-solid fa-location"></i>
            United Arab Emirates</a>
          </li>
        </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6509516108!2d54.94729613679833!3d25.07575945545691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1677595825595!5m2!1sen!2sae" width="350" height="200"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="googleMap"></iframe>
      </div>
    </div>
  );
};

export default Contact;
