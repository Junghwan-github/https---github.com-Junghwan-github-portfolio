import React from "react";
import { SectionTitle } from "../common";

const Profile = () => {
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
          <h3>EDUCATION</h3>
          <ul className="info-ul">
            <li>
                <span className="li-date">
                    2005. 08
                </span>
                <div className="li-title">
                    <h4>대구한의대학교 전산정보보호학과 중퇴</h4>
                </div>
            </li>
            <li>
            <span className="li-date">
                    2004. 02
                </span>
                <div className="li-title">
                    <h4>대구중앙경영정보고등학교 정보처리학과 졸업</h4>
                </div>
            </li>
            <span className="h-line"></span>
          </ul>
        </div>
        <div className="info-box">
          <h3>AWARDS</h3>
          <ul className="info-ul">
            <li>
                <span className="li-date">
                    2024. 02
                </span>
                <div className="li-title">
                    <h4>영남 인재교육원 표창</h4>
                    <p>JAVA / Spring Boot 백엔드 개발 교육 우수 이수자 표창</p>
                </div>
            </li>
            <li>
            <span className="li-date">
                    2004. 02
                </span>
                <div className="li-title">
                    <h4>대구중앙경영정보고등학교 정보처리학과 졸업</h4>
                </div>
            </li>
            <span className="h-line"></span>
          </ul>
        </div>
        
      </section>
      <section className="career-wrap sec">
        <SectionTitle title="Experience" />
      </section>
      <section className="introduction-wrap sec">
        <SectionTitle title="Introduction" />
      </section>
    </div>
  );
};

export default Profile;
