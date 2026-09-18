import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userId}=useParams()
  return (
    <div className='bg-amber-200 text-center p-4'>
      user:{userId}
    </div>
  )
}

export default User
