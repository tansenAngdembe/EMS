import { useState } from 'react'
import Landingpage from "./components/Landingpage"
import Register from './components/Register'
import { Routes, Route } from "react-router-dom"
import Adminlayout from './components/Adminlayout'
import { Dashboard } from './components/Dashboard'
import EmployeeManagement from './components/Employmanagement'
import { Settings } from './components/Setting'
import Pricing from './components/Pricing'
import { Login } from './components/Login'
import { Protectedroute } from './routes/Protectedrouts'


function App() {
  console.log( " form "+import.meta.env.VITE_API_URL)

  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/register' element ={<Register/> }/>
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/login' element={<Login/>}/>

        <Route path='/dashboard' element={<Protectedroute><Adminlayout/></Protectedroute>}>
           <Route  index element={<Dashboard/>} />
           <Route path='/dashboard/employees' element={<EmployeeManagement/>}/>
           <Route path='/dashboard/settings' element={<Settings/>}/>


        </Route>


      </Routes>

    </>
  )
}

export default App
