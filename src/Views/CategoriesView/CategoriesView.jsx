import React from 'react'
import vegetarians from '../../assets/Vegetarians.jpg'
import style from './CategoriesView.module.css'
import coming_soon from '../../assets/coming_soon.png'
const CategoriesView = ({title_banner, img_banner}) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "550px",
      width: "100vw",
      backgroundColor: "#fff",
      
      flexDirection: "column",
    }}>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
      }}>
        <h1 style={{
          color: "#D84A4A",
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "MONSTER CLUBHOUSE",
          marginRight: "20px",
        }}>{title_banner}</h1>
          <img src={coming_soon} height={50} alt =""/>

      </div>
        <div style={{
          width: "100%",
        }}>
          <img src={img_banner} className={style.img} alt="" />
        </div>

    </div>
  )
}

export default CategoriesView