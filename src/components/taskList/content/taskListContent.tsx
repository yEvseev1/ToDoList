import Card from "@/components/card/card";
import {Input} from "@/ui/input";
import {useTaskStore} from "@/components/taskList/tasks";

export default function TaskListContent() {
  const tasks = useTaskStore(State => State.tasks)
  return <div className='flex flex-col gap-8'>
    {
      tasks.map((item, ) =>
        <Card key={item.id} isComplete={item?.complete}>
          {
            item.complete ? <Input type='checkbox' disabled={item.complete} className='w-[25px] h-[25px] bg-white'
                                   checked={item.complete}
            /> : <Input type='checkbox' className='w-[25px] h-[25px] bg-white'/>
          }
          {item?.task}
        </Card>
      )
    }
  </div>
}