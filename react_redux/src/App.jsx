import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/CounterAction'

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.count)
  const handleMinusBTN= ()=>{
    dispatch(decrement())
  }
  const handlePlusBtn= ()=>{
    dispatch(increment())
  }
  return (
    <div style={{display:"flex", gap:"30px", alignItems:"center", justifyContent:"center", height:"100vh"}}>
      <div style={{padding:"20px", border:"1px solid"}} onClick={handleMinusBTN}>-</div>
      {data}
      <div style={{padding:"20px", border:"1px solid"}}onClick={handlePlusBtn}>+</div>
    </div>
  )
}

export default App
