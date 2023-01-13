import React from "react";
import style from "./Banner.module.css";
import bcq from "../../assets/bcq.jpg";
import soup from "../../assets/icons/ic_soup.svg";
import vegetarian from "../../assets/icons/ic_vegetarian.svg";
import main from "../../assets/icons/ic_main.svg";
import cake from "../../assets/icons/ic_cake.svg";
import fast_food from "../../assets/icons/ic_fast-food.svg";
import kids from "../../assets/icons/ic_kids.svg";
const Banner = () => {
  return (
    <>
      <div className={style.banner_container}>
        <div className={style.container}>
          <img width={"100%"} src={bcq} >
          </img>
          <p className={style.text_1}>Recetas</p>
          <p className={style.text_2}>Para todos</p>
          <div className={style.container_card}>
            <div className={style.container_for_cards}>
            
                <div className={style.card}>
                  <div style={{
                    marginTop: "10px",
                  }}>
                    <img src={vegetarian} alt="" />
                  </div>
                  <div>
                    <p className={style.text_3}>Vegetarianos</p>
                  </div>
                </div>
                <div className={style.card}>
                  <div style={{
                    marginTop: "10px",
                  }}>
                    <img src={main} alt="" />
                  </div>
                  <div>
                    <p className={style.text_3}>Principales</p>
                  </div>
                </div>
                <div className={style.card}>
                  <div style={{
                    marginTop: "10px",
                  }}>
                    <img src={cake} alt="" />
                  </div>
                  <div>
                    <p className={style.text_3}>Tortas</p>
                  </div>
                </div>
                <div className={style.card}>
                  <div style={{
                    marginTop: "10px",
                  }}>
                    <img src={fast_food} alt="" />
                  </div>
                  <div>
                    <p className={style.text_3}>Rápida</p>
                  </div>
                </div>
                <div className={style.card}>
                  <div style={{
                    marginTop: "10px",
                  }}>
                    <img src={kids} alt="" />
                  </div>
                  <div>
                    <p className={style.text_3}>Menú niños</p>
                  </div>
                </div> 
                <div className={style.card}>
                  <div style={{
                    marginTop: "10px",
                  }}>
                    <img src={soup} alt="" />
                  </div>
                  <div>
                    <p className={style.text_3}>Sopas</p>
                  </div>
                </div> 
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
