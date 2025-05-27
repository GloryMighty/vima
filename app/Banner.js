import { useTranslations } from 'next-intl';
import ShinyText from '../public/effects/ShinyText';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import '../public/css/customhero.css';
import '../public/css/banner-animation.css';

export const Home1Banner = () => {
  const t = useTranslations("Banner");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = () => {
    console.log('Video clicked!'); // Debugging log
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="vima-hero-section pt_100"
    >
      <div className="vima-container-fluid h-100">
        <div className="vima-row-centered row align-items-center h-100">
          <div className="col-xxl-5 col-xl-6 ms-auto">
            <div className="tf__banner_text tf__common_heading">
              <h3 className="banner-title" data-text-animation="slide-up">
                {t('we_are_vima')}
              </h3>
              <h2 className="vima-banner-title">
                {t('passionate_website_developers')}
              </h2>
              <div className="container">
                <div className="vima-banner-content">
                  <ul className="d-flex flex-wrap">
                    <li>
                      {/* <div onClick={handleVideoClick}>
                        <ShinyText text="CLICK HERE" className="tf__common_btn" disabled={false} speed={2} hoverClass="tf__common_btn_hover" />
                      </div> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6">
            <div className="tf__about_img">
              <img 
                src="/images-webp/targetreached.webp" 
                alt="VIMA Hero Image" 
                className="img-fluid gradient-mask" 
                style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="vima-video-modal">
          <div className="vima-video-modal-content">
            <span className="vima-video-modal-close" onClick={closeModal}>&times;</span>
            <div className="vima-video-container">
              <ReactPlayer
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                playing={true}
                controls={true}
                width='100%'
                height='100%'
                onEnded={closeModal}
              />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .vima-video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .vima-video-modal-content {
          position: relative;
          width: 80%;
          height: 80%;
          background: #000;
          padding: 20px;
          border-radius: 8px;
        }
        
        .vima-video-container {
          width: 100%;
          height: 100%;
        }
        
        .vima-video-modal-close {
          position: absolute;
          right: -30px;
          top: -30px;
          color: white;
          font-size: 28px;
          cursor: pointer;
          z-index: 1001;
        }
        
        .vima-video-modal-close:hover {
          color: #ddd;
        }
        
        .gradient-mask {
          mask-image: radial-gradient(
            circle at center,
            black 50%,
            transparent 75%
          );
          -webkit-mask-image: radial-gradient(
            circle at center,
            black 50%,
            transparent 75%
          );
        }
      `}</style>
    </section>
  );
};
