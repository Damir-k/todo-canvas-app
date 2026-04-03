import React from "react";

import "../App.css";


export const TaskItem = (props) => {
  const { item, index, onDone, onDelete } = props;
  return (
    <li
      className = "task-item"
      //key       = {item.id}
    >
      <input
        className = "done-item"
        type      = "checkbox"
        checked   = {item.completed}
        onChange  = {(event) => onDone(item) }
      />
      
      <span>
        <span
          style = {{ fontWeight: "bold" }}
        >{index + 1}. </span>
        <span
          style = {{ textDecorationLine: item.completed ? "line-through" : "none", }}
        >
          {item.title}
        </span>
      </span>
      
      <button
        className = "delete-item"
        type      = "button"
        onClick   = {(event) => onDelete(item)}
      >X</button>
    </li>
  )
}


