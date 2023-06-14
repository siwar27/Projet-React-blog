import React from 'react'
import Menu from './composants/Menu'
import { Outlet } from 'react-router-dom'
import "./App.css"
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
      <div className='container'>
        <Menu />
        <Outlet />
      </div>
    </AuthContextProvider>
  )
}

export default App

// créer un Composant Menu qui contient 2 liens 
// Accueil => /
// Login => /login 