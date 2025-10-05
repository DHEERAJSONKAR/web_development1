import React ,{useContext}from 'react'
import Style from './HomePage.module.css'
import { ThemeContext } from '../ThemeContext'

const HomePage = () => {
    const {theme}=useContext(ThemeContext);
  return (
    <div className={theme==="light"?Style.homeLight:Style.homeDark}>
        <div className={Style.welcome}>
            Welcome to our Channel Coding Hunger 
        </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusamus modi quas quidem sequi ipsum. Atque nam, maiores pariatur officiis temporibus accusamus repellendus porro ipsum vel sit deleniti inventore repellat?</p>
      <div className={Style.homeCards}>
        <div className={Style.lightCards}>
            <h3>coding hunger</h3>
            <p>Amazon SDE-II</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur consectetur alias odio beatae, quos esse minus possimus rem necessitatibus aut nostrum cumque sapiente quis! Dolorem voluptates porro eveniet repudiandae!</p>
           </div>
        <div className={Style.lightCards}>
            <h3>coding hunger</h3>
            <p>Amazon SDE-II</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur consectetur alias odio beatae, quos esse minus possimus rem necessitatibus aut nostrum cumque sapiente quis! Dolorem voluptates porro eveniet repudiandae!</p>
          
        </div>
      </div>
    </div>
  )
}

export default HomePage
