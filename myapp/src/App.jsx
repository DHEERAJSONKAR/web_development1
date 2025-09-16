import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const elementA = ()=>{
    return(
      <div>
        <h1>welcome to coding hunger.</h1>
      </div>
    )
  }
  const elementB = ()=>{
    return(
      <div>
        <h1>hello developer</h1>
      </div>
    )
  }
let num = 1;
  return (
    <>
      {num%2===0?elementA():elementB()}
      <h1>welcome guys</h1> 
    </>
  )
}

export default App
