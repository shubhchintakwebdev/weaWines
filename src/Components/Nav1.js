import React from 'react'
import {Link} from "react-router-dom"
const Nav1 = () => {
    return (
       <div className="bg-danger text-light plr d-md-block d-none " style={{height:"30px"}}>
           <div className="row fwl">
               <div className="col-6">
                  <p>Free Delivery for $300 and above, till 13th July 2021 only</p> 
               </div>
               <div className="col-6 text-end">
                   <p><i className="fas fa-user"></i> <Link to="/register" className="nav-links2">Register</Link>/Login| <Link to="/cart" className="nav-links2"><i className="fas fa-shopping-cart"></i> Cart Items (0)</Link></p>
               </div>
           </div>
       </div>
    )
}
export default Nav1