import { useState } from 'react';
import Button from './Button';

export default function AddTask({ onAddTask }: { onAddTask: (text: string) => void }) {
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
