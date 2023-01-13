import React from "react";
import style from "./Cards.module.css";

import star from "../../assets/icons/ic_star.svg";
import fav from "../../assets/icons/ic-favorite.svg";
import portion from "../../assets/icons/ic_portion.svg";
import time from "../../assets/icons/ic_time.svg";
const Cards = ({image_card, title, special_title, rating}) => {
  return (
    <>
    <div className={style.container}>
    <div className={style.main}>
        <div className={style.card_img}>
            <img className={style.img} src={image_card} alt="img" height={"130px"}  />
        </div>
        <div className={style.container_card} >
              <div className={style.title}>
               <div style={{
                     display: "flex",
                     flexDirection: "row",
                   
               }}>
                <p style={{
                    fontSize: "2rem",
                    marginBottom: "0px",
                  
                }}>{title}</p>
                <p style={{
                    fontSize: "2.2rem",
                    marginTop: "38px",
                    fontFamily: "MONSTER CLUBHOUSE",
                }}>{special_title}</p>

               </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "80%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <img  style={{
                        width: "25px",
                    }} src={star} alt="" />
                        <p style={{
                            marginLeft: "10px",
                        }}>{rating}</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        
                    }}>
                    <img style={{
                        width: "25px",
                    }} src={fav} alt="" />
                    </div>
                </div>
              </div>
              <div className={style.hover_efect}>
                     <div style={{
                            display: "flex",
                            flexDirection: "column",
                     }}>
                        <img src={portion} height={20} alt="" />
                        <p style={{
                            display: "flex",
                           justifyContent: "center",
                           fontSize:"12px",
                           color:"#D84A4A"
                        }}>Tamaño de la porción</p>
                        <p
                         style={{
                            display: "flex",
                            justifyContent: "center",
                            fontSize:"16px",
                         }}
                        >4 raciones</p>
                     </div>   
                     <div style={{
                            display: "flex",
                            flexDirection: "column",
                     }}>
                        <img src={time} height={20} alt="" />
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize:"12px",
                           color:"#D84A4A"
                            }}

                        >Tiempo de preparación</p>
                        <p 
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                            >10 minutos</p>
                     </div>   
                      
  
              </div>
        </div>
    </div>
    </div>
      
    </>
  );
};

export default Cards;
