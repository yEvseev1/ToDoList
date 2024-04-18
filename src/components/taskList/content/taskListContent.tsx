import Card from "@/components/card/card";
import {Input} from "@/ui/input";
import {useTaskStore} from "@/components/taskList/tasks";
import Dropdown from "@/components/taskList/content/dropdown";
import {filteredTasks} from "@/lib/utils";
import {Filter} from "@/components/taskList/taskBoard";


export default function TaskListContent({filter}: { filter: Filter }) {
  const {tasks, setCompleteTask} = useTaskStore()
  
  return <div className='flex flex-col gap-8 w-full justify-center'>
    {
      filteredTasks(filter, tasks).map((item) =>
        <Card key={item.id} isComplete={item?.complete}>
          <div className='flex gap-4 items-center'>
            <div>
              {
                item.complete ? <div>
                    <Input type='checkbox' disabled={item.complete} className='w-[25px] h-[25px] bg-white'
                           checked={item.complete}
                    />
                  </div>
                  :
                  <Input type='checkbox' className='w-[25px] h-[25px] bg-white' onClick={() => {
                    setCompleteTask(item.id)
                  }}/>
              }
            </div>
            <div className={`${item.complete && 'line-through'}`}>
              {item?.task}
            </div>
          </div>
          <div>
            <Dropdown task={item}/>
          </div>
        </Card>
      )
    }
  </div>
}