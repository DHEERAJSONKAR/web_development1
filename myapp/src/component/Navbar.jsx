import React from 'react'

const Navbar = ({searchText,setSearchText}) => {
  return (
    <div style={{backgroundColor:"green",color:"black",padding:20,fontSize:20}}>
     <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search A Product' type='text'/>
    </div>
  )
}

export default Navbar
