import React from 'react'
import { useSelector } from 'react-redux'

export default function LeftBar() {
  const { pending } = useSelector((state) => state.user)

  return (
    <div
      style={{
        background: 'pink',
        width: pending === false ? '20vw' : '0px',
        height: '90vh',
        textAlign: 'center',
        transition: '.5s',
      }}
    >
      
    </div>
  )
}
