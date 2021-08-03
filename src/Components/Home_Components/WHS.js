import React from 'react'
import image1 from "./wine_image.jpg"
const WHS = () => {
    return (
        <section className="plr py-5">
                <h3 className="py-3 text-danger" style={{fontWeight:"lighter"}}>WEA from Home Submission</h3>
                <div className="row">
                    <div className="col-lg-5 shadow">
                        <img src={image1} alt="" className="img-fluid py-3" />
                    </div>
                    <div className="col-lg-7 text-md-start text-center fwl d-flex flex-column justify-content-evenly align-items-md-start align-items-center py-4">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquam, dolor!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus dicta cum nobis architecto doloribus rerum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                            nam recusandae labore? Unde beatae id voluptatum, delectus in possimus cum! Nulla unde vero
                            assumenda porro!</p>
                        <div className="d-flex justify-content-md-between flex-md-row flex-column">
                            <button type="button" className="btn btn-danger my-2 mx-3" style={{minWidth:"300px",borderRadius:"25px"}}>Stater Tier Subscription <i className="fas fa-arrow-right"></i></button>
                            <button type="button" className="btn btn-danger my-2 mx-3" style={{minWidth:"300px",borderRadius:"25px"}}>Advance Tier Subscription <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default WHS
