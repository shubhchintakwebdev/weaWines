import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import {Button} from 'antd';
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		borderRadius: "25px",
		width: "400px",
	},
};
Modal.setAppElement("#root");
const CartLogin = () => {
	const history = useHistory();
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [passVisible, setPassVisible] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	const [forgotPasswordModalIsOpen, setForgotPasswordModalIsOpen] =
		useState(false);
	const openForgotPasswordModal = () => setForgotPasswordModalIsOpen(true);
	const closeForgotPasswordModal = () => setForgotPasswordModalIsOpen(false);

	const { state } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

	const handleLogin = async () => {
		const res = await fetch(
			"https://weawines.shubhchintak.co/wp-json/letscms/v1/auth/login",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: email,
					password,
				}),
			}
		);
		const data = await res.json();
		setForgotPasswordModalIsOpen(false);
		console.log(forgotPasswordModalIsOpen);
		console.log(data);
		if (data.status) {
			localStorage.setItem("userdetails", JSON.stringify(data.user));
			localStorage.setItem("user", data.user.display_name);
			localStorage.setItem("token", data.letscms_token);
			history.push("/pricelist");
			window.location.reload();
		}
	};
 

	const handleForgotPassword = async () => {
		const res = await fetch(
			"https://weawines.shubhchintak.co/wp-json/letscms/v1/auth/forgot-password",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username: forgotPasswordEmail }),
			}
		);
		const data = await res.json();
		if (data.status) setForgotPasswordModalIsOpen(false);
	};

	const handleLoginWithGoogle = async () => {
		const res = await fetch(
			"https://weawines.shubhchintak.co/wp-login.php?loginSocial=google&redirect=https%3A%2F%2Fweawines.shubhchintak.co%2Fwp-admin%2F"
		);
		const data = await res.json();
		console.log(data);
	};

	return (
		<>
                <Button
				 	type="link"					
					onClick={openModal}
					danger
					// disabled={quant[0]===0 ? true :console.log(quant)}
					style={{
						color: "#9b2120",
					}}
				>
				<span><ShoppingOutlined/>	Add to Cart </span>
				</Button>{" "}
                 
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<h4 className="text-danger mb-3">Login</h4>
					<div
						className="input-group mb-2"
						style={{
							borderStyle: "solid",
							borderColor: "black",
							borderWidth: "1px",
							borderRadius: "5px",
						}}
					>
						<input
							type="text"
							className="form-control"
							placeholder="Email"
							required
							style={{ borderStyle: "none" }}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary"
								type="button"
								style={{ borderStyle: "none" }}
							>
								<i className="fas fa-user"></i>
							</button>
						</div>
					</div>
					<div
						className="input-group mb-3"
						style={{
							borderStyle: "solid",
							borderColor: "black",
							borderWidth: "1px",
							borderRadius: "5px",
						}}
					>
						<input
							type={passVisible ? "text" : "password"}
							className="form-control"
							placeholder="Password"
							required
							style={{ borderStyle: "none" }}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary"
								type="button"
								style={{ borderStyle: "none" }}
								onClick={() => {
									setPassVisible(!passVisible);
								}}
							>
								{passVisible && <i className="far fa-eye-slash"></i>}
								{!passVisible && <i className="far fa-eye"></i>}
							</button>
						</div>
					</div>
					<div style={{ width: "100%" }}>
						<p
							className="text-danger text-end cp"
							onClick={openForgotPasswordModal}
						>
							Forget Password?
						</p>
					</div>
					<button
						type="button"
						className="btn btn-danger mt-2 mb-2"
						style={{ borderRadius: "25px", width: "300px" }}
						onClick={handleLogin}
					>
						Log In
					</button>
					{/* <p>or</p>
					<button
						type="button"
						className="btn btn-light mb-2 shadow"
						style={{ borderRadius: "25px", width: "300px" }}
						onClick={handleLoginWithGoogle}
					>
						Login with Google
					</button>
					<button
						type="button"
						className="btn btn-light mb-2 shadow"
						style={{ borderRadius: "25px", width: "300px" }}
					>
						Login with Facebook
					</button> */}
					<p className="text-center mt-4">
						If you don't have an account ?{" "}
						<Link to="/register" style={{ textDecoration: "none" }}>
							<span className="text-danger cp">Signup</span>
						</Link>{" "}
						Here
					</p>
				</div>
			</Modal>

			<Modal
				isOpen={forgotPasswordModalIsOpen}
				onRequestClose={closeForgotPasswordModal}
				style={customStyles}
			>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<h4 className="text-danger mb-3">Enter your Email</h4>
					<div
						className="input-group mb-2"
						style={{
							borderStyle: "solid",
							borderColor: "black",
							borderWidth: "1px",
							borderRadius: "5px",
						}}
					>
						<input
							type="text"
							className="form-control"
							placeholder="Email"
							style={{ borderStyle: "none" }}
							value={forgotPasswordEmail}
							onChange={(e) => setForgotPasswordEmail(e.target.value)}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary"
								type="button"
								style={{ borderStyle: "none" }}
							></button>
							<button
								className="btn btn-outline-secondary"
								type="button"
								style={{ borderStyle: "none" }}
								onClick={handleForgotPassword}
							>
								Send
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};
export default CartLogin;
