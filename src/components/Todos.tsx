import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";
import { useContext } from "react";

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items.map((todo) => (
        <TodoItem item={todo} />
      ))}
    </ul>
  );
};

export default Todos;
