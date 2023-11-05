import React, { useContext } from "react";

import TaskList from "./TaskList";
import NewTask from "./NewTask";
import { Task } from "../../models/project";
import { ProjectContext } from "../../store/project-context";

const Tasks: React.FC<{ items: Task[] }> = ({ items }) => {
  const projectCtx = useContext(ProjectContext);

  const tasks = projectCtx.projects.find(
    (project) => project.id === projectCtx.isActive
  )!.tasks;

  return (
    <div className="tasks">
      <h3>Tasks</h3>
      <NewTask />
      {tasks!.length !== 0 && <TaskList items={items} />}
    </div>
  );
};

export default Tasks;
