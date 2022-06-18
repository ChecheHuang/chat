import React, { useState } from 'react'
import './chat.scss'
import Swal from 'sweetalert2'
import { FcBusinessman, FcCustomerSupport } from 'react-icons/fc'

export default function Chat() {
  const [rooms, setRooms] = useState(['test', 'test2'])
  const handleAdd = async () => {
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
        <div className="top"></div>
        <div className="conversation">
          <div className="left">
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
              <div className="item">
                <div className="messageTop">
                  <div className="name">
                    <FcBusinessman /> Carl
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum repellendus dignissimos obcaecati, pariatur optio
                    praesentium suscipit officia veritatis doloremque quam,
                    aliquam soluta. Fugit hic minus cumque quae optio impedit
                    aspernatur!
                  </div>
                </div>
                <div className="time">"16:50"</div>
              </div>
            </div>
            <div className="send"></div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  )
}
