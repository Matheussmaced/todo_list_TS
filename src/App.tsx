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
    
    const newUserTasks =  {
      id: new Date().getTime(),
      content: value,
      checked: false,
    }

    return setTasks(prevTask => [...prevTask, newUserTasks])
  }

  function removeTask(id:number){
    return setTasks(prevTask => prevTask.filter(tasks => tasks.id !== id))
  }

  // fazer o checked em casa um
  function markTaskAsChecked(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((taskTest) => {
        if (taskTest.id === id) {
          return { ...taskTest, checked: !taskTest.checked };
        }
        return taskTest;
      })
    );
  }

  return (
    <>
      <Header />
      <AddTask newTaskUser={onNewTasks} />
      <CreateTask />
      <Tasks newTasks={tasks} removeTask={removeTask} markTaskChecked={markTaskAsChecked}/>     
    </>
  )
}

export default App
