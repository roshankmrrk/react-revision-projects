import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {UserId}=useParams()
  return (
    <h1 className='bg-gray-700 text-center text-3xl text-white '> User: {UserId}</h1>
  )
}

export default User