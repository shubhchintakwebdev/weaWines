/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
const axios = require('axios');
const NewsComponent=({image,title,postedBy,date,content,id,fid,index})=>{
    console.log("index",index)
    const [newsImage,setNewsImage]=useState('')
    useEffect(() => {
        // scrollToTop()
        if(fid===""){
            setNewsImage("https://source.unsplash.com/1600x400/?wine")
        }
        else{
             axios.get(`https://weawines.shubhchintak.co/wp-json/wp/v2/media/${fid}`).then(function (response){
                     setNewsImage(response.data.media_details.sizes.full.source_url)
        }).catch(function (error){
            console.log(error);
        })
    }
          
    }, [id])
    
    const createMarkup = () =>{
        return {__html: content};
      }

    return(
       <>
            {index<3&&<><div className="col-md-4 my-3">
                <img src={newsImage} alt="" className="img-fluid"
                    style={{borderRadius:"15px" , height:"350px" , width:"350px" , objectFit:"cover"}} />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center p-3">
                <h5 style={{fontWeight:"bold"}}>{title}</h5>
                <p className="fwl my-2" style={{fontSize:"14px"}}><i className="fas fa-user"></i> {postedBy}&nbsp;&nbsp; <i className="far fa-calendar"></i> {date} </p>
                <div className="fwl my-2" style={{fontSize:"16px"}}><div dangerouslySetInnerHTML={createMarkup()} className="dangeroushtml2News" style={{overflowX:'hidden'}}></div></div>
                <Link to={{pathname:`/news/${id}`,state:index}} style={{textDecoration:"none",fontSize:"16px"}}><p className="text-danger mt-1" id={id}>View Details&nbsp; <i className="fas fa-arrow-right"></i></p></Link>
            </div></>}
        </>
    )
}
const News = () => {

    const [news,setNews]=useState([])
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
        axios.get('https://weawines.shubhchintak.co/wp-json/wp/v2/posts').then(function (response){
                console.log("Response :")
                console.log(response.data);
                setNews(response.data)
            })
            .catch(function (error){
                console.log(error);
            })
    }, [])
    return (
        <section className="plr py-5 fs-5">
                <h3 className="text-danger fwl">News</h3>
                <div className="row py-3">
                    {news.length===0&&<div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}
                    {news.length!==0&&news.map((item,index)=>{return <NewsComponent image="https://source.unsplash.com/400x400/?wine" key={index} title={item.title.rendered} postedBy="Admin" date={`${formatDate(item.date.slice(0,10))} , ${formatTime(item.date.slice(11,16))}`} content={item.excerpt.rendered} id={item.id}  fid={item.featured_media} index={index}/>})}
                </div>
            </section>
    )
}
export default News