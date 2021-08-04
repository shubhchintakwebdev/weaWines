import React, { Component } from "react";
import { Link } from "react-router-dom";

class Loire extends Component{
    constructor(props) {
        super(props);
        this.state = {
          postname:[],
          id:[]
        };
      }
    
      render(){
          return(
            <div>
               
                <div className="container">
                    <div className="row burgundy">
                
                        <div className="image middle tc white ">
                                <b>LOIRE</b>
                        </div>
                    
                     </div>
                    
                    <div className="row content white p-3">                 
                    <div className="hidden"> 
                        {
                            this.props.posts.filter((post)=>{
                                return post.wine_category[0]===28;
                        }).map((post)=>{
                            return this.state.postname.push(post.title.rendered)
                        })
                        }
                          {
                             this.props.posts.filter((post)=>{
                                return post.wine_category[0]===28;
                        }).map((post)=>{
                            return this.state.id.push(post.id)
                        })
                        }
                        </div>
           
                        {this.state.postname.map((title,i)=>{
                            return( 
                                <div className={"col-"+ this.props.column +" p-2"} key={i}>
                                   <Link to={`/postpage/${this.state.id[i]}`} className="text-decoration-none text-white">- - {title}</Link>
                                </div>
                            )}
                        )} 
        
                    </div>
                </div>
            </div>
          )
      }
    }
 export default Loire;