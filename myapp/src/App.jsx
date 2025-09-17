import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Component from './Component.jsx'
// import { ComponetB, ComponentC } from './Component.jsx'
import Button  from './Button'  

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
// let username = "coding hunger"
const handleOnClickButton = (name) =>{
  alert(`hello coder, ${name}`)
}  
return (
    <>
      {/* {num%2===0?elementA():elementB()} */}
      {/* <h1>welcome guys</h1>  */}
      {/* <Component username={"coding lover"} roll = {"24mca045"}/> */}
      {/* <Component username={"coding enthusiast"} roll = {"24mca045"}/> */}
      {/* <Component username={"coding hunger"} roll = {"24mca045"}/> */}
      {/* /* <ComponetB/> */}
      <Button handleonclickfunction = {handleOnClickButton} text={"click me"}/>

      {/* <ComponentC/> */ }
    </>
  )
}

export default App
