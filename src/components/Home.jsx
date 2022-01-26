import React, { useState } from 'react'
import Header from './Header'
import InputModal from './InputModal'
import ListTasks from './ListTasks'

const Home = () => {
    //Initial tasks
    const initialTasks = [
        {
            title: "Finir cette application",
            date: 'Fri, 08 Jan 2022 16:32:11 GMT',
            key: '1'
        },
        {
            title: "Compléter ma liste de tâches",
            date: 'Fri, 08 Jan 2022 16:32:11 GMT',
            key: '2'
        }
    ]

    const [tasks, setTasks] = useState(initialTasks)

    //CLEAR ALL TASKS
    const handleClearTasks = () => {
        setTasks([])
    }

    //MODAL & INPUT
    const [ modalOn, setModalOn ] = useState(false)
    const [ taskInputValue, setTaskInputValue ] = useState()

    return(
        <>
            <Header clearTasks={handleClearTasks} />
            <ListTasks tasks={tasks} setTasks={setTasks} />
            <InputModal modalOn={modalOn} setModalOn={setModalOn} taskInputValue={taskInputValue} setTaskInputValue={setTaskInputValue} />
        </>
    )
}

export default Home