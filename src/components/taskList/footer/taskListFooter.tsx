import {Filter} from "@/components/taskList/taskBoard";
import {Button} from "@/ui/button";
import {DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger} from "@/ui/dropdown-menu";
import * as React from "react";
import {useTaskStore} from "@/components/taskList/tasks";


export default function TaskListFooter({filter, setFilter}:
                                         { filter: Filter, setFilter: (value: Filter) => void }) {
  
  const {clearCompleted} = useTaskStore()
  return <div className='mb-8 flex w-full justify-between items-center'>
    <Button variant='outline' onClick={() => clearCompleted()}>
      Clear completed
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{Filter[filter]}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem onClick={() => setFilter(Filter.All)}>
          All
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setFilter(Filter.Active)}>
          Active
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setFilter(Filter.Completed)}>
          Completed
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
}