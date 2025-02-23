import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations();

  const skillsData = {
    title: t('skills.title'),
    items: [
      {
        id: 1,
        startDate: 2019,
        degicnation: t('skills.webdev'),
        desc: t('skills.webdev1'),
      },
      {
        id: 2,
        startDate: 2009,
        endDate: 2018,
        degicnation: t('skills.aiint'),
        desc: t('skills.aiint1'),
      },
      {
        id: 3,
        startDate: 2001,
        endDate: 2025,
        degicnation: t('skills.multiling'),
        desc: t('skills.multiling1'),
      },
      {
        id: 4,
        startDate: 1987,
        endDate: 2025,
        degicnation: t('skills.adapt'),
        desc: t('skills.adapt1'),
      },
    ],
  };

  return (
    <section className="tf__skill_2 pt_150" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tf__common_heading tf__common_heading2 mb_120">
              <h2 data-text-animation="rotate-in" className="text-center">
                {skillsData.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {skillsData.items.map((data, index) => (
            <div className="col-xl-6 col-lg-6" key={data.id}>
              <div
                className="tf__single_skill_2 d-flex flex-wrap"
                data-animation="fade-bottom"
                data-offset={100}
              >
                <h2>{index + 1 > 10 ? index : `0${index + 1}`}</h2>
                <span className="tf__skill_2_icon">
                  <i className="fal fa-long-arrow-up" />
                </span>
                <div className="tf__single_skill_2_text">
                  <h5>{data.degicnation}</h5>
                  <span>
                    {data.startDate} - {data.endDate ? data.endDate : "Present"}
                  </span>
                  <p>{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;