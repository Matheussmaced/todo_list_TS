import { useState, FormEvent } from 'react'
import styles from './styles/AddTask.module.css'

import {IoMdAddCircleOutline} from 'react-icons/io'

interface addTaskProps{
    newTaskUser: (value:string)=>void;
}

export const AddTask = ({ newTaskUser }:addTaskProps) => {

    const [value, setValue] = useState(''); 

    function valueUser(event: FormEvent){
        event.preventDefault()

    }

    function onSubmit(){
        newTaskUser(value)
    }

    return(
        <div className={styles.addTask}>
            <form onClick={valueUser}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={(event) => setValue(event.target.value)}
                />
            </form>
            <button onClick={onSubmit}>
                    Criar
                    <IoMdAddCircleOutline size={16} />
                </button>
        </div>
    )
} 