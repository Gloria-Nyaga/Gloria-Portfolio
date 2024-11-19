
import React from 'react';
import ContactInfo from './contactinfo';
import ContactForm from './contactform';
import './index.css';

const Contact = () => {
  return (
    <div className='contact-section '>
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <p className="section-description">
          Kindly reach out through the following. Let's connect.
        </p>
      </div>
      
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};


export default Contact;
