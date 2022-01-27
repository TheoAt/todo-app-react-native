//IMPORT FROM LIBRARIES
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

//IMPORT COMPONENTS
import Home from './src/components/Home'

//IMPORT STYLES
import { Container } from './src/styles/appStyles'

//ASYNC STORAGE
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ ready, setReady ] = useState(false)

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
  const [ tasks, setTasks ] = useState([])

  const loadTasks = () => {
    AsyncStorage.getItem("storedTasks").then(data => {
      if(data !== null) {
        setTasks(JSON.parse(data))
      }
    }).catch(error => console.log('error:', error))
  }

  return (
    <>
      {!ready ?
        <AppLoading
          startAsync={loadTasks}
          onFinish={() => setReady(true)} 
          onError={console.warn}
        />
        :
        <Container>
          <Home tasks={tasks} setTasks={setTasks} getDate={getDate} />
          <StatusBar style='light'/>
        </Container>
      }
    </>
  );
}
