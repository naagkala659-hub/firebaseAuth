import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import API from './Components/Api'
import Userform from './Components/Userform'
import Login from './Components/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/home' Component={API}/>
        <Route path='/SignUP' Component={Userform}/>
        <Route path='/login' Component={Login}/>
      </Routes>

    </>
  )
}

export default App
