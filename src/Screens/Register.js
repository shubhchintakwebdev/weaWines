import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/nav_logo.png"
const Register = () => {
    return (
        <>
            <div className="row" style={{height:"100vh"}}>
                <div className="col-md-6 position-relative">
                    <div className="op3"></div>
                    <div className="aui3 d-flex justify-content-center align-items-center">
                        <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Create an Account</h1>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-around">
                    <div className="w-100 d-md-flex justify-content-center d-none">
                        <Link to="/"><img src={logo} alt="" style={{height:"80px",width:"180px"}} /></Link>
                    </div>
                    <div className="form my-5" style={{width:"98%",padding:"3vw"}}>
                        <h3 className="text-danger mb-5">Signup</h3>
                        <div className="row my-4">
                            <div className="col-md-6">
                                <div className="form-group my-3">
                                    <label for="exampleInputEmail1">First Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Last Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Contact No.</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Confirm Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-danger mt-5 mb-4"
                                style={{borderRadius:"25px",width:'200px'}}>Sign Up</button>
                        </div>
                        <p style={{fontSize:"15px",textAlign:"center"}}>By clicking on "SUBSCRIBE" , you agree to WEA
                            wines's
                            <span style={{textDecoration:"underline"}}>Terms of Use</span> and <span
                                style={{textDecoration:"underline"}}>Privacy Policy</span></p>
                    </div>
                    <p className="text-center">
                        If you have an account ? <span className="text-danger cp">Login</span> Here
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register
