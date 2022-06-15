import React from 'react'
import { useSelector } from 'react-redux'
import { BiAngry, BiBell } from 'react-icons/bi'

export default function TopBar() {
  const name = useSelector((state) => state.user.userInfo.name)
  const pending = useSelector((state) => state.user.pending)
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
        </>
      ) : (
        <BiAngry style={{ fontSize: '3rem' }} />
      )}
    </div>
  )
}
