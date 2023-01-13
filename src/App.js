import Header from "./Components/Header/Header";
import HomePage from "./Views/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesView from "./Views/CategoriesView/CategoriesView";
import Vegetarians from "./assets/Vegetarians.jpg";
import main from "./assets/main.jpg";
import cake from "./assets/cake.jpg";
import FastFood from "./assets/FastFood.jpg";
import Kids from "./assets/Kids.jpg";
import Soup from "./assets/Soup.jpg";
import FoodView from "./Views/FoodView/FoodView";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
      <Header/>
         <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/Vegetarians" element={<CategoriesView img_banner={Vegetarians} title_banner={"Vegetarianos"}/>} />
          <Route path="/Main" element={<CategoriesView img_banner={main} title_banner={"Platos principales"}/>} />
          <Route path="/Cakes" element={<CategoriesView img_banner={cake} title_banner={"Tortas"}/>} />
          <Route path="/FastFood" element={<CategoriesView img_banner={FastFood} title_banner={"Comida Rápida"}/>} />
          <Route path="/Kids" element={<CategoriesView img_banner={Kids} title_banner={"Menú niños"}/>} />
          <Route path="/Soups" element={<CategoriesView img_banner={Soup} title_banner={"Sopas"}/>} />
          <Route path="/FoodView" element={<FoodView/>} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
