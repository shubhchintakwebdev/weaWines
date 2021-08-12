import React from "react";
import Nav1 from "../Components/Nav1.js";
import Nav2 from "../Components/Nav2";
import Footer from "../Components/Footer";
import { useState } from "react";

const MailingList = () => {
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
			<div className="position-relative">
				<div className="op"></div>
				<div className="aui d-flex justify-content-center align-items-center">
					<div className="create d-flex justify-content-center align-items-center">
						<h1 className="text-uppercase text-light fwl">Mailing List</h1>
					</div>
				</div>
			</div>
			<section className="plr my-5 fwl">
				<div
					style={{
						backgroundColor: "#eeeeee",
						height: "auto",
						maxWidth: "600px",
						margin: "auto",
					}}
					className="p-5 d-flex flex-column justify-content-evenly align-items-center"
				>
					<h3 className="text-uppercase text-danger text-center my-3">
						Join Our Mailing List
					</h3>
					<p className="text-center my-3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
						vel perferendis sapiente similique omnis consequuntur aperiam
						voluptatem officiis sit repudiandae!
					</p>
					<div id="mc_embed_signup">
					<form action="https://yahoo.us5.list-manage.com/subscribe/post?u=0a1e7e2fd5de57a26a233c6d9&amp;id=d14e763f47" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate> 
					<div id="mc_embed_signup_scroll">
					<div className="input-group mb-3" style={{ maxWidth: "300px" }}>
						<span className="input-group-text" id="basic-addon1">
							<i className="fas fa-user"></i>
						</span>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="input-group mb-3" style={{ maxWidth: "300px" }}>
						<span className="input-group-text" id="basic-addon1">
							<i className="fas fa-envelope"></i>
						</span>
						<input
							type="text"
							className="form-control"
							placeholder="E-Mail Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mc-field-group">
					<label for="mce-FNAME">Full Name  <span className="asterisk">*</span>
				</label>
					<input type="text" value="" name="FNAME" className="required" id="mce-FNAME"/>
				</div>
				<div className="mc-field-group">
					<label for="mce-EMAIL">Email Address  <span className="asterisk">*</span>
				</label>
					<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
				</div>
				<div  aria-hidden="true"><input type="text" name="b_0a1e7e2fd5de57a26a233c6d9_d14e763f47" tabindex="-1" value=""/></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>  
				
					<button
						type="button"
						className="btn btn-danger my-3"
						style={{ borderRadius: "25px", width: "300px" }}
						onClick={handleSubmit}
					>
						Subscribe
					</button>
					</div>
					</form>
					</div>
					<p style={{ fontSize: "15px", textAlign: "center" }}>
						By clicking on "SUBSCRIBE" , you agree to WEA wines's{" "}
						<span style={{ textDecoration: "underline" }}>Terms of Use</span>{" "}
						and{" "}
						<span style={{ textDecoration: "underline" }}>Privacy Policy</span>
					</p>


{/* 					
 
<div id="mc_embed_signup">
<form action="https://yahoo.us5.list-manage.com/subscribe/post?u=0a1e7e2fd5de57a26a233c6d9&amp;id=d14e763f47" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-FNAME">Full Name  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME"/>
</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0a1e7e2fd5de57a26a233c6d9_d14e763f47" tabindex="-1" value=""/></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
    </div>
</form>
</div> */}

				</div>
			</section>
			<Footer />
		</>
	);
};

export default MailingList;
