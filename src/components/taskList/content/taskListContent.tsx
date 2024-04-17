import Card from "@/components/card/card";
import {Input} from "@/ui/input";
import {useTaskStore} from "@/components/taskList/tasks";

export default function TaskListContent() {
  const tasks = useTaskStore(State => State.tasks)
  return <div className='flex flex-col gap-8'>
    {
      tasks.map((item, index) =>
        <Card key={index} isComplete={item?.complete}>
          <Input type='checkbox' disabled={item.complete} className='w-[25px] h-[25px] bg-white'
                 checked={item.complete ? true : undefined}
          />
          {item?.task}
        </Card>
      )
    }
  </div>
}