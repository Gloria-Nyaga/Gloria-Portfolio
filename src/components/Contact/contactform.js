import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: false });

        try {
            await emailjs.send(
                'service_ekcb239',
                'template_zqiu17n',
                formData,
                '_7_onOiWAdD7pYD9j'
            );
            setStatus({ submitting: false, success: true, error: false });
            setFormData({ name: '', email: '', message: '' });

            toast.success("Message sent successfully!");

        } catch (error) {
            setStatus({ submitting: false, success: false, error: true });
            console.error('Error sending message:', error);
        }
    };

    const isFormValid = formData.name && formData.email && formData.message;

    return (
        <div className="contact-form">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input message"
                    rows="6"
                    required
                />
                <button
                    type="submit"
                    disabled={status.submitting || !isFormValid} // Button disabled if form is incomplete
                    className="submit-button"
                >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15.5 8L8.5 15M15.5 8L8.5 1M15.5 8H0.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                </button>
            </form>
        </div>
    );
};

function App() {
  return (
    <div>
      <ContactForm />
      <ToastContainer />
    </div>
  );
}

export default App;
