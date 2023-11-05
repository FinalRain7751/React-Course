import { Task } from "../../models/project";
import TaskItem from "./TaskItem";

const TaskList: React.FC<{ items: Task[] }> = ({ items }) => {
  return (
    <ul className="task-list">
      {items.map((task) => (
        <TaskItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

export default TaskList;
