

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Jura extends Component{
    constructor(props) {
        super(props);
        this.state = {
          postname:[],
          id:[]
        };
      }
    
      render(){
          return(
           
            <div className="col-3">
             
                <div className=" row burgundy">
                    
                        <div className="image middle tc white ">
                                <b>JURA</b>
                        </div>
                    
                </div>
                <div className="row content white p-3">                 
                <div className="hidden"> 
                            {
                                this.props.posts.filter((post)=>{
                                    
                                    return post.wine_category[0]===25;
                            }).map((post)=>{
                                return this.state.postname.push(post.title.rendered)
                            })
                            }
                              {
                             this.props.posts.filter((post)=>{
                                return post.wine_category[0]===25;
                        }).map((post)=>{
                            return this.state.id.push(post.id)
                        })
                        }
                            </div>
                  
                            {this.state.postname.map((title,i)=>{
                                
                                return(
                                     
                                    <div className="col-12 p-2" key={i}>
                                        <Link to={`/postpage/${this.state.id[i]}`} className="text-decoration-none text-white">- - {title}</Link>
                                    </div>
                                )}
                            )} 
            
                </div>
            </div>

          )
      }
    }
 export default Jura;