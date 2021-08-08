import React from "react";
import Footer from "../Components/Footer";
import Nav1 from "../Components/Nav1";
import Nav2 from "../Components/Nav2";
import logo from "../Images/Four04.png";
import wine from "../Images/wine.gif";
import { Link } from "react-router-dom";
import "./404.css"
export default function Four04(){
    return(
    <>
        <Nav1/>
        <Nav2/>
        <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                        
                            <div className="image2 middle ">
                                <div className="row ">
                                    <div className="d-flex justify-content-center align-items-center " style={{padding:10}}>
                                    <img src={logo} alt="" width="75%" height="150"/>
                                    </div>
                                    <b style={{color:"black",textAlign:"center",padding:10}}>Oops! Page Could not be found</b>
                                    <div className="d-flex justify-content-center align-items-center" style={{padding:10}}>
                                        <b style={{color:"black",textAlign:"center",marginRight:"5%"}}>Go to:</b>
                                        <Link to="/"><button style={{backgroundColor:"rgb(167,14,14)",borderColor:"rgb(167,14,14)",borderRadius:10,paddingRight:15,paddingLeft:15,textDecoration:"none",color:"white"}}>Homepage</button></Link>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        
                        
                        <div className="col-6  wine" >                 
                        
                        </div>
                    </div>
                </div>
        <Footer/>
    </>
);}
