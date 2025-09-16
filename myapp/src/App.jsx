import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component.jsx'
import { ComponetB, ComponentC } from './Component.jsx'

function App() {
//   const elementA = ()=>{
//     return(
//       <div>
//         <h1>welcome to coding hunger.</h1>
//       </div>
//     )
//   }
//   const elementB = ()=>{
//     return(
//       <div>
//         <h1>hello developer</h1>
//       </div>
//     )
//   }
// let num = 1;
  return (
    <>
      {/* {num%2===0?elementA():elementB()} */}
      <h1>welcome guys</h1> 
      <Component/>
      <ComponetB/>
      <ComponentC/>
    </>
  )
}

export default App
