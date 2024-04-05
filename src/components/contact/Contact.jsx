import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Let's work together</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Call us</h3>
              <span className="contact__card-data">(+66) 66-014-0817</span>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">E-mail</h3>
              <span className="contact__card-data">
                prakit.l3etter@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-map contact__card-icon"></i>
              <h3 className="contact__card-title">Location</h3>
              <span className="contact__card-data">Bangkok, Thailand</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
