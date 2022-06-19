import React, { useState } from 'react'
import './chat.scss'
import Swal from 'sweetalert2'
import { FcBusinessman } from 'react-icons/fc'
import moment from 'moment'
import { useRef } from 'react'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'

export default function Chat({ user }) {
  // console.log(moment().format('lll'))
  const navigate = useNavigate()
  const [rooms, setRooms] = useState(['test', 'test2'])
  const [receiver, setReceiver] = useState('Allen')
  const [members, setMembers] = useState(['Allen'])
  const [messages, setMessages] = useState([
    { sender: 'Allen', receiver: 'Carl', message: 'testtest', time: '16:20' },
    { sender: 'Carl', receiver: 'Allen', message: 'testtest', time: '16:20' },
  ])
  const [sendMessage, setSendMessage] = useState('')
  const [socket, setSocekt] = useState(null)
  const scrollRef = useRef()
  // const socket = useRef()

  useEffect(() => {
    if (user === '') {
      navigate('/')
    }
    setSocekt(io('ws://localhost:8900'))
  }, [])
  useEffect(() => {
    socket?.on('user', (members) => {
      console.log(members)
      setMembers(members)
    })
  }, [socket])
  useEffect(() => {
    scrollRef?.current.scrollIntoView()
  }, [messages])
  function handleSendMessage() {
    const message = {
      sender: user,
      receiver: receiver,
      message: sendMessage,
      time: moment().format('lll'),
    }
    const newMessages = [...messages, message]
    setMessages(newMessages)
    setSendMessage('')
  }
  async function handleAdd() {
    const { value: roomName } = await Swal.fire({
      title: '房間名稱',
      input: 'text',
      inputLabel: '輸入房間名稱',
      inputPlaceholder: '輸入房間名稱',
    })

    if (
      !rooms.some((item) => {
        return item === roomName
      }) &&
      roomName
    ) {
      Swal.fire(`${roomName}創建成功`)
      setRooms((prev) => {
        const newRooms = [...prev]
        return [...newRooms, roomName]
      })
    } else {
      Swal.fire('此房間已存在或輸入有誤')
    }
  }
  return (
    <>
      <div className="chatWrapper">
        <div className="top">{user}</div>
        <div className="conversation">
          <div className="left">
            <div className="room">房間</div>
            {rooms.map((item, index) => {
              return (
                <div key={index} className="room">
                  {item}
                </div>
              )
            })}
            <button onClick={handleAdd} className="add">
              +
            </button>
          </div>
          <div className="center">
            <div className="messageGroup">
              {messages.map((item, index) => {
                const { sender, message, time } = item
                return (
                  <div
                    ref={scrollRef}
                    key={index}
                    className={'item ' + (user === sender && 'own')}
                  >
                    <div className="messageTop">
                      <div className="name">
                        <FcBusinessman /> {sender}
                      </div>
                      <div className="message">{message}</div>
                    </div>
                    <div className="time">{time}</div>
                  </div>
                )
              })}
            </div>
            <div className="send">
              <textarea
                onChange={(e) => {
                  setSendMessage(e.target.value)
                }}
                value={sendMessage}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button onClick={handleSendMessage}>送出</button>
            </div>
          </div>
          <div className="right">
            <div className="member">線上成員</div>
            {members.map((item, index) => {
              return (
                <div key={index} className="member">
                  {item}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
