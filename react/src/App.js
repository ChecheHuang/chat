import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'

export default function App() {
  const [user, setUser] = useState('Carl')

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/chat" element={<Chat user={user} />} />
        </Routes>
      </Router>
    </>
  )
}
