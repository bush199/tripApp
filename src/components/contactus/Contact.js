import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact" >
      <h1>Contact Us</h1>
      <br />
      <img className="contact-img" src="download.png" alt="" />
      <br />
      <br />
      <h1>Tour2Townie's</h1>
      <br />
      <h2>Booking Contact</h2>
      <br />
      <h5>Email : tour2townies@gmail.com </h5>
      <h5>Phone : +91 9632872495</h5>
      <br />
      <h2>Office Address</h2>
      <span>
        <h6>Bait-Ul-Noor, Kajubag</h6>
        <h6>Karwar</h6>
        <h6>PinCode: 581301</h6>
      </span>
    </div>
  );
}

export default Contact;

