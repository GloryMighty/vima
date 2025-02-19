"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = [];

    if (!name.trim()) errors.push('Name is required');
    if (!email.trim()) errors.push('Email is required');
    if (!email.includes('@')) errors.push('Invalid email format');
    if (!message.trim()) errors.push('Message is required');

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: validationErrors.join(', ')
      });
      return;
    }

    // Set loading state
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitStatus({ 
          loading: false, 
          success: true, 
          error: null 
        });
      } else {
        setSubmitStatus({ 
          loading: false, 
          success: false, 
          error: result.message 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: 'Network error. Please try again.' 
      });
    }
  };

  return (
    <IstiLayout>
      <Breadcrumbs pageTitle="Contact Us" />
      <section className="tf__main_contact pt_130 pb_150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="tf__contact_img" data-animation="img-blur">
                <img
                  src="images/istanbul.jpg"
                  alt="contact img"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="tf__contact_text d-flex gap-3">
                <span className="tf__numbaring">01</span>
                <div className="tf__contact_text_address">
                  <h3>Istanbul Office</h3>
                  <h5>Web Development Address</h5>
                  <p className="mb_15">Levent</p>
                  <p>+90 507 071 12 59</p>
                  <p>+90 535 676 58 99</p>
                </div>
              </div>
              <div className="tf__contact_text d-flex gap-3">
                <span>02</span>
                <div className="tf__contact_text_address">
                  <h3>Istanbul Office</h3>
                  <h5>Sales Office</h5>
                  <p className="mb_15">Nisantasi</p>
                  <p>+90 507 071 12 59</p>
                  <p>+90 535 676 58 99</p>
                </div>
              </div>
              <div className="tf__emargency_contact">
              
              </div>
            </div>
          </div>
          <div className="tf__main_contact_area mt_125">
            <div className="row">
              <div className="col-lg-4">
                <div className="tf__common_heading tf__contact_heading">
                  <h5>Contact us</h5>
                  <h2 data-text-animation="rotate-in">
                    Do you have any question?
                  </h2>
                  <p>
                    We will provide top-level services and elevate your brand with our expertise.
                    Join our group of successful entrepreneurs and experience the difference with our advanced Web Development!
                  </p>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="https://wa.me/+905070711259">
                        <i className="fab fa-whatsapp" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="tel:+905070711259">
                        <i className="fab fa-viber" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:vimawebsolutions@gmail.com">
                        <i className="fab fa-telegram" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <form className="tf__main_contact_area_text" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        name="subject"
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        name="message"
                        required
                      />
                    </div>
                    {submitStatus.error && (
                      <div className="col-12">
                        <div className="alert alert-danger">
                          {submitStatus.error}
                        </div>
                      </div>
                    )}
                    {submitStatus.success && (
                      <div className="col-12">
                        <div className="alert alert-success">
                          Message sent successfully! We'll get back to you soon.
                        </div>
                      </div>
                    )}
                    <div className="col-xl-12">
                      <button 
                        type="submit" 
                        className="tf__common_btn tf__contactarea_btn"
                        disabled={submitStatus.loading}
                      >
                        {submitStatus.loading ? 'Sending...' : 'Submit Now'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IstiLayout>
  );
};

export default Contact;
