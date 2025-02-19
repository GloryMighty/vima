"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      subject,
      message,
    });
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
                <div className="tf__emargency_contact_bg">
                  <p>Emergcy Contact</p>
                  <p>Emergcy Contact</p>
                  <span>+88 123 456 7653</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tf__main_contact_area mt_125">
            <div className="row">
              <div className="col-lg-4">
                <div className="tf__common_heading tf__contact_heading">
                  <h5>Contact us</h5>
                  <h2 data-text-animation="rotate-in">
                    do you have any question?
                  </h2>
                  <p>
                    For your car we will do everything advice, repairs and
                    maintenance. We are the some preferred choice by many car
                    owners because
                  </p>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-12">
                      <input
                        type="text"
                        placeholder="Service"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-12">
                      <button className="tf__common_btn tf__contactarea_btn">
                        Submit Now
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
