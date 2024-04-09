import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/Home/HomePages'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePages/>}/>
    </Routes>
  )
}

export default AppRoutes;