import React from 'react'
import image1 from "./wine_image.jpg"
import ViewStarter  from './viewStarter'
import ViewAdvance from './viewAdvance'
const WHS = () => {
    return (
        <section className="plr py-5">
                <h3 className="py-3 text-danger" style={{fontWeight:"lighter"}}>WEA from Home Submission</h3>
                <div className="row">
                    <div className="col-lg-5 shadow">
                        <img src={image1} alt="" className="img-fluid py-3" />
                    </div>
                    <div className="col-lg-7 text-md-start text-center fwl d-flex flex-column justify-content-evenly align-items-md-start align-items-center py-4">
                    <p>A wine subscription plan like no others.</p>
                        <p>Choose from <span style={{color:"#9B2120"}}>STARTER</span> or <span style={{color:"#9B2120"}}>ADVANCED</span> tier plans.</p>
                        <p>Start with a 3 month subscription OR if you are ready for the challenge – 6 months for more benefits!</p>
                        <p>And what is it NOT? It isn’t a scheme to pull in as many subscribers as possible. Strictly not more than 24 members in each exclusive tier.</p>
                        <div className="d-flex justify-content-md-between flex-md-row flex-column">
                            <ViewStarter/>
                            <ViewAdvance/>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default WHS
