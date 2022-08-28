import React from "react";
import "./Template.css";

const Template = ({ children, todoLength, completeNumber }) => {
  return (
    <div className="Template">
      <div className="title">
        Tasks {completeNumber}/{todoLength}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
