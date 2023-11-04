import React from "react";

import TaskList from "./TaskList";
import NewTask from "./NewTask";
import { Task } from "../../models/project";

const Tasks: React.FC<{ items: Task[]; projectId: string }> = ({
  items,
  projectId,
}) => {
  return (
    <div>
      <h1>Tasks</h1>
      <NewTask projectId={projectId} />
      <TaskList items={items} projectId={projectId} />
    </div>
  );
};

export default Tasks;
