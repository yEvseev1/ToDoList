import Card from "@/components/card/card";
import {Input} from "@/ui/input";
import {useTaskStore} from "@/components/taskList/tasks";
import {Button} from "@/ui/button";
import {TrashIcon} from "lucide-react";
import Dropdown from "@/components/taskList/content/dropdown";


export default function TaskListContent() {
  const {tasks, setCompleteTask} = useTaskStore()
  return <div className='flex flex-col gap-8'>
    {
      tasks.map((item) =>
        <Card key={item.id} isComplete={item?.complete}>
          <div className='flex gap-4'>
            {
              item.complete ? <>
                  <Input type='checkbox' disabled={item.complete} className='w-[25px] h-[25px] bg-white'
                         checked={item.complete}
                  />
                </>
                :
                <Input type='checkbox' className='w-[25px] h-[25px] bg-white' onClick={() => {
                  setCompleteTask(item.id)
                }}/>
              
              
            }
            <span className={`${item.complete && 'line-through'}  `}>
              {item?.task}
            </span>
          </div>
          <Dropdown task={item}/>
        </Card>
      )
    }
  </div>
}