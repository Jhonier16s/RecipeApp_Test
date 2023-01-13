import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from '../Cards/Cards';
import img1 from "../../assets/cherry.png";
import img2 from "../../assets/Ojingeo-muchim-1.png";
import img3 from "../../assets/Ojingeo-muchim-5.png";
import img4 from "../../assets/Ojingeo-muchim.png";
import style from './Slider.module.css'

const SliderImg = () => {
  console.log(img1)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    
    
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 60px',  
      }}>
        <div className={style.title}>
        <p
          style={{
            fontFamily: "MONSTER CLUBHOUSE",
            fontSize: "3rem",
            color: "#D84A4A",
          }}
        >
          Nuevas Recetas
        </p>
        </div>
      <Slider {...settings}>
         <Cards image_card={img4} rating={"5.0"} title={"Ojingeo"} special_title={"Muchim"}/>
         <Cards image_card={img2} rating={"5.0"} title={"Cola"} special_title={"Chicken"}/>
         <Cards image_card={img3} rating={"4.5"} title={"Roasted"} special_title={"Carrot"}/>
         <Cards image_card={img1} rating={"4.0"} title={"Sweer"} special_title={"Cherries"}/>
      </Slider>
      </div>
    </>
  )
}

export default SliderImg