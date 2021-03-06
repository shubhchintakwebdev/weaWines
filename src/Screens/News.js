import React,{useState,useEffect} from 'react'
import { useParams,Link,useLocation  } from "react-router-dom";
import Nav1 from '../Components/Nav1';
import Nav2 from '../Components/Nav2';
import Footer from '../Components/Footer';
 
const axios = require('axios');

const RelatedNewsComponent=({id,content,cid,fid,index})=>{
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
          
    }, [fid])
    // if(cid===id)
    // {
    //     return (<></>)
    // }
    // else{
        return (  <>
            <div className="col-4 mt-2">
                <img src={newsImage} width="100px" height="100px" alt="" />
            </div>
            <div className="col-8 mt-3 my-5">
              <Link to={{pathname:`/news/${id}`,state:index}} style={{textDecoration:"none",color:"black"}}><p style={{fontSize:"14px"}}>{content.slice(0,35)}...</p></Link>
            </div>
            </>)
    // }
}
const NewsPage = ({location}) => {
     let {id}=useParams()
    const [newsImage,setNewsImage]=useState('')
    var fid=""
    const { pathname } = useLocation();
    const [news,setNews]=useState()
    const [newsArray,setNewsArray]=useState([])
    const [dataHtml, setDataHtml]=useState('')
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const formatDate=(date)=>{
        let y=date.slice(0,4)
        let m=date.slice(5,7)
        let d=date.slice(8,10)
        let m2=months[Number(m)-1] 
        return `${d} ${m2} ${y}`
    }
    

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

      useEffect(() => {
        axios.get(`https://weawines.shubhchintak.co/wp-json/wp/v2/posts`).then(function (response){
                setNewsArray(response.data)
            })
            .catch(function (error){
                console.log(error);
            })
    }, [id,newsArray])
    useEffect(() => {
        // scrollToTop()
         axios.get(`https://weawines.shubhchintak.co/wp-json/wp/v2/posts/${id}`).then(function (response){
            setNews(response.data)
            fid = response.data.featured_media;
            console.log(fid)
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
    })}, [id])
    
    const createMarkup = () =>{
        return {__html: news.content.rendered};
      }
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const username='developer1';
    const password="Develop@1234";

	const handleSubmit = async () => {
        let headers= new Headers();
        headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

		const res = await fetch(
			`/wp-json/jet-cct/mailing_list?subsciber_name=${name}&email=${email}`,
			{
				method: "post",
                headers: headers
			}
		);

		const data = await res.json();
		console.log(data);
		setName("");
		setEmail("");
	};

    return (
        <>
            <Nav1 />
            <Nav2 />
            <img className="aui0" alt="" src={newsImage}></img>
            {!news&&<div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}
            {news&&<section className="plr my-5">
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                        <h4 style={{fontWeight:"bold"}}>{news.title.rendered}</h4>
                        <p className="fwl my-4" style={{fontSize:"15px"}}><i className="fas fa-user"></i> Admin&nbsp;&nbsp; <i
                                className="far fa-calendar"></i> {formatDate(news.date.slice(0,10))} </p>
                        <div className=" " ><div dangerouslySetInnerHTML={createMarkup()} className="dangeroushtml2news" style={{overflowX:'hidden'}}></div></div>
                        <div className="my-4 fs-4" >Share <i className="fab fa-facebook-square" style={{color:"#3b5998",marginLeft:"30px"}}></i> <i className="fab fa-twitter" style={{color:"#1DA1F2"}}></i> <i className="fab fa-linkedin-in" style={{color:"#0e76a8"}}></i></div>
                        <hr />
                        <div className="d-flex justify-content-between my-3 mt-5" >
                        {newsArray.length>0&&(location.state!==0)&&(location.state!==undefined)&&<Link to={{pathname:`/news/${newsArray[location.state-1].id}`,state:location.state-1}} style={{textDecoration:'none',color:"#9B2120"}}><h6><i className="fas fa-arrow-left"></i> {newsArray[location.state-1].title.rendered}</h6></Link>}
                            {newsArray.length>0&&(location.state!==newsArray.length-1)&&(location.state!==undefined)&&<Link to={{pathname:`/news/${newsArray[location.state+1].id}`,state:location.state+1}} style={{textDecoration:'none',color:"#9B2120"}}><h6>{newsArray[location.state+1].title.rendered}  <i className="fas fa-arrow-right"></i></h6></Link>}
                        </div>
                        
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="overflow-auto pt-3"
                            style={{height:"450px",width:"100%",margin:"auto",backgroundColor:"#F3F3F3"}}>
                            <div className="m-3 ">
                                <h5 style={{fontWeight:"bold"}}>Related News</h5>
                                <hr />
                            </div>
                            <div className="row m-1">
                                {newsArray.length>0&&newsArray.map((item,index)=>{return <RelatedNewsComponent key={index} id={item.id} content={item.title.rendered} cid={id} fid={item.featured_media} index={index}/>})}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10   ">
                    <div style={{backgroundColor:"#eeeeee",height:"auto",width:"100%",marginTop:"90px",marginBottom:"90px"}}
                            className="p-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3 className="text-uppercase text-danger text-center my-3">Join Our Mailing List</h3>
                            <p className="text-center my-3">Register your interest to receive our tri-weekly special offers.</p>
                            <div className="input-group mb-3" style={{maxWidth:"500px"}}>
                                <span className="input-group-text" id="basic-addon1"><i
                                        className="fas fa-user"></i></span>
                                <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                            </div>
                            <div className="input-group mb-3" style={{maxWidth:"500px"}}>
                                <span className="input-group-text" id="basic-addon1"><i
                                        className="fas fa-envelope"></i></span>
                                <input type="text" className="form-control" placeholder="E-Mail Address" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            <button type="button" className="btn btn-danger my-3"
                                style={{borderRadius:"25px",width:"300px"}} onClick={handleSubmit}>Subscribe</button>
                            <p style={{fontSize:"15px",textAlign:"center"}}>By clicking on "SUBSCRIBE" , you agree to
                                WEA wines's <span style={{textDecoration:"underline"}}>Terms of Use</span> and <span
                                    style={{textDecoration:"underline"}}>Privacy Policy</span></p>
                        </div>
                        </div>
                        <div className="col-md-2"></div>

                        </div>
                </div>
            </section>}
            <Footer />
        </>
    )
}

export default NewsPage