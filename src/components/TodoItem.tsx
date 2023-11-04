import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: Todo }> = (props) => {
  const todosContext = useContext(TodosContext);
  return (
    <li
      key={props.item.id}
      className={classes.item}
      onClick={todosContext.removeTodo.bind(null, props.item.id)}
    >
      {props.item.text}
    </li>
  );
};

export default TodoItem;
