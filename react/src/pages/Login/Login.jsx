import React from 'react'
import './login.scss'

export default function Login() {
  return (
    <div className="login">
      <div className="inputWrapper">
        <div className="inputArea">
          <label htmlFor="">輸入聊天姓名</label>
          <input type="text" />
        </div>
        <button>進入聊天</button>
      </div>
    </div>
  )
}
