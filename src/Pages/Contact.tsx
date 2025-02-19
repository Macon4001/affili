import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-info">
                    <div className="logo-container">
                        <img src="/2.png" alt="NexAffil Logo" className="contact-logo" />
                    </div>
                    <h1>Get in Touch</h1>
                    <p>Have questions? We'd love to hear from you.</p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Location</h3>
                                <p>123 Business Street, London, UK</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>support@nexaffil.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>+44 (0) 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="form-wrapper">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your first name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject <span className="required">*</span></label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="billing">Billing Question</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message <span className="required">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <p className="form-small-print">
                                <span className="required">*</span> Required fields
                            </p>

                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                            
                            <div className="privacy-notice">
                                <p className="privacy-header">By submitting this form, you acknowledge and agree that:</p>
                                <p className="privacy-terms">
                                    Your data will be processed in accordance with GDPR regulations | 
                                    We will store and handle your data securely | 
                                    Your data won't be shared without consent | 
                                    You can request data access or deletion anytime
                                </p>
                                <p className="privacy-footer">For more information, please read our <a href="/privacy">Privacy Policy</a>.</p>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;