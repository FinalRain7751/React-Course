import Todos from "./components/Todos";

import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider className="todos">
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
