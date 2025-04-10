import { expect, describe, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Task } from '../../src/components/Task';
import { TaskData } from '../../src/data/task';


describe('Task Component', () => {
    beforeEach(cleanup)
    it('test Task component with state', () => {
        let task: TaskData | null = { id: 1, text: 'Click Me', done: false };
        const taskJsx = (<Task
            task={task}
            onChange={newTask => {task = newTask}}
            onDelete={() => { task = null}}            
        />)
        render(taskJsx);
        const editBtn = screen.getByText('Edit');
        const delBtn = screen.getByText('Delete');
        fireEvent.click(editBtn);
        const saveBtn = screen.getByText('Save');
        const input = screen.getByRole("input")
        fireEvent.change(input, {target: {value: "hello world"}})
        fireEvent.click(saveBtn);
        expect(task?.text).toBe("hello world");
        fireEvent.click(delBtn);
        expect(task).toBe(null);
    });

});