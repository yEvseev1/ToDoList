import {create} from "zustand";
import {state} from "sucrase/dist/types/parser/traverser/base";

export interface Task {
  id: number,
  task: string,
  complete: boolean
}

interface TaskStore {
  tasks: Task[],
  addNewTask: (task: Task) => void,
  removeTask?: (index: number) => void,
  clearCompleted?: () => void,
  
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    {
      id: 1,
      task: '1',
      complete: true,
    },
    {
      id: 2,
      task: '2',
      complete: false,
    },
    {
      id: 3,
      task: '3',
      complete: false,
    },
    {
      id: 4,
      task: '4',
      complete: true,
    },
    {
      id: 5,
      task: '5',
      complete: true,
    }
  ],
  addNewTask: (task: Task) => set(state => {
    const newTasks = [task, ...state.tasks];
    console.log("New task added. Current list of tasks:", newTasks);
    return {tasks: newTasks};
  })
  
  
}))


