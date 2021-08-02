import React from 'react'
import {Link} from "react-router-dom"
const Nav1 = () => {
    return (
        <>
       <div className="bg-danger text-light plr d-md-block d-none " style={{height:"30px"}}>
           <div className="row fwl">
               <div className="col-6">
                  <p>Free Delivery for $300 and above, till 13th July 2021 only</p> 
               </div>
               <div className="col-6 text-end">
                   <p><i className="fas fa-user" data-toggle="modal" data-target="#exampleModal"></i> <Link to="/register" className="nav-links2">Register</Link>/Login| <Link to="/cart" className="nav-links2"><i className="fas fa-shopping-cart"></i> Cart Items (0)</Link></p>
               </div>
           </div>
       </div>
       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div class="modal-body">
             ...
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary">Save changes</button>
           </div>
         </div>
       </div>
     </div>
     </>
    )
}
export default Nav1