import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { CreateTask } from './components/CreateTask'
import { Tasks } from './components/Tasks'
import { useState } from 'react'

interface task{
  id: number;
  content: string;
  checked: boolean;
}

function App() {

  const [tasks, setTasks] = useState<task[]>([])
 

  function onNewTasks(value:string){
    return setTasks(prevTask => [...prevTask, {id: new Date().getTime(),
                    content: value,
                    checked: false,}]
                    )
  }

  return (
    <>
      <Header />
      <AddTask newTaskUser={onNewTasks} />
      <CreateTask />
      <Tasks newTasks={tasks} />     
    </>
  )
}

export default App
