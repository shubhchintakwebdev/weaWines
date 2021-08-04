import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {
	Row,
	Col,
	Tabs,
	Form,
	Input,
	Button,
	Select,
	Checkbox,
	Table,
	Tag,
	Card,
} from "antd";
import "antd/dist/antd.css";
import { LogoutOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Nav1 from "../Components/Nav1.js";
import Nav2 from "../Components/Nav2";
// import Carousel from "../Components/Home_Components/Carousel";
import Footer from "../Components/Footer";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

const MyAccount = () => {
	const history = useHistory();
	const userdetails = JSON.parse(localStorage.getItem("userdetails"));
	const displayName = userdetails.display_name;
	const token = localStorage.getItem("token");
	// console.log(userdetails);
	const [firstName, setFirstName] = useState(userdetails.first_name);
	const [lastName, setLastName] = useState(userdetails.last_name);
	const [email, setEmail] = useState(userdetails.user_email);
	const [password, setPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [bStreet, setBStreet] = useState("");
	const [bBuilding, setBBuilding] = useState("");
	const [bCity, setBCity] = useState("");
	const [bCountry, setBCountry] = useState("");
	const [bZip, setBZip] = useState("");
	const [bCompany, setBCompany] = useState("");
	const [bPhone, setBPhone] = useState("");
	const [sStreet, setSStreet] = useState("");
	const [sBuilding, setSBuilding] = useState("");
	const [sCity, setSCity] = useState("");
	const [sCountry, setSCountry] = useState("");
	const [sZip, setSZip] = useState("");
	const [sCompany, setSCompany] = useState("");
	const [sPhone, setSPhone] = useState("");
	const [same, setSame] = useState(false);
	const [orders, setOrders] = useState([]);

	const toggleSame = () => {
		if (!same) {
			setSStreet(bStreet);
			setSBuilding(bBuilding);
			setSCity(bCity);
			setSCountry(bCountry);
			setSZip(bZip);
			setSame(true);
		} else {
			setSStreet("");
			setSBuilding("");
			setSCity("");
			setSCountry("");
			setSZip("");
			setSame(false);
		}
		// console.log(same);
	};

	const handleProfileSubmit = async () => {
		console.log(firstName, lastName, email, password, oldPassword, displayName);
		const resData = await fetch(
			"https://weawines.shubhchintak.co/wp-json/letscms/v1/account-details",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					first_name: firstName,
					last_name: lastName,
					display_name: displayName,
					email,
					password,
					old_password: oldPassword,
				}),
			}
		);
		const data = await resData.json();
		console.log(data);
	};

	const handleSaveAdress = async () => {
		console.log(
			firstName,
			lastName,
			email,
			phone,
			bStreet,
			bBuilding,
			bCity,
			bZip,
			bCountry
		);
		// const res = await fetch(
		// 	"https://weawines.shubhchintak.co/wp-json/letscms/v1/address/billing",
		// 	{
		// 		method: "post",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			letscms_token: token,
		// 		},
		// 		body: JSON.stringify({
		// 			first_name: firstName,
		// 			last_name: lastName,
		// 			email,
		// 			phone,
		// 			address_1: bStreet,
		// 			address_2: bBuilding,
		// 			// company:
		// 			city: bCity,
		// 			// state: bState
		// 			postcode: bZip,
		// 			country: bCountry,
		// 		}),
		// 	}
		// );
		// const data = await res.json();
	};

	const handleFetch = async () => {
		// const resAddress = await fetch(
		// 	"https://weawines.shubhchintak.co/wp-json/letscms/v1/address/billing",
		// 	{
		// 		headers: {
		// 			letscms_token: token,
		// 		},
		// 		credentials: "omit",
		// 	}
		// );
		// const address = await resAddress.json();
		// console.log(address);
		// const resOrders = await fetch(
		// 	"https://weawines.shubhchintak.co/wp-json/letscms/v1/orders",
		// 	{
		// 		headers: {
		// 			letscms_token: token,
		// 		},
		// 	}
		// );
		// const ordersjson = await resOrders.json();
		// setOrders(ordersjson);
	};
	// useEffect(() => {
	// 	handleFetch();
	// }, []);

	const { Option } = Select;
	const columns = [
		{
			title: "Items & Details",
			dataIndex: "items",
			key: "items",
		},
		{
			title: "Order No",
			dataIndex: "order",
			key: "order",
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
		},
		{
			title: "Tags",
			key: "tags",
			dataIndex: "tags",
			render: (tags) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 7 ? "green" : "yellow";
						if (tag === "Cancelled") {
							color = "red";
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
	];
	// orders = [
	// 	{
	// 		key: "1",
	// 		items: "John Brown",
	// 		order: 32,
	// 		quantity: "2nos",
	// 		amount: "$20.00",
	// 		tags: ["Delivered"],
	// 	},
	// 	{
	// 		key: "2",
	// 		items: "John Brown",
	// 		order: 32,
	// 		quantity: "2nos",
	// 		amount: "$20.00",
	// 		tags: ["Cancelled"],
	// 	},
	// 	{
	// 		key: "3",
	// 		items: "John Brown",
	// 		order: 32,
	// 		quantity: "2nos",
	// 		amount: "$20.00",
	// 		tags: ["Pending"],
	// 	},
	// ];
	const handleLogout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("userdetails");
		localStorage.removeItem("token");
		history.push("/");
		// window.location = "http://localhost:3000";
	};
	return (
		<div>
			<Nav1 />
			<Nav2 />
			<div
				style={{
					width: "100vw",
					height: "40vh",
					overflow: "hidden",
				}}
			>
				<h1
					style={{
						color: "white",
						marginTop: "5%",
						marginLeft: "40%",
						// zIndex: '1000',
						position: "absolute",
					}}
				>
					MY ACCOUNT
				</h1>
				<img
					src="https://source.unsplash.com/1600x600/?champagne"
					width="100%"
				/>
			</div>
			<br></br>
			<Row>
				<Col span={18} offset={3}>
					<div style={{ marginBottom: "2%" }}>
						<Tabs
							type="line"
							defaultActiveKey="1"
							tabPosition="left"
							style={{ height: 500 }}
						>
							<TabPane tab="Profile" key="1">
								<h2>Profile</h2>
								<Form
									layout="vertical"
									name="Profile_Form"
									initialValues={{
										remember: true,
									}}
									fields={[
										{
											name: ["First_Name"],
											value: firstName,
										},
										{
											name: ["Last_Name"],
											value: lastName,
										},
										{
											name: ["email"],
											value: email,
										},
										{
											name: ["phone"],
											value: phone,
										},
									]}
								>
									<Row>
										<Col span={10}>
											<Form.Item name="First_Name" label="First Name">
												<Input
													placeholder="First Name"
													onChange={(e) => setFirstName(e.target.value)}
												/>
											</Form.Item>
										</Col>
										<Col span={10} offset={2}>
											<Form.Item name="Last_Name" label="Last Name">
												<Input
													placeholder="Last Name"
													onChange={(e) => setLastName(e.target.value)}
												/>
											</Form.Item>
										</Col>
									</Row>
									<Row>
										<Col span={10}>
											<Form.Item
												name="email"
												label="E-mail"
												rules={[
													{
														type: "email",
													},
												]}
											>
												<Input
													placeholder="email"
													onChange={(e) => setEmail(e.target.value)}
												/>
											</Form.Item>
										</Col>
										<Col span={10} offset={2}>
											<Form.Item name="phone" label="Phone Number">
												<Input
													placeholder="Phone"
													style={{ width: "100%" }}
													onChange={(e) => setPhone(e.target.value)}
												/>
											</Form.Item>
										</Col>
									</Row>
									<Row>
										<Col span={10}>
											<Form.Item name="password" label="Password" hasFeedback>
												<Input.Password
													placeholder="Password"
													onChange={(e) => setPassword(e.target.value)}
												/>
											</Form.Item>
										</Col>
										<Col span={10} offset={2}>
											<Form.Item
												name="old password"
												label="Old Password"
												hasFeedback
											>
												<Input.Password
													placeholder="Old Password"
													onChange={(e) => setOldPassword(e.target.value)}
												/>
											</Form.Item>
										</Col>
									</Row>
									<Form.Item>
										<Button type="primary" onClick={handleProfileSubmit}>
											Submit
										</Button>
									</Form.Item>
								</Form>
							</TabPane>
							<TabPane tab="Manage Address" key="2">
								<h2>Manage Address</h2>
								<Row>
									<Col span={10}>
										<Row>
											<h3>Shipping Address</h3>
											<Button
												// type="primary"
												// htmlType="submit"
												style={{ border: "none" }}
												// className="add-plot-button"
											>
												Edit
											</Button>
										</Row>
										<Form
											layout="vertical"
											name="Shipping_add"
											initialValues={{
												remember: true,
											}}
											fields={[
												{
													name: ["street"],
													value: sStreet,
												},
												{
													name: ["building"],
													value: sBuilding,
												},
												{
													name: ["city"],
													value: sCity,
												},
												{
													name: ["country"],
													value: sCountry,
												},
												{
													name: ["postal"],
													value: sZip,
												},
												{
													name: ["company"],
													value: sCompany,
												},
												{
													name: ["phone"],
													value: sPhone,
												},
											]}
										>
											<Form.Item name="street" label="Unit and Street No.">
												<Input
													placeholder="Unit and Street No."
													onChange={(e) => setSStreet(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="building" label="Building (if any)">
												<Input
													placeholder="Building (if any)"
													onChange={(e) => setSBuilding(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="city" label="City">
												<Input
													placeholder="City"
													onChange={(e) => setSCity(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="company" label="Company">
												<Input
													placeholder="Company"
													onChange={(e) => setSCompany(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="phone" label="Phone">
												<Input
													placeholder="Phone"
													onChange={(e) => setSPhone(e.target.value)}
												/>
											</Form.Item>
											<Row>
												<Col span={12}>
													<Form.Item name="country" label="Country" hasFeedback>
														<Select
															placeholder="Please select a country"
															onChange={(value) => {
																console.log(value);
																setSCountry(value);
															}}
														>
															<Option value="china">China</Option>
															<Option value="usa">U.S.A</Option>
														</Select>
													</Form.Item>
												</Col>
												<Col span={12}>
													<Form.Item name="postal" label="Postal/Zip Code">
														<Input
															placeholder="Postal/Zip Code"
															onChange={(e) => setSZip(e.target.value)}
														/>
													</Form.Item>
												</Col>
											</Row>
											<Form.Item name="same" valuePropName="checked" noStyle>
												<Checkbox onClick={toggleSame}>
													Same as Biling Address
												</Checkbox>
											</Form.Item>
											<Form.Item></Form.Item>
										</Form>
									</Col>
									<Col span={10} offset={2}>
										<Row>
											<h3 style={{ marginRight: "2%" }}>Billing Address</h3>
											<Button
												// type="primary"
												// htmlType="submit"
												// className="add-plot-button"
												style={{ border: "none" }}
												onClick={handleSaveAdress}
											>
												Edit
											</Button>
										</Row>
										<Form
											layout="vertical"
											name="Billing_add"
											fields={[
												{
													name: ["street"],
													value: bStreet,
												},
												{
													name: ["building"],
													value: bBuilding,
												},
												{
													name: ["city"],
													value: bCity,
												},
												{
													name: ["country"],
													value: bCountry,
												},
												{
													name: ["postal"],
													value: bZip,
												},
												{
													name: ["company"],
													value: bCompany,
												},
												{
													name: ["phone"],
													value: bPhone,
												},
											]}
										>
											<Form.Item name="street" label="Unit and Street No.">
												<Input
													placeholder="Unit and Street No."
													onChange={(e) => setBStreet(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="building" label="Building (if any)">
												<Input
													placeholder="Building (if any)"
													onChange={(e) => setBBuilding(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="city" label="City">
												<Input
													placeholder="City"
													onChange={(e) => setBCity(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="company" label="Company">
												<Input
													placeholder="Company"
													onChange={(e) => setBCompany(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="phone" label="Phone">
												<Input
													placeholder="Phone"
													onChange={(e) => setBPhone(e.target.value)}
												/>
											</Form.Item>
											<Row>
												<Col span={12}>
													<Form.Item name="country" label="Country" hasFeedback>
														<Select
															placeholder="Please select a country"
															onChange={(value) => {
																console.log(value);
																setBCountry(value);
															}}
														>
															<Option value="china">China</Option>
															<Option value="usa">U.S.A</Option>
														</Select>
													</Form.Item>
												</Col>
												<Col span={12}>
													<Form.Item name="postal" label="Postal/Zip Code">
														<Input
															placeholder="Postal/Zip Code"
															onChange={(e) => setBZip(e.target.value)}
														/>
													</Form.Item>
												</Col>
											</Row>
											<Form.Item></Form.Item>
										</Form>
									</Col>
								</Row>
							</TabPane>
							<TabPane tab="My Orders" key="3">
								<h2>My Orders</h2>
								<Table columns={columns} dataSource={orders} />
							</TabPane>
							<TabPane tab="My Rewards" key="4">
								<h2 style={{ marginLeft: 0 }}>My Rewards</h2>
								<Row style={{ float: "right" }}>
									<div>
										<a href="#">
											<span>
												History <ArrowRightOutlined />
											</span>
										</a>
									</div>
								</Row>
								<Row>
									<Card bordered={false} style={{ width: "100%" }}>
										<p>Total Earned</p>
										<h2>22,364</h2>
										<p>reward points</p>
									</Card>
								</Row>
							</TabPane>
							<TabPane
								tab={
									<span onClick={handleLogout}>
										{" "}
										<LogoutOutlined /> Logout
									</span>
								}
								key="5"
							>
							</TabPane>
						</Tabs>
					</div>
				</Col>
			</Row>
			<Footer />
		</div>
	);
};

export default MyAccount;
