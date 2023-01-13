import React, {useRef} from "react";
import style from "./Header.module.css";
import home from "../../assets/icons/ic_home.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navRef = useRef();
  return (
    <>
      <header className={style.header}>
        <div
            className={style.logo_container} >
          <p style={{
            fontFamily: "MONSTER CLUBHOUSE",
            fontSize: "3.5rem",
          }}>Recipe</p>
          <p
          style={{
            fontSize: "1.5rem",
            color: "#D84A4A",
          }}
           >App</p>
        </div>
        <div>
          <img src={home} className={style.home} alt="" />
        </div>
        <div className={style.container_options}>
        <nav ref={navRef}>

          <NavLink
            className={({ isActive }) => (isActive ? style.active :style.NavBar_item)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? style.active :style.NavBar_item)}
            to="/FoodView"
          >
            Receta del día
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? style.active :style.NavBar_item)}
            to="/Vegetarians"
          >
            Vegetarianos
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? style.active :style.NavBar_item)}
            to="/Main"
          >
            Platos principales
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? style.active :style.NavBar_item)}
            to="/Cakes"
          >
            Tortas
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? style.active :style.NavBar_item)}
            to="/FastFood"
          >
            Comida rápida
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? style.active :style.NavBar_item)}
            to="/Kids"
          >
            Menú de niños
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? style.active :style.NavBar_item)}
            to="/Soups"
          >
            Sopas
          </NavLink>
        </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
