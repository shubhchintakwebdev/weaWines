/* eslint-disable no-unused-vars */
import React from 'react'

const Events = () => {


    const eventsJSON=[{
        "image":"",
        "address":"",
        "date":""
    }]
    
    return (
        <section className="plr py-5" style={{backgroundColor:"#efefef"}}>
        <div className="d-flex justify-content-between py-3">
            <h3 className="text-danger" style={{fontWeight:"lighter"}}>Events</h3>
            <p style={{fontSize:"12px"}}>VIEW ALL <i className="fas fa-arrow-right"></i></p>
        </div>
        <div className="d-flex text-light justify-content-xl-between ovx">
            <div className="col-4 my-3" style={{marginRight:"40px",height:"auto",width:"420px"}}>
                <div style={{backgroundImage:`url("https://source.unsplash.com/1600x900/?wine")`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"280px",width:"100%",borderRadius:"25px"}}
                    className="position-relative">
                    <div className="bg-dark position-absolute bottom-0 start-0 p-1"
                        style={{opacity:"0.7",width:"100%",borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}}>
                        <p><i className="fas fa-map-marker-alt"></i> Blk 341, Le Bon Funk, 29 Club Street
                            Singaore 069414</p>
                        <p><i className="far fa-clock"></i> 4 March 2021 , Tuesday , 4:30 PM</p>
                    </div>
                </div>
                <div className="text-dark mt-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p style={{fontWeight:"lighter"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio iusto incidunt necessitatibus quam cum, deserunt reprehenderit esse voluptas!</p>
                </div>
            </div>
            <div className="col-4 my-3" style={{marginRight:"40px",height:"auto",width:"420px"}}>
                <div style={{backgroundImage:`url("https://source.unsplash.com/1600x900/?vodka")`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"280px",width:"100%",borderRadius:"25px"}}
                    className="position-relative">
                    <div className="bg-dark position-absolute bottom-0 start-0 p-1"
                        style={{opacity:"0.7",width:"100%",borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}}>
                        <p><i className="fas fa-map-marker-alt"></i> Blk 341, Le Bon Funk, 29 Club Street
                            Singaore 069414</p>
                        <p><i className="far fa-clock"></i> 4 March 2021 , Tuesday , 4:30 PM</p>
                    </div>
                </div>
                <div className="text-dark mt-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p style={{fontWeight:"lighter"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio iusto incidunt necessitatibus quam cum, deserunt reprehenderit esse voluptas!</p>
                </div>
            </div>
            <div className="col-4 my-3" style={{marginRight:"40px",height:"auto",width:"420px"}}>
                <div style={{backgroundImage:`url("https://source.unsplash.com/1600x900/?beer")`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"280px",width:"100%",borderRadius:"25px"}}
                    className="position-relative">
                    <div className="bg-dark position-absolute bottom-0 start-0 p-1"
                        style={{opacity:"0.7",width:"100%",borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}}>
                        <p><i className="fas fa-map-marker-alt"></i> Blk 341, Le Bon Funk, 29 Club Street
                            Singaore 069414</p>
                        <p><i className="far fa-clock"></i> 4 March 2021 , Tuesday , 4:30 PM</p>
                    </div>
                </div>
                <div className="text-dark mt-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p style={{fontWeight:"lighter"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio iusto incidunt necessitatibus quam cum, deserunt reprehenderit esse voluptas!</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Events
