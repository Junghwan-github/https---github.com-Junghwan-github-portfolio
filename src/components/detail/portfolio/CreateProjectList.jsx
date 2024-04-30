import React from "react";
import ProjectListItem from "../../../data/ProjectListItems.json";
import CreateProjectItemBox from "./CreateProjectItem";

const CreateProjectList = () => {

  return (
      <div className="item-list">
        <ul>
          {ProjectListItem.map((listItem) => (
            <li key={listItem.id}  >
              <CreateProjectItemBox listItem={listItem} />
            </li>
          ))}
        </ul>
      </div>
  );
};

export default CreateProjectList;
