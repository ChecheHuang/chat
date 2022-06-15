import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../redux/apiCalls'
import Swal from 'sweetalert2'

import './center.scss'
export default function Center() {
  const [name, setName] = useState('')
  const { userInfo, pending, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  function handleUpdate(e) {
    e.preventDefault()
    updateUser({ name }, dispatch)
  }
  if (pending === false) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    })
    return <div className="conversation">conversation</div>
  } else {
    return (
      <div className="center">
        <form>
          <div>
            <label htmlFor="">進入聊天</label>
            <input
              placeholder={userInfo.name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              type="text"
            />
          </div>
          <button disabled={pending} onClick={handleUpdate}>
            登入
          </button>
          {error && <span>something went wrong!!</span>}
          {pending === false && <span>Account has been updated!!</span>}
        </form>
      </div>
    )
  }
}
