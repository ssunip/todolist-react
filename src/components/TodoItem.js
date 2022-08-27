import React from "react";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? <MdCheckCircleOutline /> : <MdRadioButtonUnchecked />}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
