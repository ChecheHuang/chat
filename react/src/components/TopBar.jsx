import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiAngry, BiBell } from 'react-icons/bi'
import { logout } from '../redux/userSlice'

export default function TopBar() {
  const name = useSelector((state) => state.user.userInfo.name)
  const pending = useSelector((state) => state.user.pending)
  const dispatch = useDispatch()

  return (
    <div
      style={{
        width: '100%',
        height: '10vh',
        background: 'lightblue',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '30px',
        boxSizing: 'border-box',
        alignItems: 'center',
      }}
    >
      {pending === false ? (
        <>
          <BiBell />
          {name}
          <button
            onClick={() => {
              dispatch(logout())
            }}
            style={{
              marginLeft: '10px',
              padding: '10px 20px',
              borderRadius: '4px',
              background: 'gray',
            }}
          >
            登出
          </button>
        </>
      ) : (
        <BiAngry style={{ fontSize: '3rem' }} />
      )}
    </div>
  )
}
