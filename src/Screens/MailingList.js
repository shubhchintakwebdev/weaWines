import React from 'react'
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"

const MailingList = () => {
    return (
        <>
        <Nav1/>
        <Nav2/>
            <div className="position-relative">
                <div className="op"></div>
                <div className="aui d-flex justify-content-center align-items-center">
                    <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Mailing List</h1>
                </div>
            </div>
            <section className="plr my-5 fwl">
                <div style={{backgroundColor:"#eeeeee",height:"auto",maxWidth:"600px",margin:"auto"}} className="p-5 d-flex flex-column justify-content-evenly align-items-center">
                    <h3 className="text-uppercase text-danger text-center my-3">Join Our Mailing List</h3>
                    <p className="text-center my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vel perferendis sapiente
                        similique omnis consequuntur aperiam voluptatem officiis sit repudiandae!</p>
                    <div className="input-group mb-3" style={{maxWidth:"300px"}}>
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="input-group mb-3" style={{maxWidth:"300px"}}>
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                        <input type="text" className="form-control" placeholder="E-Mail Address" />
                    </div>
                    <button type="button" className="btn btn-danger my-3" style={{borderRadius:"25px",width:"300px"}}>Subscribe</button>
                    <p style={{fontSize:"15px",textAlign:"center"}}>By clicking on "SUBSCRIBE" , you agree to WEA wines's <span style={{textDecoration:"underline"}}>Terms of Use</span> and <span style={{textDecoration:"underline"}}>Privacy Policy</span></p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default MailingList
