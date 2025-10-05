import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor:"green",color:"black",padding:20,fontSize:20, display:"flex",gap:20}}>
     {/* <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search A Product' type='text'/> */}
     <Link to='/'>HomePage</Link>
     <Link to='/profile'>ProfilePage</Link>
    </div>
  )
}

export default Navbar
