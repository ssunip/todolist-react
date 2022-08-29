import React from "react";
import "./Template.css";

const Template = ({ children, todoLength, completeNumber }) => {
  return (
    <div className="Template">
      <div className="title">
        <span className="tasks">Tasks</span>
        <div className="tasks-count">
          <span className="complete-tasks">{completeNumber}</span>
          <spna className="all-tasks">/ {todoLength}</spna>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
