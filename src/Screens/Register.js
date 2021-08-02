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
                    <div className="w-100 d-flex justify-content-center">
                       <Link to="/"><img src={logo} alt="" style={{height:"80px",width:"180px"}} /></Link> 
                    </div>
                    <div className="form my-5" style={{width:"98%"}}>
                        <h3 className="text-danger mb-5">Signup</h3>
                        <div className="row my-4">
                            <div className="col-6">
                                <div className="form-group my-3">
                                    <label for="exampleInputEmail1">First Name</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Last Name</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Contact No.</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Confirm Password</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-danger mt-5 mb-2"
                                style={{borderRadius:"25px",width:'200px'}}>Sign Up</button>
                        </div>
                        <p style={{fontSize:"15px",textAlign:"center"}}>By clicking on "SUBSCRIBE" , you agree to WEA
                            wines's Terms of Use and Privacy Policy</p>
                    </div>
                    <p className="text-center">
                        If you have an account ? Login Here
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register
