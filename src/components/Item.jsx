import React from "react";
import "../CSS/item.css";
import { TaskContext } from "../context/Context";
import { useContext } from "react";

function Item(props) {
  const { CompleteTodos, DeleteTodo } = useContext(TaskContext);

  return (
    <li className="item">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={() => CompleteTodos(props.text)}
      >
        {" "}
        √{" "}
      </span>
      <p className={`item-p ${props.completed && "item-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={() => DeleteTodo(props.text)}>
        {" "}
        X
      </span>
    </li>
  );
}

export default Item;
