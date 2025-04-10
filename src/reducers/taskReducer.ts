import { TaskData } from "../data/task";

type Action =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: TaskData }
  | { type: 'deleted'; id: number };

export default function tasksReducer(tasks: TaskData[], action: Action) {
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case 'changed': {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + (action as Action).type);
      }
    }
  }
  