
import React from 'react';


const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className='container'>

        <h3 className='display-5 font-weight-bold text-muted' style={{"marginBottom":"20px","marginTop":"20px","textAlign":"center"}}>Contact Us</h3>
      </div>
      <div className="contact-icons" style={{"textAlign":"center"}}>
        <a  style={{"margin":"15px"}}href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-linkedin fs-1"  style={{color: "#808080"}}></i>
        </a>
        <a style={{"margin":"15px"}} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-instagram fs-1"  style={{color: "#808080"}}></i>
        </a>
        <a  style={{"margin":"15px"}} href="mailto:example@example.com">
        <i class="bi bi-envelope-fill fs-1"  style={{color: "#808080"}}></i>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
