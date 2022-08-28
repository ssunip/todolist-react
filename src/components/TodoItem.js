import React from "react";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckCircleOutline
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdRadioButtonUnchecked
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
