import './App.css'
import React ,{useState, useEffect, useRef, use}from 'react'
import Home from './Home'
import dkphoto from '../src/assets/dkphoto.jpeg'
import react from '../src/assets/react.svg'
import style from './App.module.css'
import HomePage from './component/HomePage'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './component/Profile'
import NotFound from './component/NotFound'
import ProfileDetail from './component/ProfileDetail'





function App() {
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   console.log(`api calling is happeninig ${count}`) 
  // },[count])
  // const handleClickFunction=(e)=>{
  //   console.log(e)
  // }
  // const handleonChangeFunc=(e)=>{
  //   console.log(e.target.name)
  // }
  // const handleSubmit=(e,val)=>{
  //   e.preventDefault();
  //   console.log(val)
  // }
  // var isLogin = false;
  // const checkLogin = ()=>{
  //   if(isLogin){
  //     return<h2>welcome user</h2>
  //   }else{
  //     return<h2>welcome guest

  //     </h2>
  //   }
  // }
  // var listOfData = ["Apple","Banana","Mango","Orange","Papaya","Guava"]

  // const [name, setName] = useState({
  //   name:"",
  //   email:"",
  //   password:"",
  //   phone:""

  // });
  
  // const handleChange=(e,key)=>{
  //   setName({...name,[key]:e.target.value})

  // }

 
  // const list = [
  //   {
  //     product: "Mobile",
  //     price: 100000,
  //     quantity:20
  //   },
  //   {
  //     product: "Laptop",
  //     price: 50000,
  //     quantity:10
  //   },
  //   {
  //     product: "Tablet",
  //     price: 30000,
  //     quantity:15
  //   }
  // ]
  // const [searchText, setSearchText] = useState("");
  const inputRef = useRef();
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(()=>{
    prevCountRef.current = count;
  },[count])
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  const onClickButton=()=>{
    const value = inputRef.current.value;
    console.log(value)
   
  }
  
 
return (
    <>
    {/* <Navbar searchText={searchText} setSearchText={setSearchText}/>
    <HomePage searchText={searchText}/>
    <p onClick={()=>setCount(prev=>prev+1)}>hi</p> */}
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/> 
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/profile/:userName' element={<ProfileDetail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
    <input ref={inputRef} placeholder='Enter your name' type='text'></input>
    <button onClick={onClickButton}>send</button>
    <div>Count: {count}</div>
    <div>prevCount: {prevCountRef.current}</div>
    <button onClick={()=>setCount(count+1)}>Increment</button>

    
    {/* <input type='text' placeholder='Enter your name' name="input field" onChange={handleonChangeFunc}width={600}/>
    <img src ={dkphoto} className={style.imageStyle} />
  <div className='header' id='header1'>App Component</div>
  <img src={react} width={100} />
  <img src='public/photo3.jpeg' className={style.imageStyle}/>
  <h2 onClick={handleClickFunction}>External Image</h2>
  <img src='https://flux1.ai/_next/image?url=https%3A%2F%2Fr2.flux1.ai%2Ffluxai%2F2024%2F08%2Fcar-3.webp&w=3840&q=75' alt="external" width={500}/>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIdDCXtHZzEpsem4wdeJeQLJIBdb5sN88FA&s' width={500}/>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mFHhYjnO1SSbz3Hfqjk6mVlyq8GejIOGNw&s' width={500} />
  
  <Home />
  <form onSubmit={(e)=>handleSubmit(e, "developer dheeraj")}>
    <input type="text" placeholder='Enter Your Name'/>
    <button>Submit</button>
  </form>
  {checkLogin()}
  {listOfData.map((item,index)=>{
    return(
      <div key={index}>
      <div>{item}</div>
      <div>Item{index}</div>
      </div>
    );

  })}


  {list.map((item,index)=>{
      return(
        <div key={index}>
          <div>Product: {item.product}</div>
          <div>Price: {item.price}</div>
          <div>Quantity: {item.quantity}</div>
          <hr />
        </div>
      )
     })}

     <form>
      {name.name}
      <br/>
    
      <label htmlFor='name'>Name:-</label>
      <input value={name.name} onChange= {(e)=>handleChange(e,"name")} placeholder='Enter Your Name' id="name" />
      <br/>
        {name.email}
        <br/>
      <label htmlFor='email'>Email:-</label>
      <input value={name.email} onChange= {(e)=>handleChange(e, 'email')} placeholder='Enter Your Email' id="email" />
      <br/>
        {name.password}
        <br/>
      <label htmlFor='password'>Password:-</label>
      <input value={name.password} onChange= {(e)=>handleChange(e, 'password')} placeholder='Enter Your password' id="password" />
      <br/>
        {name.phone}
        <br/>
      <label htmlFor='phone'>Phone.No:-</label>
      <input value={name.phone} onChange= {(e)=>handleChange(e, 'phone')} placeholder='Enter Your phone number' id="phone" />
     </form> */}
  
    </>
  ) 
}


export default App
