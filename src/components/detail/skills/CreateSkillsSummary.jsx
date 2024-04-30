import React from "react";

const CreateSkillsSummary = () => {
  return (
    <div className="summary-content-container">
      <div className="summary-frontend">
        <h3>Frontend</h3>
        <ul>
          <li>
            <strong>HTML5 / CSS3</strong>
            <ul>
              <li>웹표준을 지키려 노력합니다. </li>
              <li>
                Flexbox와 Grid를 활용하여 레이아웃을 구축하고 반응형 디자인을
                구현할 수 있습니다.
              </li>
            </ul>
          </li>
          <li>
            <strong>JavaScript / jQuery</strong>
            <ul>
              <li>ES6+ 문법에 익숙합니다.</li>
              <li>
                이벤트 핸들링, DOM 조작, 데이터 처리 등을 자유롭게 다룰 수
                있습니다.
              </li>
              <li>
                jQuery를 활용하여 간결한 코드로 DOM 조작 및 애니메이션을 구현할
                수 있습니다.
              </li>
            </ul>
          </li>
          <li>
            <strong>React</strong>
            <ul>
              <li>
                리액트를 사용하여 모던하고 동적인 웹 애플리케이션을 개발할 수
                있습니다.
              </li>
              <li>
                컴포넌트 기반 아키텍처를 이해하고, 재사용 가능한 컴포넌트를
                작성할 수 있습니다.
              </li>
              <li>상태 관리 라이브러리인 Redux 를 활용하여 애플리케이션 상태를 효과적으로 관리할 수 있습니다.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="summary-backend">
        <h3>Backend</h3>
        <ul>
            <li>
                <strong>Java</strong>
                <ul>
                    <li>객체 지향 프로그래밍의 핵심 개념인 상속, 인터페이스 등을 이해하고 있습니다.</li>
                </ul>
            </li>
            <li>
                <strong>Spring Boot</strong>
                <ul>
                    <li>Spring Boot를 사용하여 CRUD 기능을 구현할 수 있습니다.</li>
                    <li>Security 와 OAuth 2.0의 개념을 이해하고 사용을 해본 경험이 있습니다.</li>
                </ul>
            </li>
            <li>
                <strong>PHP</strong>
                <ul>
                    <li>PHP를 사용하여 CRUD 기능을 구현할 수 있습니다.</li>
                    <li>그누보드5와 같은 PHP 기반의 CMS를 수정하고 사용할 수 있으며, 커스터마이징할 수 있습니다.</li>
                </ul>
            </li>
            <li>
                <strong>MySQL</strong>
                <ul>
                    <li>데이터를 구조화하고, 테이블 간의 관계를 설정하며 JOIN과 같은 쿼리 문도 활용할 수 있습니다.</li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateSkillsSummary;
