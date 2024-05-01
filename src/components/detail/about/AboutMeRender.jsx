import React from "react";
import { SectionTitle } from "../Common";
import CreateResumeList from "./CreateResumeLIstBox";
import CreateResumeIntroduction from "./CreateIntroductionBox";
import CreateNameCard from "./CreateNameCard";


const AboutMeRender = () => {

  let titleBarColor = "#08D9D6";
  let nameCardImagePath = "assets/images/face-photo.png";

  return (
    <div className="me__wrap">
      <section className="profile-wrap sec">
        <SectionTitle title="About Me" bgc={titleBarColor} />
        <CreateNameCard path={nameCardImagePath} addr={"대구광역시 북구"} />
        <div className="info-box">
          <h3>Education</h3>
          <CreateResumeList use={"edu"} mr={"0px"} mb={"0px"} clv={"76px"} vlv={"90px"} />
        </div>
        <div className="info-box">
          <h3>Related Education</h3>
          <CreateResumeList use={"rel"} mr={"0px"} mb={"20px"} clv={"76px"} vlv={"90px"} />
          <a
            href={`${process.env.PUBLIC_URL}/assets/doc/doc-certificate.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            수료증 보기
          </a>
        </div>
      </section>

      <section className="career-wrap sec">
        <SectionTitle title="Experience" bgc={titleBarColor} />
        <div className="info-box">
          <CreateResumeList use={"exp"} mr={"10px"} mb={"90px"} clv={"160px"} vlv={"174px"} />
        </div>
      </section>

      <section className="introduction-wrap sec">
        <SectionTitle title="Introduction" bgc={titleBarColor} />
        <div className="info-box">
          <CreateResumeIntroduction />
        </div>
      </section>
    </div>
  );
};

export default AboutMeRender;
