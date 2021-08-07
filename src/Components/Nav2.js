import React,{useState,useEffect} from 'react'
import logo from "../Images/wea-logo.png"
import {Link} from "react-router-dom"
import Login from "../Components/Login.js";
import CartItem from '../Components/Cart_Components/items'

const axios = require('axios');
const token = localStorage.getItem("token");

const Nav2 = () => {
    const [open,setOpen]=useState(false)
    const [id,setId]=useState('')
    const [login, setLogin] = useState(true)
      useEffect(() => {
        axios.get('https://weawines.shubhchintak.co/wp-json/wp/v2/posts').then(function (response){
                 setId(response.data[0].id);
             })
            .catch(function (error){
                console.log(error);
            })
            if(token===null){
                setLogin(false)
            }
    },[])
    return (
        <>
            <div className="plr" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                <div className="row">
                    <div className="col-4">
                       <Link to="/"><img src="https://weawines.shubhchintak.co/wp-content/uploads/2021/08/wea-logo-300x126.png" alt="" style={{height:"80px",width:"180px", objectFit:"contain"}} /></Link> 
                    </div>
                    <div className="col-8 mt-4">
                        <ul style={{listStyle:"none",fontWeight:"400"}}
                            className="d-md-flex justify-content-evenly d-none myfs">
                            <li className="cp nav-links">
                             <Link to="/winelist" className="nav-links"><p>Wineries</p></Link>
                            </li>
                            <li className="cp nav-links">
                                <Link to="/pricelist" className="nav-links"><p>Price List</p></Link> 
                            </li>
                            <li className="cp nav-links">
                                 <Link to={{pathname:`/news`,state:0}} className="nav-links"><p>News</p></Link> 
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
                            {/* <li className="cp"><i className="fas fa-search fs-3"></i></li> */}
                        </ul>
                        <ul style={{listStyle:"none",fontWeight:"lighter"}}
                            className="fs-3 d-md-none d-flex justify-content-end">
                            {/* <li className="cp mx-3"><i className="fas fa-search fs-3"></i></li> */}
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
                    <Link to="/winelist" className="nav-links"><p>Wineries</p></Link>
                    </li>
                    <hr />
                    <li>
                       <Link to="/pricelist" className="nav-links"><p>Price List</p></Link> 
                    </li>
                    <hr />
                    <li className="cp nav-links">
                           <Link to={{pathname:`/news`,state:0}} className="nav-links"><p>News</p></Link> 
                   </li>
                    <hr />
                    <li>
                       <Link to="/mailinglist"  className="nav-links"><p>Mailing List</p></Link> 
                    </li>
                    <hr />
                    <li>
                       <Link to="/about"  className="nav-links"><p>About</p></Link> 
                    </li>
                    <hr />
                    <li>
                       <Link to="/contactus"  className="nav-links"><p>Contact</p></Link>
                    </li>
                    <hr />
                </ul>
                <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                
                {!login && <button type="button" onClick={()=>{setOpen(false)}} className="btn btn-danger my-2" style={{borderRadius:"25px", width:'160px'}}><i
                            className="fas fa-user"></i> <Login/></button>}
							 
                    
                  {login&& <Link to="/cart"><button type="button" className="btn btn-danger my-2" style={{borderRadius:"25px", width:'160px'}}><i
                            className="fas fa-shopping-cart"></i> Cart Items (<CartItem/>)</button></Link> }
                </div>
            </div>
        </>
    )
}
export default Nav2