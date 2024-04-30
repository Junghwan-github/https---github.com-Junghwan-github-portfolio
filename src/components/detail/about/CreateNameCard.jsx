import React from "react";
import ResumeNameCard from "../../../data/ResumeNameCard.json";

const CreateNameCard = ({path, addr}) => {
  return (
    <ul className="basic-info">
      <li>
        <div className="profile-images">
          <img
            src={`${process.env.PUBLIC_URL}/${path}`}
            alt="프로필 사진"
          />
        </div>
      </li>
      <li>
        <ul>
            {ResumeNameCard.map((nameItem) => (
                <li key={nameItem.id}>
                 <span className="name-info">{nameItem.content}</span>
               </li>
            ))}
          <li>
            <span className="name-address">{addr}</span>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default CreateNameCard;
