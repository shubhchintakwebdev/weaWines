import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bordeaux from "./Bordeaux";
import Jura from "./Jura";
import Savoie from "./Savoie";

class Languedoc extends Component{
    constructor(props) {
        super(props);
        this.state = {
          postname:[],
          id:[]
        };
      }
    
      render(){
          return(
            <div className=" container mv3">
                <div className="row ">
                    <div className="col-3 m-0 p-0">
                        <div className="row burgundy">
                        
                            <div className="image middle tc white ">
                                    <b>LANGUEDOC</b>
                            </div>
                        </div>
                        <div className="row content white p-3">                 
                        <div className="hidden"> 
                            {
                                this.props.posts.filter((post)=>{
                                    return post.wine_category[0]===24;
                            }).map((post)=>{
                                return this.state.postname.push(post.title.rendered)
                            })
                            }
                              {
                             this.props.posts.filter((post)=>{
                                return post.wine_category[0]===24;
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
                    <Jura  posts={this.props.posts}/>
                    <Savoie  posts={this.props.posts}/>
                    <Bordeaux  posts={this.props.posts}/>

                </div>
            </div>
          )
      }
    }
 export default Languedoc