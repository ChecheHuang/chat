import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import './login.scss'

export default function Login({ setUser }) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  async function handleLogin() {
    try {
      const res = await axios.post('http://localhost:8900/api/login', {
        user: name,
      })
      if (res.data) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '登入成功',
          showConfirmButton: false,
          timer: 1500,
        })
        setUser(name)
        navigate('/chat')
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: '登入失敗',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="login">
      <div className="inputWrapper">
        <div className="inputArea">
          <label htmlFor="">輸入聊天姓名</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
            type="text"
          />
        </div>
        <button onClick={handleLogin}>進入聊天</button>
      </div>
    </div>
  )
}
