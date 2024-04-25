import React from "react";
import ResumeEducation from "../../../data/ResumeEducation.json";
import ResumeRelatedEducation from "../../../data/ResumeRelatedEducation.json";
import ResumeExperience from "../../../data/ResumeExperience.json";


function CreateResumeList({ use, mr, mb, clv, vlv }) {
  let resumeData;

  // eslint-disable-next-line default-case
  switch (use) {
    case "edu":
      resumeData = ResumeEducation;
      break;
    case "rel":
      resumeData = ResumeRelatedEducation;
      break;
    case "exp":
      resumeData = ResumeExperience;
  }

  return (
    <ul className="resume-list">
      {resumeData.map((resumeItem) => (
        <li key={resumeItem.id}>
          <span className="resume-item-date" style={{ "--left": clv , "--mr": mr }}>
            {resumeItem.date}
          </span>
          <div className="resume-item-title" style={{"--mb": mb}}>
            <h4>{resumeItem.title}</h4>
            {use !== "edu" &&
              resumeItem.content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </div>
        </li>
      ))}
      <span className="vertical-line" style={{ "--left": vlv }}></span>
    </ul>
  );
}

export default CreateResumeList;
