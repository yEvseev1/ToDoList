import CreateNewTask from "@/components/createNewTask/createNewTask";
import TaskBoard from "@/components/taskList/taskBoard";


export default function Home() {
  return <div className='flex flex-col items-center'>
    <CreateNewTask/>
    <TaskBoard/>
  </div>
}
