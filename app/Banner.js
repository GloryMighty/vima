import { useTranslations } from 'next-intl';
import CircularText from '../public/effects/CircularText';
import ShinyText from '../public/effects/ShinyText';
import ReactPlayer from 'react-player';
import { useState } from 'react';

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
      className="tf__banner pt_100 pl_60 pr_60 bg-fixed"
      style={{ background: "url(images/breadcrumb.jpg)" }}
    >
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col-xxl-5 col-xl-6 ms-auto">
            <div className="tf__banner_text">
              <h3 className="banner-title" data-text-animation="slide-up" data-split="char">
                {t('we_are_vima')}
              </h3>
              <h2 className="banner-title">
                {t('passionate_website_developers')}
              </h2>
              <p>
                {t('banner_paragraph')}
              </p>
              <div className="container">
                <div className="banner-content">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <div onClick={handleVideoClick}>
                        <ShinyText text="CLICK HERE" className="tf__common_btn" disabled={false} speed={2} hoverClass="tf__common_btn_hover" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <span className="video-modal-close" onClick={closeModal}>&times;</span>
            <div className="video-container">
              <ReactPlayer
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                playing={true}
                controls={true}
                width='100%'
                height='100%'
              />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .video-modal {
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
        
        .video-modal-content {
          position: relative;
          width: 80%;
          height: 80%;
          background: #000;
          padding: 20px;
          border-radius: 8px;
        }
        
        .video-container {
          width: 100%;
          height: 100%;
        }
        
        .video-modal-close {
          position: absolute;
          right: -30px;
          top: -30px;
          color: white;
          font-size: 28px;
          cursor: pointer;
          z-index: 1001;
        }
        
        .video-modal-close:hover {
          color: #ddd;
        }
      `}</style>
    </section>
  );
};
