"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

/**
 * Testimonial component displaying client feedback
 * Uses translations for multi-language support
 *
 * Translation structure:
 * - section_title: Main testimonials section title
 * - heading: Testimonials section heading
 * - image_alt: Alt text for testimonial images
 * - testimonials: Object containing testimonial details:
 *   - [key]: Testimonial identifier (batuhan, sarah, etc.)
 *     - name: Client name
 *     - role: Client role/position
 *     - content: Testimonial text
 */
const Testomonial = () => {
  // Initialize translations for the Testimonial namespace
  const t = useTranslations('Testimonial');

  /**
   * Testimonial items configuration
   * Each item maps to a translation key in the locale files
   * and contains the image source and unique identifier
   */
  // Static testimonial data with translations
  const testimonials = [
    {
      id: 1,
      image: '/images/testimonial_1.png',
    },
    {
      id: 2,
      image: '/images/testimonial_2.png',
    },
    {
      id: 3,
      image: '/images/testimonial_3.png',
    },
    { 
      id: 4,
      image: '/images/testimonial_4.png',
    },
    { 
      id: 5,
      image: '/images/testimonial_5.jpeg',
    },
  ];

  const testimonialData = {
    1: {
      name: 'Batuhan Sezar',
      role: 'Application user',
      content: 'Interesting idea flawlessly implemented into reality with great attention to detail and creativity. I like the application because of efficiency and powerful AI solutions!'
    },
    2: {
      name: 'Sarah Kim',
      role: 'Startup Founder',
      content: 'This AI-powered solution has been a game-changer for our team. It streamlines complex workflows and provides insights that would have taken weeks to uncover manually.'
    },
    3: {
      name: 'Kerem Guven',
      role: 'Application User',
      content: 'Wonderful realization of innovative solution for my daily usage. The AI-driven insights have opened many possibilities for my life!'
    },
    4: {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      content: 'Incredibly intuitive and powerful. The AI capabilities have helped our team make data-driven decisions faster and more accurately than ever before.'
    },
    5: {
      name: 'Zuheir Al-darwesh',
      role: 'Business Owner',
      content: 'When I addressed the guys I wasn not prepared for the quality and speed of service they provided. More than reasonable price for ridiculously fast and competent solution. Totally recommend.'
    }
  };

  return (
    <section className="tf__testimonial pt_145">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="tf__common_heading tf__testimonial_heading">
              <h5>{t('section_title')}</h5>
              <h2 data-text-animation="slide-from-left" data-split="word">{t('heading')}</h2>
            </div>
          </div>
        </div>
        <div className="tf__testimonial_slider">
          <Slider
            {...sliderProps.testimonial_slider}
            className="row testimonial_slider"
          >
            {testimonials.map((testimonial) => (
              <div className="col-xl-6" key={testimonial.id}>
                <div className="tf__single_testimonial">
                  <div className="tf__single_testimonial_img">
                    <Image
                      src={testimonial.image}
                      alt={t('image_alt')}
                      className="img-fluid w-100"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h4>{testimonialData[testimonial.id].name}</h4>
                  <span>{testimonialData[testimonial.id].role}</span>
                  <p>{testimonialData[testimonial.id].content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
