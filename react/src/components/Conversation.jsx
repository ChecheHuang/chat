import React from 'react'
import { io } from 'socket.io-client'
import { useState } from 'react'
import { useEffect } from 'react'
import { FcBusinessman, FcCustomerSupport } from 'react-icons/fc'
import './conversation.scss'

export default function Conversation() {
  const [socket, setSocket] = useState(null)
  const [room, setRoom] = useState(['test1', 'test2'])
  const [member, setMember] = useState(['Carl', 'Allen'])
  useEffect(() => {
    setSocket(io('ws://localhost:5000'))
  }, [])
  useEffect(() => {
    socket?.on('welcome', (msg) => {
      console.log(msg)
    })
  }, [socket])
  return (
    <div className="conversation">
      <div className="leftBar">
        {room.map((item, index) => {
          return (
            <div key={index} className="roomItem">
              {item}
            </div>
          )
        })}
      </div>
      <div className="messageArea">
        <div className="messageGroup">
          <div className="message">
            <div className="messageTop">
              <div className="auth">
                <FcCustomerSupport />
                Carl
              </div>
              <div className="contain">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat libero, iste nulla ab cupiditate nisi, voluptate
                expedita nostrum pariatur impedit, a magni doloremque omnis?
                Enim ab laboriosam assumenda velit, eaque optio perspiciatis sit
                culpa ipsum veritatis, quis, accusantium at repellat! Natus hic
                exercitationem, aspernatur praesentium magnam odio, numquam
                accusamus nam atque provident corporis similique sapiente illum.
                Assumenda voluptates mollitia vero labore, ea cumque cum
                expedita magnam, necessitatibus blanditiis explicabo sapiente
                fugit rerum quos quibusdam facilis iusto asperiores. Eius rerum
                officia atque eaque illo ipsam ratione asperiores reprehenderit
                possimus blanditiis quo ullam mollitia nostrum veniam deserunt,
                similique ducimus necessitatibus impedit nisi.
              </div>
            </div>
            <div className="messageBottom">1 hour ago</div>
          </div>
          <div className="message own">
            <div className="messageTop">
              <div className="auth">
                <FcCustomerSupport />
                Carl
              </div>
              <div className="contain">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum nemo quos est laboriosam natus non labore vero eaque
                modi hic.
              </div>
            </div>
            <div className="messageBottom">1 hour ago</div>
          </div>
        </div>
        <div className="send">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>送出</button>
        </div>
      </div>
      <div className="member">
        {member.map((item, index) => {
          return (
            <div key={index} className="memberItem">
              <FcBusinessman />
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}
