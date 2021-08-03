import React,{useState} from 'react'
import logo from "../Images/wea-logo.png"
import {Link} from "react-router-dom"
const Nav2 = () => {
    const [open,setOpen]=useState(false)
    return (
        <>
            <div className="plr" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                <div className="row">
                    <div className="col-4">
                       <Link to="/"><img src={logo} alt="" style={{height:"80px",width:"180px"}} /></Link> 
                    </div>
                    <div className="col-8 mt-4">
                        <ul style={{listStyle:"none",fontWeight:"lighter"}}
                            className="d-md-flex justify-content-evenly d-none myfs">
                            <li className="cp nav-links">
                                <p>Wineries</p>
                            </li>
                            <li className="cp nav-links">
                                <Link to="/pricelist" className="nav-links"><p>Price List</p></Link> 
                            </li>
                            <li className="cp nav-links">
                                <Link to={`/news/1`} className="nav-links"><p>News</p></Link> 
                            </li>
                            <li className="cp">
                               <Link to="/mailinglist" className="nav-links"><p>Mailing List</p></Link> 
                            </li>
                            <li className="cp">
                               <Link to="/about" className="nav-links"><p>About</p></Link> 
                            </li>
                            <li className="cp">
                               <Link to="/contactus" className="nav-links"><p>Contact</p></Link>
                            </li>
                            <li className="cp"><i className="fas fa-search fs-3"></i></li>
                        </ul>
                        <ul style={{listStyle:"none",fontWeight:"lighter"}}
                            className="fs-3 d-md-none d-flex justify-content-end">
                            <li className="cp mx-3"><i className="fas fa-search fs-3"></i></li>
                            <li className="cp mx-3"><i className="fas fa-bars" onClick={()=>{setOpen(true)}}></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`position-fixed ${open?"slide-in-right":"slide-out-right"} d-md-none d-block`} style={{height:"100vh",zIndex:"10",width:"300px",top:0,right:open?-1:-1,backgroundColor:"#eeeeee"}}>
                <i className="fas fa-times en w-75 text-end mt-4 cp" onClick={()=>{setOpen(false)}}
                    style={{fontSize:"50px"}}></i>
                <ul style={{listStyle:"none"}} className="fs-3 w-75 mt-4 cp">
                    <li>
                        <p>Wineries</p>
                    </li>
                    <hr />
                    <li>
                       <Link to="/pricelist" className="nav-links"><p>Price List</p></Link> 
                    </li>
                    <hr />
                    <li>
                        <p>News</p>
                    </li>
                    <hr />
                    <li>
                       <Link to="/mailinglist"><p>Mailing List</p></Link> 
                    </li>
                    <hr />
                    <li>
                       <Link to="/about"><p>About</p></Link> 
                    </li>
                    <hr />
                    <li>
                       <Link to="/contactus"><p>Contact</p></Link>
                    </li>
                    <hr />
                </ul>
                <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                    <button type="button" className="btn btn-danger my-2" style={{borderRadius:"25px"}}><i
                            className="fas fa-user"></i> Register/Login</button>
                   <Link to="/cart"><button type="button" className="btn btn-danger my-2" style={{borderRadius:"25px"}}><i
                            className="fas fa-shopping-cart"></i> Cart Items (0)</button></Link> 
                </div>
            </div>
        </>
    )
}
export default Nav2