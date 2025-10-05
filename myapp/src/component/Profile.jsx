import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div style={{display:"flex",gap:"20px"}}>
      <Link to={"/profile/profile1"}>Profile 1</Link>
      <Link to={"/profile/dheeraj"}>Dheeraj profile</Link>
      <Link to={"/profile/pragyesh"}>Pragyesh profile</Link>
      <Link to={"/profile/anand"}>anand profile</Link>
      <Link to={"/profile/hritik"}>hritik profile</Link>
    </div>
  )
}

export default Profile
