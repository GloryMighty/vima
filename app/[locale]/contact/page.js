"use client";

import { useTranslations } from 'next-intl';
import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import { useState } from "react";
import Image from 'next/image';
import ClientHelmet from '@/components/ClientHelmet';

const Contact = () => {
  const t = useTranslations('Contact');
  
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

    if (!name.trim()) errors.push(t('validation.name_required'));
    if (!email.trim()) errors.push(t('validation.email_required'));
    if (!email.includes('@')) errors.push(t('validation.invalid_email'));
    if (!message.trim()) errors.push(t('validation.message_required'));

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: validationErrors.join(', ')
      });
      return;
    }

    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch(`/${locale}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
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
        error: t('errors.network') 
      });
    }
  };

  const offices = [
    {
      number: "01",
      title: t('offices.dev.title'),
      type: t('offices.dev.type'),
      location: t('offices.dev.location'),
      phones: ["+90 507 071 12 59", "+90 535 676 58 99"]
    },
    {
      number: "02",
      title: t('offices.sales.title'),
      type: t('offices.sales.type'),
      location: t('offices.sales.location'),
      phones: ["+90 507 071 12 59", "+90 535 676 58 99"]
    }
  ];

  return (
    <IstiLayout>
      <ClientHelmet 
        title={`${t('meta_title')} | Vima Web Solutions`}
        description={t('meta_description')}
        keywords={t('meta_keywords')}
      />
      <Breadcrumbs pageTitle={t('page_title')} />
      <section className="tf__main_contact pt_130 pb_150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="tf__contact_img" data-animation="img-blur">
                <Image
                  src="/images/istanbul.jpg"
                  alt={t('image_alt')}
                  className="img-fluid w-100"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              {offices.map((office, index) => (
                <div key={index} className="tf__contact_text d-flex gap-3">
                  <span className={index === 0 ? "tf__numbaring" : ""}>{office.number}</span>
                  <div className="tf__contact_text_address">
                    <h3>{office.title}</h3>
                    <h5>{office.type}</h5>
                    <p className="mb_15">{office.location}</p>
                    {office.phones.map((phone, phoneIndex) => (
                      <p key={phoneIndex}>{phone}</p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="tf__emargency_contact">
              </div>
            </div>
          </div>
          <div className="tf__main_contact_area mt_125">
            <div className="row">
              <div className="col-lg-4">
                <div className="tf__common_heading tf__contact_heading">
                  <h5>{t('form.title')}</h5>
                  <h2 data-text-animation="rotate-in">
                    {t('form.question')}
                  </h2>
                  <p>{t('form.description')}</p>
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
                        placeholder={t('form.name_placeholder')}
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="email"
                        placeholder={t('form.email_placeholder')}
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder={t('form.phone_placeholder')}
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder={t('form.subject_placeholder')}
                        value={formData.subject}
                        onChange={handleChange}
                        name="subject"
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        placeholder={t('form.message_placeholder')}
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
                          {t('form.success_message')}
                        </div>
                      </div>
                    )}
                    <div className="col-xl-12">
                      <button 
                        type="submit" 
                        className="tf__common_btn tf__contactarea_btn"
                        disabled={submitStatus.loading}
                      >
                        {submitStatus.loading ? t('form.sending') : t('form.submit')}
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
