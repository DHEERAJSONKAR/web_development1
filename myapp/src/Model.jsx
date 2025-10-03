import React from 'react'
import Button from './Button'

const Model = (props) => {
  return (
    <div>
      <h1>this is model component {props.data}</h1>
        {props.children}
        <Button data = {props.data}text={"submit"}/>
    </div>
  )
}

export default Model
