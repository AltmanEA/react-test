import { useState } from "react";
import Button from "./Button";
import { TaskData } from "../data/task";

type TaskProps = {
    task: TaskData,
    onChange: (task: TaskData) => void,
    onDelete: (id: number) => void
}

export function Task({ task, onChange, onDelete }: TaskProps) {
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
                    role="input"
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