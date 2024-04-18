import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'
import {Filter} from "@/components/taskList/taskBoard";
import {Task} from "@/components/taskList/tasks";


export function concatTailwindClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function filteredTasks(filter: Filter, tasks: Task[]) {
  switch (filter) {
    case Filter.All:
      return tasks
    case Filter.Active:
      return tasks.filter(task => !task.complete)
    case Filter.Completed:
      return tasks.filter(task => task.complete)
  }
}
