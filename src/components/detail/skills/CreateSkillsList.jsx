import React from "react";
import SkillsFrontendIcon from "../../../data/SkillsFrontendIcon.json";
import SkillsBackendIcon from "../../../data/SkillsBackendIcon.json";
import SkillsToolsIcon from "../../../data/SkillsToolsIcon.json";

function CreateSkillsList({ use }) {
  let skillsData;

  // eslint-disable-next-line default-case
  switch (use) {
    case "front":
      skillsData = SkillsFrontendIcon;
      break;

    case "back":
      skillsData = SkillsBackendIcon;
      break;

    case "tools":
      skillsData = SkillsToolsIcon;
  }

  return (
    <ul className="skills-list">
      {skillsData.map((skillsItem) => (
        <li key={skillsItem.id}>
          <div className="item-icon">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icon/${skillsItem.path}`}
              alt={skillsItem.alt}
            />
          </div>
          <span className="item-content">{skillsItem.name}</span>
          <div className="proficiency-wrap">
            <span>Proficiency</span>
            <div className="proficiency-graph">
              <div
                className="graph-fill" data-fill={`${skillsItem.graph}%`}
                style={{ "--fill": `${skillsItem.graph}%` }} 
              ></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CreateSkillsList;
