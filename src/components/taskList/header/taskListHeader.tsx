
import {Badge} from "@/ui/badge";
import {useTaskStore} from "@/components/taskList/tasks";


export default function TaskListHeader() {
  const tasks = useTaskStore(State => State.tasks)
  const completeCounter = tasks.reduce((acc, item) => {
    if (item.complete) {
      acc++;
    }
    return acc;
  }, 0)
  
  return <div className='w-full flex justify-between'>
    <div className='flex items-center gap-2'>
      <span>Total tasks:</span> <Badge>{tasks.length}</Badge>
    </div>
    <div>
      <span>Completed:</span> <Badge>{completeCounter} in {tasks.length}</Badge>
    </div>
  </div>
}