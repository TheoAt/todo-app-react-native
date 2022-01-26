import React, { useState } from 'react'
import Header from './Header'
import InputModal from './InputModal'
import ListTasks from './ListTasks'

const Home = () => {

    const getDate = () => {
        const day = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()

        let finalMonth = ''
        switch(month.toString()) {
            case '0':
                finalMonth = 'JANVIER'
                break
            case '1':
                finalMonth = 'FEVRIER'
                break
            case '2':
                finalMonth = 'MARS'
                break
            case '3':
                finalMonth = 'AVRIL'
                break
            case '4':
                finalMonth = 'MAI'
                break
            case '5':
                finalMonth = 'JUIN'
                break
            case '6':
                finalMonth = 'JUILLET'
                break
            case '7':
                finalMonth = 'AOUT'
                break
            case '8':
                finalMonth = 'SEPTEMBRE'
                break
            case '9':
                finalMonth = 'OCTOBRE'
                break
            case '10':
                finalMonth = 'NOVEMBRE'
                break
            default:
                finalMonth = 'DECEMBRE'
        }

        const hours = new Date().getHours()
        const minutes = new Date().getMinutes()

        return(day + ' ' + finalMonth + ' ' + year + ' - ' + hours + 'h' + minutes)
    }

    //Initial tasks
    const initialTasks = [
        {
            title: "Finir cette application",
            date: `${getDate()}`,
            key: '1'
        },
        {
            title: "Compléter ma liste de tâches",
            date: `${getDate()}`,
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

    //ADD TASK
    const handleAddTask = (task) => {
        const newTask = [task, ...tasks]
        setTasks(newTask)
        setModalOn(false)
    }

    //EDITING TASK
    const [ taskToBeEdited, setTaskToBeEdited ] = useState(null)

    const handleEditingTask = (task) => {
        setTaskToBeEdited(task)
        setModalOn(true)
        setTaskInputValue(task.title)
    }

    const handleEditTask = (editedTask) => {
        const newTasks = [...tasks]
        const taskIndex = tasks.findIndex((task) => task.key === editedTask.key)
        newTasks.splice(taskIndex, 1, editedTask)
        setTasks(newTasks)
        setTaskToBeEdited(null)
        setModalOn(false)
    }

    return(
        <>
            <Header clearTasks={handleClearTasks} />
            <ListTasks tasks={tasks} setTasks={setTasks} handleEditingTask={handleEditingTask} />
            <InputModal
                tasks={tasks}
                getDate={getDate}
                modalOn={modalOn}
                setModalOn={setModalOn}
                taskInputValue={taskInputValue}
                setTaskInputValue={setTaskInputValue}
                handleAddTask={handleAddTask}
                taskToBeEdited={taskToBeEdited}
                setTaskToBeEdited={setTaskToBeEdited}
                handleEditTask={handleEditTask}
            />
        </>
    )
}

export default Home