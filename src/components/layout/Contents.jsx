import React from "react";

const Contents = ({ children }) => {

  return (
      <main id="main" role="main">
        <div className="contents-container">{children}</div>
      </main>

  );
};

export default Contents;
