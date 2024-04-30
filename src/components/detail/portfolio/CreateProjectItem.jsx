import React, { useState } from "react";
import { useModal } from "../../layout/ModalContext";

const CreateProjectItemBox = ({ listItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useModal();

  const handleItemClick = () => {
    openModal();
  };

  return (
    <div
      className="item-box"
      style={{ "--img": `url("${process.env.PUBLIC_URL}/assets/images/${listItem.img}")` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="hover-view" style={{ display: isHovered ? "block" : "none" }} onClick={handleItemClick}>
        <h3>{listItem.title}</h3>
      </div>
    </div>
  );
};

export default CreateProjectItemBox;
