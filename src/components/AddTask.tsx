import { useState } from 'react';
import Button from './Button';

type AddTaskProps = {
  onAddTask: (text: string) => void
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        label='Add'
        onClick={() => {
          setText('');
          onAddTask(text);
        }} />
    </>
  );
}
