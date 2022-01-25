import React, { useState } from 'react'
import Header from './Header'
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

    const [data, setData] = useState(initialTasks)

    return(
        <>
            <Header />
            <ListTasks tasks={data} setTasks={setData} />
        </>
    )
}

export default Home