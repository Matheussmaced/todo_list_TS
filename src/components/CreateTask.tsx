import styles from './styles/CreateTask.module.css'

export const CreateTask = () => {
    return(
        <div className={styles.createTask}>
            <p className={styles.newCreateTasks}>
                Tarefas criadas
                <span>
                    0
                </span>
            </p>
            <p className={styles.completed}>
                Concluídas
                <span>
                    0
                </span>
            </p>
        </div>
    )
}