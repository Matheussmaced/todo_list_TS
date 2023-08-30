import styles from './styles/Header.module.css'

import rocket from '../assets/rocket.svg'
import logo from '../assets/todo_logo.svg'

export const Header = () =>{
    return(
        <div className={styles.header}>
            <img src={rocket} alt="Rocket" />
            <img src={logo} alt="Logo todoList" />
        </div>
    )
}