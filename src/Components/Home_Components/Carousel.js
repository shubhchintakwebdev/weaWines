import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner chgt">
                    <div className="carousel-item active">
                        <div style={{height:"100%",width:"100%",backgroundColor:"black"}}></div>
                        <img src="https://source.unsplash.com/1600x600/?champagne" className="d-md-block d-none w-100"
                            alt="..." />
                        <img src="https://source.unsplash.com/1600x1000/?champagne" className="d-md-none d-block w-100"
                            alt="..." />
                        <div className="carousel-caption d-block">
                            <h2 style={{textTransform:"uppercase"}}>First slide label</h2>
                            <p className="myfs2">Some representative placeholder content for the first slide. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Voluptas, provident.</p>
                            <button type="button" className="btn btn-light text-danger d-md-inline d-none"
                                style={{borderRadius:"25px"}}>Explore <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1600x600/?ice" className="d-md-block d-none w-100"
                            alt="..." />
                        <img src="https://source.unsplash.com/1600x1000/?ice" className="d-md-none d-block w-100"
                            alt="..." />
                        <div className="carousel-caption d-block">
                            <h2 style={{textTransform:"uppercase"}}>Second slide label</h2>
                            <p className="myfs2">Some representative placeholder content for the first slide. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Voluptas, provident.</p>
                            <button type="button" className="btn btn-light text-danger d-md-inline d-none"
                                style={{borderRadius:"25px"}}>Explore <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1600x600/?cold" className="d-md-block d-none w-100"
                            alt="..." />
                        <img src="https://source.unsplash.com/1600x1000/?cold" className="d-md-none d-block w-100"
                            alt="..." />
                        <div className="carousel-caption d-block">
                            <h2 style={{textTransform:"uppercase"}}>Third slide label</h2>
                            <p className="myfs2">Some representative placeholder content for the first slide. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Voluptas, provident.</p>
                            <button type="button" className="btn btn-light text-danger d-md-inline d-none"
                                style={{borderRadius:"25px"}}>Explore <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default Carousel
