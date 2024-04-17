import {create} from "zustand";

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
      task: 'fdsfd sf f fdsf sd fsd fsd fdsf sd fsd fsd 1',
      complete: true,
    },
    {
      id: 2,
      task: 'fdsfd sf f fdsf sd fsd fsd sd fsd fsd sd fsd fsd 2',
      complete: false,
    },
    {
      id: 3,
      task: 'fdsfd sf f fdsf sd fsd fsd 3',
      complete: false,
    },
    {
      id: 4,
      task: 'fdsfd sf f fdsf sd fsd fsd 4',
      complete: true,
    },
    {
      id: 5,
      task: 'fdsfd sf f fdsf sd fsd fsd 5',
      complete: true,
    }
  ],
  addNewTask: (task: Task) => set(state => ({tasks: [task, ...state.tasks]})),
  
  
}))


