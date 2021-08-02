import React from 'react'
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"
const ContactUs = () => {
    return (
        <>
        <Nav1/>
        <Nav2/>
            <div className="position-relative">
                <div className="op"></div>
                <div className="aui d-flex justify-content-center align-items-center">
                    <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Contact</h1>
                </div>
            </div>
            <section className="plr my-5 fwl">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-danger">Lets Connect</h3>
                        <input type="email" className="form-control my-4" placeholder="Full Name"></input>
                        <input type="email" className="form-control my-4" placeholder="Email"></input>
                        <input type="email" className="form-control my-4" placeholder="Contact Number"></input>
                        <textarea className="form-control my-4" rows="8" placeholder="Tell us your comments"
                            style={{resize:"none"}}></textarea>
                        <button type="button" className="btn btn-danger my-4"
                            style={{borderRadius:"25px",width:"40%"}}>Send</button>
                    </div>
                    <div className="col-md-6 fwl p-5">
                        <p><i className="fas fa-map-marker-alt fs-3 my-3"></i> Blk 341, Le Bon Funk, 29 Club Street
                            Singapore 069414</p>
                        <p><i className="fas fa-phone-alt fs-3 my-3"></i> +65 7865 7679</p>
                        <p><i className="fas fa-envelope fs-3 my-3"></i> info@weawines.com.sg</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default ContactUs