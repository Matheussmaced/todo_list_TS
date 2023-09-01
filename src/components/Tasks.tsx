import { BsTrash } from 'react-icons/bs'

import styles from './styles/Tasks.module.css'

interface task{
    id: number;
    content: string;
    checked: boolean;
  }

interface tasksProps{
    newTasks: task[];
    removeTask: (id:number)=>void;
    markTaskChecked: (id:number)=>void;
}

export const Tasks = ({newTasks, removeTask, markTaskChecked}:tasksProps) => {    

// mudar o estilo do botão e adicionar checked 

    return(
        <div className={styles.tasksConteiner}>
            {newTasks.map(newTask => (
                <div className={styles.tasks} key={newTask.id}>
                    <span
                        onClick={() => markTaskChecked(newTask.id)}>
                            {newTask.checked ?
                                <div className={styles.checked}>✓</div> : ''
                            }
                    </span>

                    <p>{newTask.content}</p>
                    <button onClick={() => removeTask(newTask.id)}>
                        {<BsTrash className ={styles.trash} />}
                    </button>
                </div>
            ))}
        </div>
    )
}