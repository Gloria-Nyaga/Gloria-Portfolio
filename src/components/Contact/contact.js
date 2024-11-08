import React from 'react';
import ContactInfo from './contactinfo';
import ContactForm from './contactform';
import './index.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
