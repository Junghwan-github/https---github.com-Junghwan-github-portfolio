import React from "react";

const IntroRender = () => {
  return (
      <div className="background-video">
        <video autoPlay loop muted playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/assets/video/199558-910609536_small.mp4`}
            type="video/mp4"
          />
        </video>
      <p>
        빛나는 ─
        <br></br>
        풀스택 개발자 
        <br></br>
        박정환입니다.
      </p>
    </div>
  );
};

export default IntroRender;
