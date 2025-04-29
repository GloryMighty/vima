"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import Image from 'next/image';
import ClientHelmet from '@/components/ClientHelmet';
import { Mail } from "lucide-react";

const Contact = () => {
  const t = useTranslations('Contact');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const errors = [];

    if (!name.trim()) errors.push(t('validation.name_required'));
    if (!email.trim()) errors.push(t('validation.email_required'));
    if (!email.includes('@')) errors.push(t('validation.invalid_email'));
    if (!message.trim()) errors.push(t('validation.message_required'));

    return errors;
  };

  const handleEmailRedirect = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join(', '));
      setSuccess(false);
      return;
    }

    setError(null);

    const recipientEmail = 'targetreachedsoftware@gmail.com';
    const emailSubject = subject ? `${subject} from ${name}` : `Inquiry from ${name}`;
    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  const offices = [
    {
      number: "01",
      title: t('offices.dev.title'),
      type: t('offices.dev.type'),
      location: t('offices.dev.location'),
      phones: [
        <p key="0"><Link href="tel:+905070711259">+90 50 707 11259</Link></p>,
      ]
    },
    {
      number: "02",
      title: t('offices.sales.title'),
      type: t('offices.sales.type'),
      location: t('offices.sales.location'),
      phones: [
        <p key="1"><Link href="tel:+3584578753412">+358 45 7875 3412</Link></p>,
              ]
    },
    {
      number: "03",
      title: t('offices.sales2.title'),
      type: t('offices.sales2.type'),
      location: t('offices.sales2.location'),
      phones: [
        <p key="2"><Link href="tel:+3584578753416">+358 45 7875 3416</Link></p>,
              ]
    }
  ];

  return (
    <IstiLayout>
      <ClientHelmet 
        title={`${t('meta_title')} | Target Reached Software`}
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
                  src="/images-webp/istanbul.webp"
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
                  <span className={
                    index === 0 ? "tf__numbaring" :
                    index === 1 ? "tf__numbaring-02" :
                    index === 2 ? "tf__numbaring-03" : ""
                    }>{office.number}</span>
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
                      <a href="https://wa.me/+905070711259" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="tel:+905070711259" target="_blank" rel="noopener noreferrer">  
                        <i className="fab fa-viber" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:targetreachedsoftware@gmail.com">
                        <i className="fab fa-telegram" aria-hidden="true" />
                      </a>
                      <a href="https://www.instagram.com/targetreachedweb/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" aria-hidden="true" />
                      </a>
                      <a href="https://x.com/wearevima" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" aria-hidden="true" />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61573839564839" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <form className="tf__main_contact_area_text" onSubmit={handleEmailRedirect}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder={t('form.name_placeholder')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="email"
                        placeholder={t('form.email_placeholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder={t('form.phone_placeholder')}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder={t('form.subject_placeholder')}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        placeholder={t('form.message_placeholder')}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    {error && (
                      <div className="col-12">
                        <div className="alert alert-danger">
                          {error}
                        </div>
                      </div>
                    )}
                    {success && (
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
                      >
                        {t('form.submit')} <Mail className="ml-2" style={{ marginLeft: '8px' }} />
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
