import React from 'react'
import Carousel from '../Components/Home_Components/Carousel'
import WHS from '../Components/Home_Components/WHS'
import Events from '../Components/Home_Components/Events'
import News from '../Components/Home_Components/News'
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"
const Home = () => {
    return (
        <>
         <Nav1/>
         <Nav2/>
            <Carousel />
            <WHS />
            <Events />
            <News />
            <Footer/>
        </>
    )
}
export default Home