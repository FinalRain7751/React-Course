import React from "react";

import TaskList from "./TaskList";
import NewTask from "./NewTask";
import { Task } from "../../models/project";

const Tasks: React.FC<{ items: Task[] }> = ({ items }) => {
  return (
    <div className="tasks">
      <h3>Tasks</h3>
      <NewTask />
      <TaskList items={items} />
    </div>
  );
};

export default Tasks;
