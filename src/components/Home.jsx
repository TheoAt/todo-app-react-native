import React, { useState } from 'react'
import Header from './Header'
import InputModal from './InputModal'
import ListTasks from './ListTasks'

//ASYNC STORAGE
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({ tasks, setTasks, getDate, name }) => {

    //CLEAR ALL TASKS
    const handleClearTasks = () => {
        AsyncStorage.setItem("storedTasks", JSON.stringify([])).then(() => {
            setTasks([])
        }).catch(error => console.log('error:', error))
    }

    //MODAL & INPUT
    const [ modalOn, setModalOn ] = useState(false)
    const [ taskInputValue, setTaskInputValue ] = useState()

    //ADD TASK
    const handleAddTask = (task) => {
        const newTasks = [task, ...tasks]

        AsyncStorage.setItem("storedTasks", JSON.stringify(newTasks)).then(() => {
            setTasks(newTasks)
            setModalOn(false)
        }).catch(error => console.log('error:', error))
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

        AsyncStorage.setItem("storedTasks", JSON.stringify(newTasks)).then(() => {
            setTasks(newTasks)
            setModalOn(false)
            setTaskToBeEdited(null)
        }).catch(error => console.log('error:', error))
    }

    return(
        <>
            <Header clearTasks={handleClearTasks} />
            <ListTasks
                tasks={tasks}
                setTasks={setTasks}
                handleEditingTask={handleEditingTask}
            />
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