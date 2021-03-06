import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "../App.css";
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
import Orders from "../Components/viewOrder";
import Footer from "../Components/Footer";
import { useHistory } from "react-router-dom";
import { message } from 'antd';

const { TabPane } = Tabs;

const MyAccount = () => {
	const history = useHistory();
	const userdetails = JSON.parse(localStorage.getItem("userdetails"));
	const displayName = userdetails.display_name;
	const token = localStorage.getItem("token");
	const [firstName, setFirstName] = useState(userdetails.first_name);
	const [lastName, setLastName] = useState(userdetails.last_name);
	const [email, setEmail] = useState(userdetails.user_email);
	const [password, setPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [bStreet, setBStreet] = useState("");
	const [bBuilding, setBBuilding] = useState("");
	const [bCity, setBCity] = useState("");
	const [bState, setBState] = useState("");
	const [bCountry, setBCountry] = useState("");
	const [bZip, setBZip] = useState("");
	const [bCompany, setBCompany] = useState("");
	const [bPhone, setBPhone] = useState("");
	const [sStreet, setSStreet] = useState("");
	const [sBuilding, setSBuilding] = useState("");
	const [sCity, setSCity] = useState("");
	const [sState, setSState] = useState("");
	const [sCountry, setSCountry] = useState("");
	const [sZip, setSZip] = useState("");
	const [sCompany, setSCompany] = useState("");
	const [sPhone, setSPhone] = useState("");
	const [same, setSame] = useState(false);
	const [orders, setOrders] = useState([]);
	const [sDisabled, setSDisabled] = useState(true);
	const [bDisabled, setBDisabled] = useState(true);
	const [aDisabled, setADisabled] = useState(true);
	const [error, setError] = useState(true);

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
			"/wp-json/letscms/v1/account-details",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
 					letscms_token: token,
 				},
				body: JSON.stringify({
					first_name: firstName,
					last_name: lastName,
					display_name: displayName,
					user_email:email,
					password:password,
					old_password: oldPassword,
				}),
			}
		);
		const data = await resData.json();
		if(data.status===true){
			message.success({
				content: 'Updated Successfully!',
				className: 'custom-class',
				style: {
				  marginTop: '5vh',
				},
			  });
			resetForm()
			setADisabled(true);
		
		}
		if(data.status===false){
			setError(data.errors)
			console.log(data.errors)
		}
		console.log(data);
		// setADisabled(true);

	};

	
    const resetForm = () => {
 		setPassword('');
		setOldPassword('');
   }

	const handleSaveAdress = async () => {
		const res = await fetch("/wp-json/letscms/v1/address/billing", {
			method: "post",
			headers: {
				letscms_token: token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				first_name: firstName,
				last_name: lastName,
				company: bCompany,
				email,
				phone,
				address_1: bStreet,
				address_2: bBuilding,
				city: bCity,
				state: bState,
				postcode: bZip,
				country: bCountry,
			}),
		});
		const data = await res.json();
		 if(data.status===true){
			setBDisabled(true);
			message.success({
				content: 'Updated Successfully!',
				className: 'custom-class',
				style: {
				  marginTop: '5vh',
				},
			  });
		}
	 
	};

	const handleFetch = async () => {
		// address
		const resAddress = await fetch("/wp-json/letscms/v1/address/billing", {
			headers: {
				letscms_token: token,
			},
		});
		const address = await resAddress.json();
		console.log(address);
		// address.data.address
		setPhone(address.data.address.phone);
		setBStreet(address.data.address.address_1);
		setBBuilding(address.data.address.address_2);
		setBCity(address.data.address.city);
		setBZip(address.data.address.postcode);
		setBCountry(address.data.address.country);
		setBCompany(address.data.address.company);
		setBPhone(address.data.address.phone);

		// orders
		const resOrders = await fetch("/wp-json/letscms/v1/orders", {
			headers: {
				letscms_token: token,
			},
		});
		console.log(resOrders)
		const ordersjson = await resOrders.json();
		console.log(ordersjson.data.orders);
		const sampleorders = [];
		let key = 0;
		ordersjson.data.orders.forEach((order) => {
			order.items.forEach((item) => {
				key++;
				sampleorders.push({
					key,
 					order: order.order_id,
 					amount: `$ ${order.total}`,
					tags: [order.order_status],
					views:<Orders order_id = {order.order_id} />
				});
			});
		});
		let orderList = sampleorders.filter( (ele, ind) => ind === sampleorders.findIndex( elem => elem.order === ele.order))

 		setOrders(orderList);
	};
	useEffect(() => {
		handleFetch();
	}, []);

	const { Option } = Select;
	const columns = [
		{
			title: "Order No",
			dataIndex: "order",
			width: 20,
			key: "order",
		},
		{
			title: "Amount",
			width: 20,
			dataIndex: "amount",
			key: "amount",
		},
		{
			title: "Status",
			key: "tags",
			width: 20,
			dataIndex: "tags",
			render: (tags) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 7 ? "#77d64f" : "yellow";
						if(tag==="completed"){
							color = "#77d64f";
						}
						if (tag === "cancelled") {
							color = "#f50";
						}
						if(tag==="processing"){
							color = "#d4d457";	
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
		{
			title: "",
			width: 20,
			dataIndex: "views",
			key: "views",
		},
	];
	// const orders = [
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
	};
	return (
		<div>
			<Nav1 />
			<Nav2 />
			<div className="position-relative">
				<div className="op2"></div>
				<div className="aui2 d-flex justify-content-center align-items-center">
					<h1 className="text-uppercase text-light fwl" style={{ zIndex: 5 }}>
						MY ACCOUNT
					</h1>
				</div>
			</div>
			<br></br>
			<Row className="desktop">
				<Col lg={{span:18, offset:3}}>
					<div style={{ marginBottom: "2%" }}>
						<Tabs
							type="line"
							defaultActiveKey="1"
							tabPosition="left"
						>
							<TabPane tab="Profile" key="1">
							<h2 style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>Profile</h2>
									{aDisabled&&	<Button
												className="text-danger"
												style={{
													border: "none",
													padding: "0px",
													marginLeft: "1rem",
													boxShadow: "none",
												}}
												// onClick={handleSaveAdress}
												onClick={() => setADisabled(false)}
											>
												Edit
											</Button>}
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
											name: ["Email"],
											value: email,
										},
										{
											name: ["Phone"],
											value: phone,
										},
									]}
								>
									<Row>
										<Col span={10}>
											<Form.Item 	rules={[												{
															required: 'true',
														},
														]} name="First_Name" label="First Name">
												<Input
													disabled={aDisabled}
													placeholder="First Name"
												
													onChange={(e) => setFirstName(e.target.value)}
												/>
											</Form.Item>
										</Col>
										<Col span={10} offset={2}>
											<Form.Item 	rules={[												{
															required: true,
														},
														]} name="Last_Name" label="Last Name">
												<Input
													disabled={aDisabled}
												
													placeholder="Last Name"
													onChange={(e) => setLastName(e.target.value)}
												/>
											</Form.Item>
										</Col>
									</Row>
									<Row>
										<Col span={10}>
											<Form.Item
											
												name="Email"
												label="E-mail"
												rules={[
													{
														type: "email",
														required: 'true'
													},
												]}
											>
												<Input
													placeholder="email"
													disabled={aDisabled}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</Form.Item>
										</Col>
										<Col span={10} offset={2}>
											<Form.Item 	
												 name="Phone" 
												 label="Phone Number"
												 rules={[												
													{
													required: 'true'
													},
												]}>
												<Input
													placeholder="Phone"
													disabled={aDisabled}
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
													disabled={aDisabled}
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
													disabled={aDisabled}
													onChange={(e) => setOldPassword(e.target.value)}
												/>
											</Form.Item>
										</Col>
									</Row>
									<Form.Item>
									{!aDisabled&&
												<button
											type="button"
											onClick={handleProfileSubmit}
											className="btn btn-danger"
											// disabled={quant[0]===0 ? true :console.log(quant)}
											style={{
												backgroundColor: "#9b2120",
												color: "#ffffff",
												border: 0,
												borderRadius: "25px",
												width: "150px",
												// margin: "20px",
												 
											}}
										>
											Update
										</button>}
									</Form.Item>
								</Form>
							</TabPane>
							<TabPane tab="Manage Address" key="2">
							<h2 style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>Manage Address</h2>
								<Row>
								
									<Col span={10}>
										<Row>
											<h6 style={{ marginRight: "2%",fontFamily:"Jost",fontWeight:800 }}>Billing Address</h6>
											{bDisabled && <Button
												// type="primary"
												// htmlType="submit"
												// className="add-plot-button"
												className="text-danger"
												style={{
													border: "none",
													padding: "0px",
													marginLeft: "1rem",
													boxShadow: "none",
												}}
												// onClick={handleSaveAdress}
												onClick={() => setBDisabled(false)}
											>
												Edit
											</Button>}
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
													name: ["state"],
													value: bState,
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
											<Form.Item name="street" label="Unit and Street No." >
												<Input
													disabled={bDisabled}
													placeholder="Unit and Street No."
													onChange={(e) => setBStreet(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="building" label="Building (if any)">
												<Input
													disabled={bDisabled}
													placeholder="Building (if any)"
													onChange={(e) => setBBuilding(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="city" label="City">
												<Input
													disabled={bDisabled}
													placeholder="City"
													onChange={(e) => setBCity(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="company" label="Company">
												<Input
													disabled={bDisabled}
													placeholder="Company"
													onChange={(e) => setBCompany(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="phone" label="Phone">
												<Input
													disabled={bDisabled}
													placeholder="Phone"
													onChange={(e) => setBPhone(e.target.value)}
												/>
											</Form.Item>
											<Row>
												<Col span={12}>
													<Form.Item name="country" label="Country" disabled={bDisabled} hasFeedback>
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
													{/* <Form.Item name="state" label="State" hasFeedback>
														<Select
															placeholder="Please select a state"
															onChange={(value) => {
																console.log(value);
																setBState(value);
															}}
														>
															<Option value="china">China</Option>
															<Option value="usa">U.S.A</Option>
														</Select>
													</Form.Item> */}
												</Col>
												<Col span={12}>
													<Form.Item name="postal" label="Postal/Zip Code">
														<Input
															disabled={bDisabled}
															placeholder="Postal/Zip Code"
															onChange={(e) => setBZip(e.target.value)}
														/>
													</Form.Item>
												</Col>
											</Row>
											<Form.Item>
											{!bDisabled&&
												<button
											type="button"
											onClick={handleSaveAdress}
											className="btn btn-danger my-4"
											// disabled={quant[0]===0 ? true :console.log(quant)}
											style={{
												backgroundColor: "#9b2120",
												color: "#ffffff",
												border: 0,
												borderRadius: "25px",
												width: "150px",
												margin: "20px",
											}}
										>
											Update
										</button>}
											
											</Form.Item>
											</Form>
									</Col>
								</Row>
							</TabPane>
							<TabPane tab="My Orders" key="3">
							<h2 style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>Orders</h2>
								<Table columns={columns} dataSource={orders} />
							</TabPane>
							{/* <TabPane tab="My Rewards" key="4">
								<h2 style={{ marginLeft: 0,fontFamily:"Jost",fontWeight:800,fontSize:"20px" }}>My Rewards</h2>
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
							</TabPane> */}
							<TabPane
								tab={
									<span onClick={handleLogout}>
										{" "}
										<LogoutOutlined /> Logout
									</span>
								}
								key="5"
							></TabPane>
						</Tabs>
					</div>
				</Col>
			</Row>
			<Row className="mobile" style={{padding:"10px"}}>
				<Col lg={{span:18, offset:3}} sm={{span:20, offset:2}}>
					<div style={{ marginBottom: "2%" }}>
						<Tabs
							type="line"
							defaultActiveKey="1"
							tabPosition="top"
						>
							<TabPane tab="Profile" key="1">
							<h2 style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>Profile</h2>
							{aDisabled&&	<Button
												className="text-danger"
												style={{
													border: "none",
													padding: "0px",
													marginLeft: "1rem",
													boxShadow: "none",
												}}
												// onClick={handleSaveAdress}
												onClick={() => setADisabled(false)}
											>
												Edit
											</Button>}
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
									{!aDisabled&&
												<button
											type="button"
											onClick={handleProfileSubmit}
											className="btn btn-danger"
											// disabled={quant[0]===0 ? true :console.log(quant)}
											style={{
												backgroundColor: "#9b2120",
												color: "#ffffff",
												border: 0,
												borderRadius: "25px",
												width: "150px",
												// margin: "20px",
												 
											}}
										>
											Update
										</button>}
									</Form.Item>
								</Form>
							</TabPane>
							<TabPane tab="Manage Address" key="2">
							<h2 style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>Manage Address</h2>
								<Row>
									<Col span={10}>
										<Row>
											<h6 style={{fontFamily:"Jost",fontWeight:800}}>Shipping Address</h6>
											{bDisabled&&	<Button
												// type="primary"
												// htmlType="submit"
												className="text-danger"
												style={{
													border: "none",
													padding: "0px",
													marginLeft: "1rem",
													boxShadow: "none",
												}}
												onClick={() => setSDisabled(false)}
											>
												Edit
											</Button>}
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
													name: ["state"],
													value: sState,
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
													disabled={sDisabled}
													placeholder="Unit and Street No."
													onChange={(e) => setSStreet(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="building" label="Building (if any)">
												<Input
													disabled={sDisabled}
													placeholder="Building (if any)"
													onChange={(e) => setSBuilding(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="city" label="City">
												<Input
													disabled={sDisabled}
													placeholder="City"
													onChange={(e) => setSCity(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="company" label="Company">
												<Input
													disabled={sDisabled}
													placeholder="Company"
													onChange={(e) => setSCompany(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="phone" label="Phone">
												<Input
													disabled={sDisabled}
													placeholder="Phone"
													onChange={(e) => setSPhone(e.target.value)}
												/>
											</Form.Item>
											
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
													{/* <Form.Item name="state" label="State" hasFeedback>
														<Select
															placeholder="Please select a state"
															onChange={(value) => {
																console.log(value);
																setSState(value);
															}}
														>
															<Option value="china">China</Option>
															<Option value="usa">U.S.A</Option>
														</Select>
													</Form.Item> */}
											
													<Form.Item name="postal" label="Postal/Zip Code">
														<Input
															placeholder="Postal/Zip Code"
															onChange={(e) => setSZip(e.target.value)}
														/>
													</Form.Item>
												
											<Form.Item name="same" valuePropName="checked" noStyle>
												<Checkbox onClick={toggleSame}>
													Same as Shipping Address
												</Checkbox>
											</Form.Item>
											<Form.Item></Form.Item>
										</Form>
									</Col>
									<Col span={10} offset={2}>
										<Row>
											<h6 style={{ marginRight: "2%",fontFamily:"Jost",fontWeight:800 }}>Billing Address</h6>
											{bDisabled&&	<Button
												// type="primary"
												// htmlType="submit"
												// className="add-plot-button"
												className="text-danger"
												style={{
													border: "none",
													padding: "0px",
													marginLeft: "1rem",
													boxShadow: "none",
												}}
												// onClick={handleSaveAdress}
												onClick={() => setBDisabled(false)}
											>
												Edit
											</Button>}
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
													name: ["state"],
													value: bState,
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
													disabled={bDisabled}
													placeholder="Unit and Street No."
													onChange={(e) => setBStreet(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="building" label="Building (if any)">
												<Input
													disabled={bDisabled}
													placeholder="Building (if any)"
													onChange={(e) => setBBuilding(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="city" label="City">
												<Input
													disabled={bDisabled}
													placeholder="City"
													onChange={(e) => setBCity(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="company" label="Company">
												<Input
													disabled={bDisabled}
													placeholder="Company"
													onChange={(e) => setBCompany(e.target.value)}
												/>
											</Form.Item>
											<Form.Item name="phone" label="Phone">
												<Input
													disabled={bDisabled}
													placeholder="Phone"
													onChange={(e) => setBPhone(e.target.value)}
												/>
											</Form.Item>
										
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
													{/* <Form.Item name="state" label="State" hasFeedback>
														<Select
															placeholder="Please select a state"
															onChange={(value) => {
																console.log(value);
																setBState(value);
															}}
														>
															<Option value="china">China</Option>
															<Option value="usa">U.S.A</Option>
														</Select>
													</Form.Item> */}
												
													<Form.Item name="postal" label="Postal/Zip Code">
														<Input
															disabled={bDisabled}
															placeholder="Postal/Zip Code"
															onChange={(e) => setBZip(e.target.value)}
														/>
													</Form.Item>
												
											<Form.Item>
													{!bDisabled&&
														<button
													type="button"
													onClick={handleSaveAdress}
													className="btn btn-danger my-4"
													// disabled={quant[0]===0 ? true :console.log(quant)}
													style={{
														backgroundColor: "#9b2120",
														color: "#ffffff",
														border: 0,
														borderRadius: "25px",
														width: "150px",
														margin: "20px",
													}}
												>
													Update
												</button>}
											</Form.Item>
										</Form>
									</Col>
								</Row>
							</TabPane>
							<TabPane tab="My Orders" key="3">
							<h2 style={{fontFamily:"Jost",fontWeight:800,fontSize:"20px"}}>Orders</h2>
								<Table columns={columns} dataSource={orders} />
							</TabPane>
							{/* <TabPane tab="My Rewards" key="4">
								<h2 style={{ marginLeft: 0,fontFamily:"Jost",fontWeight:800,fontSize:"20px" }}>My Rewards</h2>
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
							</TabPane> */}
							<TabPane
								tab={
									<span onClick={handleLogout}>
										{" "}
										<LogoutOutlined /> Logout
									</span>
								}
								key="5"
							></TabPane>
						</Tabs>
					</div>
				</Col>
			</Row>
			<Footer />
		</div>
	);
};

export default MyAccount;
