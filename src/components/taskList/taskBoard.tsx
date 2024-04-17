'use client'
import TaskListContent from "@/components/taskList/content/taskListContent";
import TaskListHeader from "@/components/taskList/header/taskListHeader";
import TaskListFooter from "@/components/taskList/footer/taskListFooter";


export default function TaskBoard() {
  return <div className='flex flex-col items-center gap-4'>
    <TaskListHeader/>
    <TaskListContent/>
    <TaskListFooter/>
  </div>
}