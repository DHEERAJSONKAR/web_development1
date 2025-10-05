import React from 'react'
import { useParams } from 'react-router-dom'

const ProfileDetail = () => {
    const {userName}=useParams();
  return (
    <div>
        {userName} this is profile details
    </div>
  )
}

export default ProfileDetail
