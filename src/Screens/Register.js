import React, { useState } from "react";
import { Link, Router, Redirect, useHistory } from "react-router-dom";
import logo from "../Images/nav_logo.png";
import Login from "../Components/Login"
import "./Register.css"
const Register = () => {
	const history = useHistory();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
    const goToPreviousPath = () => {
        history.goBack()
    }
	const handleSignup = async () => {
		console.log(
			firstName,
			lastName,
			email,
			username,
			password,
			confirmPassword
		);
		const res = await fetch(
			"https://weawines.shubhchintak.co/wp-json/letscms/v1/auth/register",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					first_name: firstName,
					last_name: lastName,
					password,
					email,
				}),
			}
		);
		const data = await res.json();
		if (data.status) {
			localStorage.setItem("userdetails", JSON.stringify(data.user));
			localStorage.setItem("user", data.user.display_name);
			localStorage.setItem("token", data.letscms_token);
			history.push("/");
			window.location.reload();
			// console.log(data);
			// Router.push("/");
		}
		// return <Redirect to="/" />;
	};
	return (
		<>
			<div className="row" style={{ height: "100vh" }}>
				<div className="col-md-6 position-relative">
					{/* <div className="op3"></div> */}
					<div className="aui3 d-flex justify-content-center align-items-center">
					<div className="signup d-flex justify-content-center align-items-center">
						<h1 className="text-uppercase text-light fwl ">
							Create an Account
						</h1>
						</div>
					</div>
				</div>
				<div className="col-md-6 d-flex flex-column justify-content-around">
					<div className="w-100 d-md-flex justify-content-center d-none">
						
							<div className="back d-flex justify-content-center">
							<img
								src="https://img.icons8.com/ios/452/long-arrow-left.png"
								alt=""
								style={{width:"60px" }}
								onClick={goToPreviousPath}
							/>
							</div>
							<Link to="/" className="logo">
								<img
									src="https://weawines.shubhchintak.co/wp-content/uploads/2021/08/wea-logo.png"
									alt=""
									style={{ height: "80px", width: "180px" }}
								/>
							</Link>
						
					</div>
					<div className="form" style={{ width: "98%", padding: "2vw" }}>
					<div class="mobile">
						<div className="row">
							<div className="col-3">
								<img
									src="https://img.icons8.com/ios/452/long-arrow-left.png"
									alt=""
									style={{width:"70px" ,height:"50px"}}
									onClick={goToPreviousPath}
									className=" mobile  "
								/>
							</div>
							<div className="col-9 middle" style={{marginTop:"2%"}}>
								<h3 className="text-danger mb-5" >Signup</h3>
							</div>
						</div>
					</div>
						<h3 className="text-danger mb-5 website">Signup</h3>
						<div className="row my-4">
							<div className="col-md-6">
								<div className="form-group my-3">
									<label for="exampleInputEmail1">First Name</label>
									<input
										type="text"
										className="form-control"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div class="form-group my-3">
									<label for="exampleInputEmail1">Email</label>
									<input
										type="email"
										className="form-control"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div class="form-group my-3">
									<label for="exampleInputEmail1">Password</label>
									<input
										type="password"
										className="form-control"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div class="form-group my-3">
									<label for="exampleInputEmail1">Last Name</label>
									<input
										type="text"
										className="form-control"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div class="form-group my-3">
									<label for="exampleInputEmail1">Username</label>
									<input
										type="text"
										className="form-control"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div class="form-group my-3">
									<label for="exampleInputEmail1">Confirm Password</label>
									<input
										type="password"
										className="form-control"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-center">
							<button
								type="button"
								className="btn btn-danger mt-5 mb-4"
								style={{ borderRadius: "25px", width: "200px" }}
								onClick={handleSignup}
							>
								Sign Up
							</button>
						</div>
						<p style={{ fontSize: "15px", textAlign: "center" }}>
							By clicking on "SIGN UP" , you agree to WEA wines's{" "}
							<span style={{ textDecoration: "underline" }}>Terms of Use</span>{" "}
							and{" "}
							<span style={{ textDecoration: "underline" }}>
								Privacy Policy
							</span>
						</p>
					</div>
					<p className="text-center">
						If you have an account ?{" "}
 						<span className="text-danger cp"><Login /></span>
 						 Here
					</p>
				</div>
			</div>
		</>
	);
};
export default Register;
