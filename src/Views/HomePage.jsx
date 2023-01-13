import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SliderImg from '../Components/Slider/SliderImg'
import styles from './HomePage.module.css'
const HomePage = () => {
  return (
    <div className={styles.container}>
        
        <Banner/>
        <SliderImg/>
        <Footer/>
    </div>
  )
}

export default HomePage