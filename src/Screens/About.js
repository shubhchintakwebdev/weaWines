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
                    <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>About</h1>
                </div>
            </div>
            <section className="plr my-5">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column justify-content-center mx-md-1 mx-auto my-2"
                        style={{backgroundColor:"#eeeeee",borderRadius:"25px",height:"300px",width:"300px"}}>
                        <h1 className="text-center">Who Are We?</h1>
                        <h6 className="text-end mt-4">Mission Statement</h6>
                    </div>
                    <div className="col-md-8 fwl d-flex flex-column justify-content-center">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, cumque minima repellat
                            dolorem voluptatibus, suscipit vel odio deserunt sint soluta itaque fugit commodi vero rerum
                            amet repellendus repudiandae atque numquam rem magnam harum? Nulla, itaque impedit.
                            Consequuntur sed ducimus commodi, laboriosam delectus animi minus a.</p>
                        <p className="text-danger" style={{fontStyle:"italic"}}>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Illo, ad.</p>
                    </div>
                </div>
            </section>
            <section className="plr my-5 fwl">
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
            </section>
            <Footer/>
        </>
    )
}

export default About
