import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectListItems from "../../../data/ProjectListItems.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class SimpleSlider extends React.Component {
  render() {
    const CustomPrevArrow = (props) => {
      const { onClick } = props;
      return (
        <button className="slick-custom-prev" onClick={onClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      );
    };
    
    const CustomNextArrow = (props) => {
      const { onClick } = props;
      return (
        <button className="slick-custom-next" onClick={onClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      );
    };


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };

    
    return (
      <div>
        <Slider {...settings}>
          {ProjectListItems.map((projectItem) => (
            <div className="project-item-box" key={projectItem.id}>
              <h3>{projectItem.title}</h3>
              <div className="flex-container">
                <div
                  className="img-box"
                  style={{ "--img": `url("./${process.env.PUBLIC_URL}/assets/images/${projectItem.img}")` }}
                ></div>
                <div className="content-box">
                  <div>
                    <span className="content-count">
                      참여인원 : {projectItem.count}명
                    </span>
                    <span className="content-state">{projectItem.state}</span>
                  </div>
                  <div>
                    <span className="content-features">
                      주요 기능 : {projectItem.features}
                    </span>
                  </div>
                  <div>
                    <p className="content-desc">{projectItem.desc}</p>
                  </div>
                  <div>
                    <span class="contribution">기여도</span>
                    <div>
                      <span className="content-front">Frontend</span>
                      <div className="front-bar">
                        <div
                          style={{
                            "--width": `${projectItem.contribution.frontend}%`,
                            "--con": `"${projectItem.contribution.frontend} %"`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="content-back">Backend</span>
                      <div className="back-bar">
                        <div
                          style={{
                            "--width": `${projectItem.contribution.backend}%`,
                            "--con": `"${projectItem.contribution.backend} %"`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="content-link">
                      URL{" "}
                      <a
                        href={projectItem.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {projectItem.link}
                      </a>{" "}
                    </span>
                  </div>
                  <div>
                    <span className="content-git">
                      GitHub{" "}
                      <a
                        href={projectItem.git}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {projectItem.git}
                      </a>{" "}
                    </span>
                  </div>
                  <div>
                    {projectItem.technologies.map((item, index) => (
                      <span className="content-technologies" key={index}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
