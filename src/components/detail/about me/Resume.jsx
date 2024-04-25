import React from "react";
import { SectionTitle } from "../common";
import CreateResumeList from "./CreateResumeLIstBox";
import CreateResumeIntroduction from "./CreateIntroductionBox";

const Resume = () => {
  return (
    <div className="me__wrap">

      <section className="profile-wrap sec">
        <SectionTitle title="About Me" />
        <ul className="basic-info">
          <li>
            <div className="profile-images">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/face-photo.png`}
                alt="프로필 사진"
              />
            </div>
          </li>
          <li>
            <ul>
              <li>
                <span className="name-info">1985. 06. 25</span>
              </li>
              <li>
                <span className="name-info">박정환</span>
              </li>
              <li>
                <span className="name-info">jungie2@naver.com</span>
              </li>
              <li>
                <span className="name-address">대구광역시 북구</span>
              </li>
            </ul>
          </li>
        </ul>
        <div className="info-box">
          <h3>Education</h3>
          <CreateResumeList use={"edu"} mr={"0px"} mb={"0px"} clv={"76px"} vlv={"90px"} />
        </div>
        <div className="info-box">
          <h3>Related Education</h3>
          <CreateResumeList use={"rel"} mr={"0px"} mb={"20px"} clv={"76px"} vlv={"90px"} />
        </div>
      </section>

      <section className="career-wrap sec">
        <SectionTitle title="Experience" />
        <div className="info-box">
          <CreateResumeList use={'exp'} mr={"10px"} mb={"90px"} clv={"160px"} vlv={"174px"} />
        </div>
      </section>

      <section className="introduction-wrap sec">
        <SectionTitle title="Introduction" />
        <div className="info-box">
          <CreateResumeIntroduction />
        </div>
      </section>
    </div>
  );
};

export default Resume;
