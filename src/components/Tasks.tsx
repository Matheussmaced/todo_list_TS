import { BsTrash } from 'react-icons/bs'

import styles from './styles/Tasks.module.css'

interface task{
    id: number;
    content: string;
    checked: boolean;
  }

interface tasksProps{
    newTasks: task[];
}

export const Tasks = ({newTasks}:tasksProps) => {    

    const idTask = newTasks.map(taskId => (taskId.id))
    const checkedTask = newTasks.map(taskChecked => (taskChecked.checked))

    console.log(idTask, checkedTask)

    return(
        <div className={styles.tasksConteiner}>
            {newTasks.map(newTask => (
                <div className={styles.tasks} key={newTask.id}>
                    <span></span>
                    <p>{newTask.content}</p>
                    {<BsTrash className ={styles.trash} />}
                </div>
            ))}
        </div>
    )
}