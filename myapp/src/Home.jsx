import React from 'react'
import Model from './Model'
import Button from './Button'

const Home = ({data=0,name="anjali"}) => {
  let a =56+ data;
  return (
    <div>
      <h1>this is home page = {data} and name={name} with a value={a}</h1>
      
    </div>
  )
}


export default Home
