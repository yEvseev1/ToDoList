'use client'
import TaskListContent from "@/components/taskList/content/taskListContent";
import TaskListHeader from "@/components/taskList/header/taskListHeader";
import TaskListFooter from "@/components/taskList/footer/taskListFooter";
import {useState} from "react";

export enum Filter {
  All,
  Active,
  Completed
}

export default function TaskBoard() {
  const [filter, setFilter] = useState<Filter>(Filter.All)
  
  return <div className='flex flex-col items-center gap-4 max-w-[400px] w-full'>
    <TaskListHeader/>
    <TaskListContent filter={filter}/>
    <TaskListFooter filter={filter} setFilter={setFilter}/>
  </div>
}