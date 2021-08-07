import React from 'react'
import {Link} from "react-router-dom"
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"
import CheckoutScreen from "../Components/Chechout_Components/CheckOut"
const Checkout = () => {
    return (
        <>
        <Nav1/>
        <Nav2/>
            <div className="position-relative">
                <div className="op2"></div>
                <div className="aui2 d-flex justify-content-center align-items-center">
                    <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Checkout</h1>
                </div>
            </div>
            <section className="plr ">
              {/* <h3 className="text-danger fwl py-4">Order Details</h3> */}
            </section>
            <section className="my-5">
            <CheckoutScreen/>
            </section>
           
            <Footer/>
        </>
    )
}

export default Checkout
