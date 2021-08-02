/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
const axios = require('axios');

const EventsComponent=({image,address,date,title,content,index})=>{
    return(
        <>
           {index<3&&<div className="col-4 my-3" style={{marginRight:"40px",height:"auto",width:"420px"}}>
                <div style={{backgroundImage:`url(${image})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"280px",width:"100%",borderRadius:"25px"}}
                    className="position-relative">
                    <div className="bg-dark position-absolute bottom-0 start-0 pt-3"
                        style={{opacity:"0.7",width:"100%",borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}}>
                        <p className="mx-3"><i className="fas fa-map-marker-alt"></i> {address} </p>
                        <p className="mx-3"><i className="far fa-clock"></i> {date} </p>
                    </div>
                </div>
                <div className="text-dark mt-3">
                    <p>{title}</p>
                    <p style={{fontWeight:"lighter"}}>{content}</p>
                </div>
            </div>}
        </>
    )
}

const Events = () => {

    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const [events,setEvents]=useState([])

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
        axios.get('https://weawines.shubhchintak.co/wp-json/jet-cct/events/').then(function (response){
                console.log("Response :")
                console.log(response.data);
                setEvents(response.data)
            })
            .catch(function (error){
                console.log(error);
            })
    }, [])
    
    return (
        <section className="plr py-5" style={{backgroundColor:"#efefef"}}>
        <div className="d-flex justify-content-between py-3">
            <h3 className="text-danger" style={{fontWeight:"lighter"}}>Events</h3>
            <p style={{fontSize:"12px"}}>VIEW ALL <i className="fas fa-arrow-right"></i></p>
        </div>
        <div className="d-flex text-light justify-content-xl-between ovx">
            {events.length===0&&<div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}
            {events.length!==0&&events.map((item,index)=>{return <EventsComponent key={index} image={item.featured_image} address={item.location} date={`${formatDate(item.date)} , ${formatTime(item.time)}`} title={item.title} content={item.excerpt_} index={index}/>})}
            {/*<EventsComponent index={2} image="https://source.unsplash.com/1600x900/?drinks" address="kolkata" date="23 April 2021 , 4:57" title="Text title 3" content="one two three four"/>*/}
        </div>
    </section>
    )
}

export default Events
