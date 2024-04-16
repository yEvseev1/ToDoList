'use client'
import Card from "@/components/card/card";
import {Input} from "@/ui/input";
import {tasks} from "@/components/tasks";


export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
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
  )
}
