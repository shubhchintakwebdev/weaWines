import React from "react";
import { Link } from "react-router-dom";
import Nav1 from "../Components/Nav1.js";
import thank from "../Images/Thank.gif"
import Nav2 from "../Components/Nav2";
import Footer from "../Components/Footer";

const Thankyou = () => {
	return (
		<>
			<Nav1 />
			<Nav2 />
			<div className="position-relative">
				<div className="op2"></div>
				<div className="aui2 d-flex justify-content-center align-items-center">
					<h1 className="text-uppercase text-light fwl" style={{ zIndex: 5 }}>
						Thankyou
					</h1>
				</div>
			</div>
            <div style={{textAlign:"center"}}>
                <img src={thank} alt="Thank-You" height="300px" width="300px"></img>
                <h3 className="text-uppercase" style={{ zIndex: 5 }}>
					Thankyou
				</h3>
            </div>
			<Footer />
		</>
	);
};

export default Thankyou;