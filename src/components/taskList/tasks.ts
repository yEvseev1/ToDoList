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
  removeTask: (id: number) => void,
  resetComplete: (id: number) => void
  clearCompleted?: () => void,
  setCompleteTask: (id: number) => void
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
    const newTaskList = [task, ...state.tasks];
    return {tasks: newTaskList};
  }),
  
  removeTask: (id: number) => set(state => {
    const newTaskList = state.tasks.filter(item => item.id != id)
    console.log(newTaskList, id)
    return {tasks: newTaskList}
  }),
  
  resetComplete: (id: number) => set(state => {
    const newTaskList = state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          complete: false
        }
      } else {
        return task
      }
    })
    return {tasks: newTaskList}
  }),
  setCompleteTask: (id: number) => set(state => {
    const newTaskList = state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          complete: true
        }
      } else {
        return task
      }
    })
    return {tasks: newTaskList}
  })
  
  
}))


