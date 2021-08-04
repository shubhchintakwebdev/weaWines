import React,{useState,useEffect} from 'react'
import { useParams,Link } from "react-router-dom";
import Nav1 from '../Components/Nav1';
import Nav2 from '../Components/Nav2';
import Footer from '../Components/Footer';
const axios = require('axios');

const RelatedEventsComponent=({id,content,cid,index,img})=>{
    if(cid===id)
    {
        return (<></>)
    }
    else{
        return (  <>
            <div className="col-4 mt-2">
                <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-8 mt-3">
              <Link to={{pathname:`/event/${id}`,state:index}} style={{textDecoration:"none",color:"black"}}><p style={{fontSize:"14px"}}>{content.slice(0,35)}...</p></Link>
            </div>
            </>)
    }
}
const EventsPage = ({location}) => {

    let {id}=useParams()
    const [events,setEvents]=useState()
    const [eventsArray,setEventsArray]=useState([])
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const formatDate=(date)=>{
        let y=date.slice(0,4)
        let m=date.slice(5,7)
        let d=date.slice(8,10)
        let m2=months[Number(m)-1] 
        return `${d} ${m2} ${y}`
    }

    const formatTime=(time)=>{
        let h=time.slice(0,2)
        let a="AM"
        if(Number(h)>12)
        {
            h=`${Number(h)-12}`
            a="PM"
        }
        return `${h}:${time.slice(3,5)} ${a}`
    }

    useEffect(() => {
        axios.get(`https://weawines.shubhchintak.co/wp-json/jet-cct/events/${id}`).then(function (response){
                setEvents(response.data)
            })
            .catch(function (error){
                console.log(error);
            })
    }, [id])
    useEffect(() => {
        axios.get(`https://weawines.shubhchintak.co/wp-json/jet-cct/events`).then(function (response){
                setEventsArray(response.data)
            })
            .catch(function (error){
                console.log(error);
            })
    }, [id,eventsArray])

    return (
        <>
            <Nav1 />
            <Nav2 />
            {events&&<div className="aui" style={{backgroundImage:`url(${events.featured_image})`}}></div>}
            {!events&&<div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}
            {events&&<section className="plr my-5">
                <div className="row">
                    <div className="col-9">
                        <h4>{events.title}</h4>
                        <p className="fwl my-4" style={{fontSize:"15px"}}><i className="fas fa-map-marker-alt"></i> {events.location} <i className="far fa-clock"></i> {formatDate(events.date)} , {formatTime(events.time)} </p>
                        <div className="fwl">{events.details}</div>
                        <div className="my-4 fs-4" >Share <i className="fab fa-facebook-square" style={{color:"#3b5998",marginLeft:"30px"}}></i> <i className="fab fa-twitter" style={{color:"#1DA1F2"}}></i> <i className="fab fa-linkedin-in" style={{color:"#0e76a8"}}></i></div>
                        <hr />
                        <div className="d-flex justify-content-between my-3 mt-5" >
                            {eventsArray.length>0&&(location.state!==0)&&<Link to={{pathname:`/event/${eventsArray[location.state-1]._ID}`,state:location.state-1}} style={{textDecoration:'none',color:"#9B2120"}}><h6><i className="fas fa-arrow-left"></i> {eventsArray[location.state-1].title}</h6></Link>}
                            {eventsArray.length>0&&(location.state!==eventsArray.length-1)&&<Link to={{pathname:`/event/${eventsArray[location.state+1]._ID}`,state:location.state+1}} style={{textDecoration:'none',color:"#9B2120"}}><h6>{eventsArray[location.state+1].title}<i className="fas fa-arrow-right"></i></h6></Link>}
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
                                <h5>Related Events</h5>
                                <hr />
                            </div>
                            <div className="row m-1">
                                {eventsArray.length>0&&eventsArray.map((item,index)=>{return <RelatedEventsComponent key={index} id={item._ID} content={item.title} cid={id} index={index} img={item.featured_image}/>})}
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            <Footer />
        </>
    )
}

export default EventsPage