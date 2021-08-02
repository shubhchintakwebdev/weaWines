import React from 'react'
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"

const PriceList = () => {
    return (
       <>
           <Nav1 />
           <Nav2 />
           <div className="position-relative">
               <div className="op"></div>
               <div className="aui d-flex justify-content-center align-items-center">
                   <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Price List</h1>
               </div>
           </div>
           <Footer />
       </>
    )
}

export default PriceList
