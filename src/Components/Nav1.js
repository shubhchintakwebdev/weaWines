import React from 'react'
import {Link} from "react-router-dom"
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:"25px",
      width:"400px",
    },
  };
Modal.setAppElement('#root');
const Nav1 = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [passVisible,setPassVisible]=React.useState(false)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
    return (
        <>
            <div className="bg-danger text-light plr d-md-block d-none " style={{height:"30px"}}>
                <div className="row fwl">
                    <div className="col-6">
                        <p>Free Delivery for $300 and above, till 13th July 2021 only</p>
                    </div>
                    <div className="col-6 text-end">
                        <p><i className="fas fa-user"></i>
                            <Link to="/register" className="nav-links2"> Register</Link>/<span onClick={openModal}
                                className="cp">Login</span> |
                            <Link to="/cart" className="nav-links2"><i className="fas fa-shopping-cart"></i> Cart Items
                            (0)</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="text-danger mb-3">Login</h4>
                    <div className="input-group mb-2" style={{borderStyle:"solid",borderColor:"black",borderWidth:"1px",borderRadius:"5px"}}>
                        <input type="text" className="form-control" placeholder="Email" style={{borderStyle:"none"}}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" style={{borderStyle:"none"}}><i className="fas fa-user"></i></button>
                        </div>
                    </div>
                    <div className="input-group mb-3" style={{borderStyle:"solid",borderColor:"black",borderWidth:"1px",borderRadius:"5px"}}>
                        <input type={passVisible?"text":"password"} className="form-control" placeholder="Password" style={{borderStyle:"none"}} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" style={{borderStyle:"none"}} onClick={()=>{setPassVisible(!passVisible)}}>{passVisible&&<i className="far fa-eye-slash"></i>}{!passVisible&&<i className="far fa-eye"></i>}</button>
                        </div>
                    </div>
                    <div style={{width:"100%"}}>
                    <p className="text-danger text-end cp">Forget Password?</p>
                    </div>
                    <button type="button" className="btn btn-danger mt-2 mb-2"
                        style={{borderRadius:"25px",width:'300px'}}>Log In</button>
                    <p>or</p>
                    <button type="button" className="btn btn-light mb-2 shadow"
                        style={{borderRadius:"25px",width:'300px'}}>Login with Google</button>
                    <button type="button" className="btn btn-light mb-2 shadow"
                        style={{borderRadius:"25px",width:'300px'}}>Login with Facebook</button>
                    <p className="text-center mt-4">
                        If you don't have an account ? <Link to="/register" style={{textDecoration:"none"}}><span className="text-danger cp">Signup</span></Link> Here
                    </p>
                </div>
            </Modal>
        </>
    )
}
export default Nav1