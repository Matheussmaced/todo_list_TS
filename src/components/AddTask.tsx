import { useState, FormEvent, KeyboardEvent } from 'react'
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

    const enterKey = 13;
    const escapeKey = 27;

    function onSubmit(){
        if(value){
            newTaskUser(value)
        }
    }

    function pressEnter(event:KeyboardEvent){
        const eventEnterKey = event.which === enterKey;

        if(eventEnterKey){
            event.preventDefault()
            onSubmit()
        }
    }

    function pressEsc(event:KeyboardEvent){
        const eventScapeKey = event.which === escapeKey;

        if(eventScapeKey){
            setValue('')
        }
    }

    return(
        <div className={styles.addTask} onKeyDown={pressEsc}>
            <form onClick={valueUser}> 
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    onKeyDown={pressEnter}
                />
            </form>
            <button onClick={onSubmit}>
                    Criar
                    <IoMdAddCircleOutline size={16} />
                </button>
        </div>
    )
} 