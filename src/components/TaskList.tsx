import { TaskData } from "../data/task";
import { Task } from "./Task";


type TaskListProps = {
  tasks: TaskData[];
  onChangeTask: (task: TaskData) => void;
  onDeleteTask: (id: number) => void;
};

export default function TaskList(
  { tasks, onChangeTask, onDeleteTask }: TaskListProps
) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}


