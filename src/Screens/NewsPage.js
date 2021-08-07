import React,{useState,useEffect} from 'react'
import { useParams,Link } from "react-router-dom";
import Nav1 from '../Components/Nav1';
import Nav2 from '../Components/Nav2';
import Footer from '../Components/Footer';
import News from '../Components/Home_Components/News'
const axios = require('axios');

// const RelatedNewsComponent=({id,content,cid,index})=>{
//     if(cid===id)
//     {
//         return (<></>)
//     }
//     else{
//         return (  <>
//             <div className="col-4 mt-2">
//                 <img src="https://source.unsplash.com/400x400/?news" alt="" className="img-fluid" />
//             </div>
//             <div className="col-8 mt-3">
//               <Link to={{pathname:`/news/${id}`,state:index}} style={{textDecoration:"none",color:"black"}}><p style={{fontSize:"14px"}}>{content.slice(0,35)}...</p></Link>
//             </div>
//             </>)
//     }
// }
// location
const NewsPage = () => {
    //  let {id}=useParams()

    // const [news,setNews]=useState()
    // const [newsArray,setNewsArray]=useState([])
    // const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    // const formatDate=(date)=>{
    //     let y=date.slice(0,4)
    //     let m=date.slice(5,7)
    //     let d=date.slice(8,10)
    //     let m2=months[Number(m)-1] 
    //     return `${d} ${m2} ${y}`
    // }
    

    //   useEffect(() => {
    //     window.scrollTo(0, 0);
    //   },[]); 
    //   useEffect(() => {
    //     axios.get(`https://weawines.shubhchintak.co/wp-json/wp/v2/posts`).then(function (response){
    //             setNewsArray(response.data)
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }, [id,newsArray])
    // useEffect(() => {
    //     // scrollToTop()
    //      axios.get(`https://weawines.shubhchintak.co/wp-json/wp/v2/posts/${id}`).then(function (response){
    //             setNews(response.data)
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }, [id])
   

    return (
        <>
            <Nav1 />
            <Nav2 />
            <div className="position-relative">
               <div className="op"></div>
               <div className="aui d-flex justify-content-center align-items-center">
                   <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>NEWS</h1>
               </div>
           </div>
            <News />
            <Footer />
        </>
    )
}

export default NewsPage