import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import Nav1 from '../Components/Nav1';
import Nav2 from '../Components/Nav2';
import Footer from '../Components/Footer';
const axios = require('axios');

const NewsPage = () => {

    let {id}=useParams()
    const [news,setNews]=useState()
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    const formatDate=(date)=>{
        let y=date.slice(0,4)
        let m=date.slice(5,7)
        let d=date.slice(8,10)
        let m2=months[Number(m)-1] 
        return `${d} ${m2} ${y}`
    }

    useEffect(() => {
        axios.get(`https://weawines.shubhchintak.co/wp-json/wp/v2/posts/${id}`).then(function (response){
                console.log("Response :")
                console.log(response.data);
                setNews(response.data)
            })
            .catch(function (error){
                console.log(error);
            })
    }, [id])

    return (
        <>
            <Nav1 />
            <Nav2 />
            <div className="aui"></div>
            {!news&&<div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}
            {news&&<section className="plr my-5">
                <div className="row">
                    <div className="col-9">
                        <h4>{news.title.rendered}</h4>
                        <p className="fwl my-4" style={{fontSize:"15px"}}><i className="fas fa-user"></i> Admin <i
                                className="far fa-calendar"></i> {formatDate(news.date.slice(0,10))} </p>
                        <div className="fwl">{news.content.rendered.replace("<p>","").replace("</p>","")}</div>
                        <div className="my-4 fs-4" >Share <i className="fab fa-facebook-square" style={{color:"#3b5998",marginLeft:"30px"}}></i> <i className="fab fa-twitter" style={{color:"#1DA1F2"}}></i> <i className="fab fa-linkedin-in" style={{color:"#0e76a8"}}></i></div>
                        <hr />
                        <div className="text-danger d-flex justify-content-between my-3 mt-5">
                            <h6><i className="fas fa-arrow-left"></i> Link 1</h6>
                            <h6>Link 2 <i className="fas fa-arrow-right"></i></h6>
                        </div>
                        <div style={{backgroundColor:"#eeeeee",height:"auto",width:"100%",marginTop:"90px",marginBottom:"90px"}}
                            className="p-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3 className="text-uppercase text-danger text-center my-3">Join Our Mailing List</h3>
                            <p className="text-center my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Doloribus vel perferendis sapiente
                                similique omnis consequuntur aperiam voluptatem officiis sit repudiandae!</p>
                            <div className="input-group mb-3" style={{maxWidth:"500px"}}>
                                <span className="input-group-text" id="basic-addon1"><i
                                        className="fas fa-user"></i></span>
                                <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="input-group mb-3" style={{maxWidth:"500px"}}>
                                <span className="input-group-text" id="basic-addon1"><i
                                        className="fas fa-envelope"></i></span>
                                <input type="text" className="form-control" placeholder="E-Mail Address" />
                            </div>
                            <button type="button" className="btn btn-danger my-3"
                                style={{borderRadius:"25px",width:"300px"}}>Subscribe</button>
                            <p style={{fontSize:"15px",textAlign:"center"}}>By clicking on "SUBSCRIBE" , you agree to
                                WEA wines's <span style={{textDecoration:"underline"}}>Terms of Use</span> and <span
                                    style={{textDecoration:"underline"}}>Privacy Policy</span></p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="overflow-auto pt-3"
                            style={{height:"370px",width:"90%",margin:"auto",backgroundColor:"#F3F3F3"}}>
                            <div className="m-3">
                                <h5>Related News</h5>
                                <hr />
                            </div>
                            <div className="row m-1">
                                <div className="col-4">
                                    <img src="https://source.unsplash.com/400x400/?news" alt="" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Culpa explicabo excepturi vitae?</p>
                                </div>
                                <div className="col-4">
                                    <img src="https://source.unsplash.com/400x400/?news" alt="" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Culpa explicabo excepturi vitae?</p>
                                </div>
                                <div className="col-4">
                                    <img src="https://source.unsplash.com/400x400/?news" alt="" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Culpa explicabo excepturi vitae?</p>
                                </div>
                                <div className="col-4">
                                    <img src="https://source.unsplash.com/400x400/?news" alt="" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Culpa explicabo excepturi vitae?</p>
                                </div>
                                <div className="col-4">
                                    <img src="https://source.unsplash.com/400x400/?news" alt="" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Culpa explicabo excepturi vitae?</p>
                                </div>
                                <div className="col-4">
                                    <img src="https://source.unsplash.com/400x400/?news" alt="" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Culpa explicabo excepturi vitae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            <Footer />
        </>
    )
}

export default NewsPage