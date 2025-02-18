const skillsData = {
  title: "Crafting Ideas Building Dreams My Creative Portfolio",
  items: [
    {
      id: 1,
      startDate: 2019,
      agency: "Creative Agency",
      degicnation: "Framer Designer & Developer",
      desc: "Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qUI Designe ratione",
      skill_percentage: "70",
    },
    {
      id: 2,
      startDate: 2009,
      endDate: 2018,
      agency: "Samsung tech",
      degicnation: "Web Application Manager",
      desc: "Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qUI Designe ratione",
      skill_percentage: "80",
    },
    {
      id: 3,
      startDate: 2008,
      endDate: 2013,
      agency: "METAVERSE",
      degicnation: "Framer Designer & Developer",
      desc: "Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qUI Designe ratione",
      skill_percentage: "90",
    },
    {
      id: 4,
      startDate: 2008,
      endDate: 2013,
      agency: "METAVERSE",
      degicnation: "Framer Designer & Developer",
      desc: "Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qUI Designe ratione",
      skill_percentage: "90",
    },
  ],
};

const Skills = () => {
  return (
    <section className="tf__skill pt_140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="tf__common_heading tf__common_heading2 tf__skiil_heading">
              <h5>MY Skills</h5>
              <h2 data-text-animation="rotate-in" data-split="word">
                {skillsData.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {skillsData.items &&
            skillsData.items.map(
              (item, index) =>
                index <= 2 && (
                  <div className="col-xl-12" key={item.id}>
                    <div
                      className="tf__single_skill"
                      data-animation="fade-bottom"
                    >
                      <div className="row">
                        <div className="col-xl-3 col-lg-3">
                          <div className="tf__single_skill_left">
                            <h6>
                              {item.startDate} -{" "}
                              {item.endDate ? item.endDate : "Present"}
                            </h6>
                            <span>{item.agency}</span>
                            <p>{item.degicnation}</p>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                          <div className="tf__single_skill_middle">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                          <div className="tf__team_skills_bar_single">
                            <p>Performence</p>
                            <div id="bar1" className="barfiller">
                              <div className="tipWrap">
                                <span className="tip">
                                  {" "}
                                  {item.skill_percentage}%{" "}
                                </span>
                              </div>
                              <span
                                className="fill"
                                data-percentage={item.skill_percentage}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </section>
  );
};
export default Skills;

export const Skills2 = () => {
  return (
    <section className="tf__skill_2 pt_150" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tf__common_heading tf__common_heading2 mb_120">
              <h5>MY Skills</h5>
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
                <h2>{index + 1 > 9 ? index : `0${index + 1}`}</h2>
                <span className="tf__skill_2_icon">
                  <i className="fal fa-long-arrow-up" />
                </span>
                <div className="tf__single_skill_2_text">
                  <h4>{data.agency}</h4>
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
