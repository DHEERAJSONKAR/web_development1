import './App.css'
import Button from './Button.jsx'
import Home from './Home.jsx'
import React,{useState} from 'react'




function App() {
  // let username = "developer dheeraj"
  const handleOnClickButton = (name)=>{
    alert(`hello ${name}`)
  }
  let a = 23;
  const [data,setData] = useState(0);
  const [name, setName] = useState("Director Dheeraj");
  const handleClick =()=>{
    setData(prev=>prev+1)
    setName("welcome to developer life.")
  }
  const handleDecrement =()=>{
    setData(prev=>prev-1)
    setName("you want to become a software developer.")
  }
 
return (
    <>
  {/* <Button handleOnClickFunction={handleOnClickButton}text={"alert"}/>
  <Home data = {a} name="dheeraj"/>
  <Home/> */}
  {/* <div>this is a coder</div>
  <div>hi</div> */}
  <div >
  <h1>{data}</h1>
  <p>{name}</p>
  <div style={{display: "flex", gap:10}}>
    <button onClick={handleClick}>+</button>
    <button onClick={handleDecrement}>-</button>
  </div>
  </div>
    </>
  ) 
}

export default App
