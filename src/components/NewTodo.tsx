import React, { useState, useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const [enteredText, setEnteredText] = useState("");

  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const inputChangeHandler = () => {
    const newEnteredText = todoTextInputRef.current!.value;
    setEnteredText(newEnteredText);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredText.trim().length === 0) return;

    todosCtx.addTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todoText">Todo text</label>
      <input
        type="text"
        name="todoText"
        id="todoText"
        ref={todoTextInputRef}
        onChange={inputChangeHandler}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
