import React ,{useContext}from 'react'
import style from './Navbar.module.css'
import { ThemeContext } from '../ThemeContext'

const Navbar = () => {
    const {theme,toggleTheme}=useContext(ThemeContext);
    const handleOnToggle=(e)=>{
        toggleTheme();
    }
  return (
    <div className={theme==="light"?style.navbarLight:style.navbarDark}>
      <div className={style.leftSide}>
        <h1>Coding Hunger</h1>
      </div>
      <div className={style.rightSide}>
        <div>Theme</div>
      
      <div class={style.swith}>
        <label>
            <input type="checkbox" onChange={handleOnToggle}/>
            <span class={[style.slider,style.round].join(' ')}></span>

        </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
