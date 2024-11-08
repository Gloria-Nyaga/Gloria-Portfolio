import React from 'react';
import { Mail, Phone, Calendar, MapPin} from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="contact-info">

      <div className="info-container">
        <div className="info-item">
          <div className="icon-wrapper">
            <Mail size={20} />
          </div>
          <div className="info-content">
            <span className="info-label">EMAIL</span>
            <span className="info-value">nyagagakiigloria@gmail.com</span>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-wrapper">
            <Phone size={20} />
          </div>
          <div className="info-content">
            <span className="info-label">PHONE</span>
            <span className="info-value">+254 799 740 005</span>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-wrapper">
            <Calendar size={20} />
          </div>
          <div className="info-content">
            <span className="info-label">DOB</span>
            <span className="info-value">27th May 2000</span>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-wrapper">
            <MapPin size={20} />
          </div>
          <div className="info-content">
            <span className="info-label">LOCATION</span>
            <span className="info-value">Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;