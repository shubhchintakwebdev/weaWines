import React, { Component } from "react";
import Footer from "./Footer";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import "./Postpage.css";
import axios from "axios";
class Postpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          data:[]
        };
      }
      
      componentDidMount() {
        
        axios.get("https://weawines.shubhchintak.co/wp-json/wp/v2/wineries/"+this.props.match.params.id)
        .then(res => {
         
            this.setState({ 
              title:res.data.title.rendered,
              data:res.data.content.rendered
             });
         
        });
    }
    
    createMarkup() {
        return {__html: this.state.data};
      }
    render(){
        return(
            <div>
                <Nav1/>
                <Nav2/>
                <div className="title middle">
                    {
                        this.state.title
                    }
                </div>
                <div dangerouslySetInnerHTML={this.createMarkup()} className="dangeroushtml"/>
                <Footer/>
            </div>
        )
    }
}

export default Postpage;