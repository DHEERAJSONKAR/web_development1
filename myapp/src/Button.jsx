import React from 'react'

const Button = ({data,handleOnClickFunction}) => {
    const handleOnClick = ()=>{
        
        handleOnClickFunction("i am a full stack developer")
    }
  return (
    <div>
     <button onClick={handleOnClick}>{data}</button>
    </div>
  )
}

export default Button

// props drilling is a concept in react where you pass data (prps)
// from a parent component to deeply nested child component, throught intermediate
// components, even if those intermediate component do not need the data themeselves.
