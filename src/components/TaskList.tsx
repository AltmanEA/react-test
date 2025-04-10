import { useState } from 'react';
import Button from './Button';

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }:
  { tasks: Task[], onChangeTask: (task: Task) => void, onDeleteTask: (id: number) => void }
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

function Task({ task, onChange, onDelete }:
  { task: Task, onChange: (task: Task) => void, onDelete: (id: number) => void }
) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button label='Save' onClick={() => setIsEditing(false)} />
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button label='Edit' onClick={() => setIsEditing(true)} />
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <Button label='Delete' onClick={() => onDelete(task.id)} />
    </label>
  );
}
