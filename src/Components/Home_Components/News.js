/* eslint-disable no-unused-vars */
import React from 'react'

const News = () => {


    const newsJSON=[{
        "id":"",
        "title":"",
        "postedBy":"",
        "date":"",
        "para1":"",
        "para2":""
    }]
    return (
        <section className="plr py-5 fs-5">
                <h3 className="text-danger fwl">News</h3>
                <div className="row py-3">
                    <div className="col-md-4 my-3">
                        <img src="https://source.unsplash.com/350x350/?drinks" alt="" className="img-fluid"
                            style={{borderRadius:"25px"}} />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center p-3">
                        <h4>Champange Savart New Release Allocation</h4>
                        <p className="fwl" style={{fontSize:"12px"}}><i className="fas fa-user"></i> Admin <i
                                className="far fa-calendar"></i> 19 Jan 2021</p>
                        <p className="fwl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam laboriosam
                            laudantium neque ad quos! Suscipit!</p>
                        <p className="fwl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque
                            odit earum beatae sed. Eaque, facere perferendis! Ipsam maxime unde minus aspernatur labore
                            dolore vel?</p>
                        <p className="text-danger">View Details <i className="fas fa-arrow-right"></i></p>
                    </div>
                    <div className="col-md-4 my-3">
                        <img src="https://source.unsplash.com/350x350/?cocktail" alt="" className="img-fluid"
                            style={{borderRadius:"25px"}} />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center p-3">
                        <h4>Champange Savart New Release Allocation</h4>
                        <p className="fwl" style={{fontSize:"12px"}}><i className="fas fa-user"></i> Admin <i
                                className="far fa-calendar"></i> 19 Jan 2021</p>
                        <p className="fwl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam laboriosam
                            laudantium neque ad quos! Suscipit!</p>
                        <p className="fwl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque
                            odit earum beatae sed. Eaque, facere perferendis! Ipsam maxime unde minus aspernatur labore
                            dolore vel?</p>
                        <p className="text-danger">View Details <i className="fas fa-arrow-right"></i></p>
                    </div>
                    <div className="col-md-4 my-3">
                        <img src="https://source.unsplash.com/350x350/?bar" alt="" className="img-fluid"
                            style={{borderRadius:"25px"}} />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center p-3">
                        <h4>Champange Savart New Release Allocation</h4>
                        <p className="fwl" style={{fontSize:"12px"}}><i className="fas fa-user"></i> Admin <i
                                className="far fa-calendar"></i> 19 Jan 2021</p>
                        <p className="fwl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam laboriosam
                            laudantium neque ad quos! Suscipit!</p>
                        <p className="fwl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque
                            odit earum beatae sed. Eaque, facere perferendis! Ipsam maxime unde minus aspernatur labore
                            dolore vel?</p>
                        <p className="text-danger">View Details <i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>
            </section>
    )
}

export default News
