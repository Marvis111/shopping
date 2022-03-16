import React from "react";

function Contact() {
  const Contact = {
    Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1578.6228578099683!2d10.270149972282338!3d36.86287577380709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5ab56f5b867%3A0x22adf7a04a2196e4!2sMonoprix!5e0!3m2!1sen!2stn!4v1645123521948!5m2!1sen!2stn",
    Description:
      "Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.",
    Adresse: "10 Suffolk st Soho, London, UK",
    Phone: "34 567 890",
    Mail: "contact@essence.com",
  };
  return (
    <div className="contact-area d-flex align-items-center">
      <div className="google-map">
        <div id="googleMap">
          <iframe
            id="googleMap"
            src={Contact.Map}
            style={{ border: 0 }}
            allowFullScreen="True"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="contact-info">
        <h2>How to Find Us</h2>
        <p>{Contact.Description}</p>
        <div className="contact-address mt-50">
          <p>
            <span>address:</span> 10 Suffolk st Soho, London, UK
          </p>
          <p>
            <span>telephone:</span> +216 {Contact.Phone}
          </p>
          <p>
            <button className="default-btn">{Contact.Mail}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
