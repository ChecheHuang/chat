import './app.scss'
import Center from '../src/components/Center'
import LeftBar from '../src/components/LeftBar'
import TopBar from '../src/components/TopBar'
import { io } from 'socket.io-client'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    setSocket(io('ws://localhost:5000'))
  }, [])
  useEffect(() => {
    socket?.on('welcome', (msg) => {
      console.log(msg)
    })
  }, [socket])
  return (
    <>
      <TopBar />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <Center />
      </div>
    </>
  )
}
export default App
