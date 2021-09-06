import React from 'react'
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"

const About = () => {
    return (
        <>
        <Nav1/>
        <Nav2/>
            <div className="position-relative">
                <div className="op"></div>
                <div className="aui d-flex justify-content-center align-items-center">
                    <div className="create d-flex justify-content-center align-items-center">
                        <h1 className="text-uppercase text-light fwl" >About</h1>
                    </div>
                </div>
            </div>
            <section className="plr my-5">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column justify-content-center mx-md-1 my-2 who-are-we">
                        <h1 className="text-md-center">Who Are We?</h1>
                        <h6 className="text-md-end mt-4">Mission Statement</h6>
                    </div>
                    <div className="col-md-8 fwl d-flex flex-column justify-content-center">
                        <p>WEA Wines is a fine wine merchant started by wine lovers for wine lovers. We dedicate ourselves in wines from various regions in France. We make it our mission to bring you wines which are authentic and with the utmost quality – made by real people not anonymous corporations. ALL the wines we offer are wines which we are happy to drink ourselves, hence our motto: <b>Wines we love to drink!</b></p>
                        {/* <p className="text-danger" style={{fontStyle:"italic"}}>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, ad.</p> */}
                    </div>
                </div>
            </section>
            {/* <section className="plr my-5 fwl">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ut debitis culpa non provident
                    illo ea recusandae itaque voluptates, molestiae ipsam quo alias mollitia eius quis? Ipsam, id
                    repudiandae nobis accusantium quis aut cumque dolores quae qui. Repellendus dicta ipsum deserunt,
                    cumque in soluta? Veritatis doloremque rem magnam eveniet perspiciatis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsum quae, beatae, assumenda,
                    quisquam amet tenetur debitis laborum hic quos tempore maxime veritatis! Nesciunt accusantium vero
                    earum hic consequuntur ad! Aspernatur consequuntur nihil maxime illum impedit recusandae ducimus a
                    consequatur repudiandae earum facere, dolorem ratione hic nobis tempora dolores placeat quae!
                    Aliquid assumenda recusandae reiciendis. Id praesentium quidem aut ipsam. Vero, aliquid quia sunt ea
                    mollitia soluta natus beatae aliquam pariatur rerum voluptate dicta vitae! Nemo cupiditate numquam
                    amet ipsam alias earum facere. Quia quidem delectus accusantium et rem assumenda sunt voluptates,
                    est molestias hic obcaecati nesciunt incidunt in eius.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quia, rem minima itaque ad vel
                    deleniti officia facere perspiciatis dicta. Dolorem impedit consequatur et reiciendis officia nobis
                    quasi fuga aspernatur explicabo quae, quam fugit tenetur necessitatibus iste, nulla corrupti ea?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ab saepe, numquam iusto consectetur
                    error quo iure nam nisi similique quae totam quisquam harum eveniet iste tempore facere non mollitia
                    fugit adipisci accusantium vel veniam, praesentium voluptatum. Iure nostrum in consectetur quis
                    doloremque veniam neque ut facere a laudantium ipsa debitis repudiandae quas aut quos odio rem
                    natus, possimus praesentium quasi modi consequatur! Odio iure cum, doloribus esse blanditiis ullam
                    asperiores debitis delectus nihil doloremque ex repudiandae a enim nobis.</p>
            </section> */}
            <Footer/>
        </>
    )
}

export default About
