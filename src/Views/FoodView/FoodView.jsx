import React, { useState, useEffect } from "react";
import style from "./FoodView.module.css";
import cooking from "../../assets/cooking.png";
import grocery from "../../assets/grocery.png";
const FoodView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=4e99e5d918164aeca5952fbc82e0765c&. ",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className={style.loader}></span>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          fontFamily: "MONSTER CLUBHOUSE",
          color: "#D84A4A",
        }}
      >
        Receta del día:
      </h1>

      <div className={style.container}>
        <div className={style.card}>
          <h2>{data.recipes[0].title}</h2>
          <img className={style.img} src={data.recipes[0].image} alt="" />
        </div>
        <div className={style.in_card}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
                marginBottom: "10px",
            }} src={grocery} alt="" />
            <h3
              style={{
                fontFamily: "MONSTER CLUBHOUSE",
                fontSize: "2.5rem",
                margin: 0,
                color: "#D84A4A",
              }}
            >
              Ingredientes:
            </h3>
          </div>
          <ul>
            {data.recipes[0].extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
        <div className={style.pre_card}>
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
                marginBottom: "10px",
            }} src={cooking} alt="" />
            <h3
              style={{
                fontFamily: "MONSTER CLUBHOUSE",
                fontSize: "2.5rem",
                margin: 0,
                color: "#D84A4A",
              }}
            >
              Preparación:
            </h3>
          </div>
          <p>{data.recipes[0].instructions.replace(/<[^>]+>/g, "")}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodView;
