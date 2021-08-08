import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="bg-dark text-light text-start">
				<div className="row plr py-5">
					<div className="col-md-3">
						<h4 className="mb-4" style={{ color: "white" }}>
							Contact
						</h4>
						<p>
							<i className="fas fa-map-marker-alt fs-3"></i> Blk 341, Le Bon
							Funk, 29 Club Street Singaore 069414
						</p>
						<p>
							<i className="fas fa-phone-alt fs-3"></i> +65 7865 7679
						</p>
						<p>
							<i className="fas fa-envelope fs-3"></i> info@weawines.com.sg
						</p>
					</div>
					<div className="col-md-3">
						<h4 className="mb-4" style={{ color: "white" }}>
							Quick Links
						</h4>
						<Link to=""><p style={{ color: "white" }}>My Acccount</p></Link>
						<Link to=""><p style={{ color: "white" }}>My Rewards</p></Link>
						<Link to=""><p style={{ color: "white" }}>My Orders</p></Link>
						<Link to=""><p style={{ color: "white" }}>Contact Us</p></Link>
					</div>
					<div className="col-md-3">
						<h4 className="mb-4" style={{ color: "white" }}>
							Policies
						</h4>
						<Link to="/terms"><p style={{ color: "white" }}>Terms and Conditions</p></Link>
						<Link to="/policy" ><p style={{ color: "white" }}>Privacy Policy</p></Link>
					</div>
					<div className="col-md-3">
						<h4 className="mb-4" style={{ color: "white" }}>
							Our Mailing List
						</h4>
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Enter E-Mail"
							/>
							<div className="input-group-append">
								<button className="btn btn-outline-secondary" type="button">
									<i className="fas fa-share"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div
				className="row text-light plr pt-3"
				style={{ backgroundColor: "black" }}
			>
				<div className="col-md-6">
					<p>
						<i className="far fa-copyright"></i> 2021 , Wea Wines. All Rights
						Reserved.
					</p>
				</div>
				<div className="col-md-6 d-md-flex justify-content-end">
					<Link to="https://www.facebook.com/weawines/"><i style={{ color: "white" }} className="fab fa-facebook-f fs-4 px-3"></i></Link>
					<Link to="https://www.instagram.com/weawines/"></Link><i style={{ color: "white" }} className="fab fa-instagram fs-4 px-3"></i>
					<Link to="https://twitter.com/weawines"><i style={{ color: "white" }} className="fab fa-twitter fs-4 px-3"></i></Link> 
				</div>
			</div>
		</>
	);
};

export default Footer;
