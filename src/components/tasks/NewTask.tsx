import React, { useContext, useRef, useState } from "react";
import { ProjectContext } from "../../store/project-context";
import Button from "../UI/Button";
import Input from "../UI/Input";

const NewTask: React.FC = () => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  const projectCtx = useContext(ProjectContext);

  const [enteredTask, setEnteredTask] = useState("");

  const taskInputChangeHandler = () => {
    setEnteredTask(taskInputRef.current!.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (enteredTask.trim().length !== 0) {
      const projectId = projectCtx.isActive;
      projectCtx.addTask(projectId, enteredTask);
      taskInputRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler} className="task-form">
      <Input
        type="text"
        required
        ref={taskInputRef}
        onChange={taskInputChangeHandler}
      />
      <Button>Add Task</Button>
    </form>
  );
};

export default NewTask;
