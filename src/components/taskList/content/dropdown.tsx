'use client'
import * as React from "react"

import {Button} from "@/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import {Task, useTaskStore} from "@/components/taskList/tasks";

export default function Dropdown({task}: { task: Task }) {
  
  const {removeTask, resetComplete} = useTaskStore()
  
  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size='icon' className='w-[30px] h-[30px] no-underline'>...</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Options</DropdownMenuLabel>
      <DropdownMenuSeparator/>
      <DropdownMenuCheckboxItem onClick={() => {
        removeTask(task.id)
      }}>
        Delete
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem onClick={() => {
        resetComplete(task.id)
      }}>
        Reset complete
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
}