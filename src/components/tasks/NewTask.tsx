import React, { useContext, useRef, useState } from "react";
import { ProjectContext } from "../../store/project-context";

const NewTask: React.FC<{ projectId: string }> = ({ projectId }) => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  const projectCtx = useContext(ProjectContext);

  const [enteredTask, setEnteredTask] = useState("");

  const taskInputChangeHandler = () => {
    setEnteredTask(taskInputRef.current!.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (enteredTask.trim().length !== 0) {
      projectCtx.addTask(projectId, enteredTask);
      taskInputRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        required
        ref={taskInputRef}
        onChange={taskInputChangeHandler}
      />
      <button>Add Task</button>
    </form>
  );
};

export default NewTask;
