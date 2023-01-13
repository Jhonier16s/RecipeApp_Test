import React from 'react'
import grupo from '../../assets/Grupo_7610.png'
import style from './Footer.module.css'
const Footer = () => {
  return (
    <div>
        <div 
        className={style.footer}
        >
            <div>
                <p
                className={style.text}
                
                >Con el patrocinio de:</p>
            </div>
            <div className={style.container_img}>
              <img className={style.img} src={grupo} alt =""/>
            </div>
        </div>
    </div>
  )
}

export default Footer