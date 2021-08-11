import React from "react";
import { render } from "react-dom";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import {
	Row,
	Col,
	Table,
	Divider,
	Collapse,
	Checkbox,
	Input,
	Button,
	Space,
	Drawer,
	InputNumber,
	notification,
} from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { message } from "antd";
import Login2 from "./Login2";
var FormData = require("form-data");
var quant = [];
const token = localStorage.getItem("token");

const openNotification = (type) => {
	const btn = (
		<Button type="link" href="/cart">
			<i class="fa fa-shopping-cart" aria-hidden="true"></i> &nbsp;&nbsp;View
			Cart
		</Button>
	);
	notification[type]({
		message: "Added to Cart",
		description: "The item is successfully added to cart.",
		duration: 5,
		btn,
		// placement: 'bottomRight',
		// onClick: Gocart.goC(),
	});
};

const handleCart = async (value) => {
	// var data = new FormData();
	// data.append("product_id", value[1]);
	// data.append("quantity", value[0]);
	// console.log(data);
	// var config = {
	//   method: 'post',
	//   url: '/wp-json/letscms/v1/cart/add-item',
	//   headers: {
	// 	letscms_token: token,
	// 	"Content-Type": "application/json",
	// },
	//   data : data
	// };
	const res = await fetch(
		"/wp-json/letscms/v1/cart/add-item/?product_id=" +
			value[1] +
			"&quantity=" +
			value[0],
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
				letscms_token: token,
			},
			body: JSON.stringify({
				product_id: value[1],
				quantity: value[0],
			}),
		}
	);
	const data = await res.json();

	const result = data;
	console.log(result);

	if (result.status === true) {
		quant = 0;
		openNotification("success");
	}
	if (result.status === false) {
		message.error({
			content: `Add Quantity!`,
			className: "custom-class",
			style: {
				marginTop: "5vh",
			},
		});
	}
};

const setCart = (value) => {
	console.log(value);
	if (token === null) {
		message.error({
			content: `Please Login!`,
			className: "custom-class",
			style: {
				marginTop: "5vh",
			},
		});
	}
	handleCart(value);
};

class PriceListing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: "",
			searchedColumn: "",
			wine: [],
			value: 0,
			setLogin: true,
			visible: false,
			setVisible: false,
			categoriesMap: new Map(),
			name_idMap: new Map(),
			vintage: [],
		};
	}

	decrease = () => {
		this.setState({ value: this.state.value - 1 });
	};

	increase = () => {
		this.setState({ value: this.state.value + 1 });
	};

	showDrawer = () => {
		this.setState({ visible: true });
	};

	onClose = () => {
		this.setState({ visible: false });
	};

	handleFilter = (filter) => {
		let newFilter = sessionStorage.getItem("filters");
		if (newFilter == "," || newFilter == null) newFilter = "";
		if (newFilter.includes("," + filter)) {
			newFilter = newFilter.replace("," + filter, "");
		} else if (newFilter.includes(filter)) {
			newFilter = newFilter.replace(filter, "");
		} else {
			if (newFilter.length) {
				newFilter += "," + filter;
			} else {
				newFilter = filter;
			}
		}
		if (newFilter == ",") newFilter = "";
		sessionStorage.setItem("filters", newFilter);
		this.handleItems(newFilter);
	};

	handleItems = async () => {
		const filter = sessionStorage.getItem("filters");
		let url = "https://weawines.shubhchintak.co/wp-json/letscms/v1/products";

		if (filter !== null && filter.length) {
			const newUrl = `https://weawines.shubhchintak.co/wp-json/letscms/v1/products?categories="${filter}"`;
			url = newUrl;
		}

		const res = await fetch(url);
		const data = await res.json();
		// console.log(data);

		const list = [];
		for (let i = 0; i < data.data.products.length; i++) {
			const name = data.data.products[i].name.split("--");
			const wine = name[0];
			const vintage = name[1];
			list.push({
				key: data.data.products[i].id,
				// wine: data.data.products[i].name,
				wine,
				price: data.data.products[i].price,
				// vintage: data.data.products[i].type,
				vintage,
				status: data.data.products[i].stock_status,
			});
		}
		// console.log(list);
		// this.setState({ wine: list });
		if (token === null) {
			Object.keys(list).map(function (object) {
				if (list[object]["status"] == "instock") {
					list[object]["quantity"] = (
						<InputNumber
							size="small"
							min={0}
							defaultValue={0}
							onChange={(value) => (quant = [value, list[object]["key"]])}
						/>
					);
					list[object]["cart"] = <Login2 />;
				} else {
					list[object]["quantity"] = (
						<InputNumber
							size="small"
							disabled={true}
							defaultValue={"SOLD OUT"}
						/>
					);
					list[object]["cart"] = (
						<Button
							type="link"
							disabled={true}
							style={{
								color: "#9b2120",
							}}
						>
							<span>
								<ShoppingOutlined /> Add to Cart{" "}
							</span>
						</Button>
					);
				}
			});
		} else {
			Object.keys(list).map(function (object) {
				if (list[object]["status"] == "instock") {
					list[object]["quantity"] = (
						<InputNumber
							size="small"
							min={0}
							defaultValue={0}
							onChange={(value) => (quant = [value, list[object]["key"]])}
						/>
					);
					list[object]["cart"] = (
						<Button
							type="link"
							onClick={() => setCart(quant)}
							danger
							// disabled={quant[0]===0 ? true :console.log(quant)}
							style={{
								color: "#9b2120",
							}}
						>
							<span>
								<ShoppingOutlined /> Add to Cart{" "}
							</span>
						</Button>
					);
				} else {
					list[object]["quantity"] = (
						<InputNumber
							size="small"
							disabled={true}
							defaultValue={"SOLD OUT"}
						/>
					);
					list[object]["cart"] = (
						<Button
							type="link"
							danger
							disabled={true}
							style={{
								color: "#9b2120",
							}}
						>
							<span>
								<ShoppingOutlined /> Add to Cart{" "}
							</span>
						</Button>
					);
				}
			});
		}

		// console.log(list);
		this.setState({
			wine: list,
		});
	};

	handleCategories = async () => {
		// const resVintage = await fetch("/wp-json/wp/v2/vintage");
		// const Vintage = await resVintage.json();
		// console.log(Vintage);
		// this.setState({ vintage: Vintage });

		const resCategories = await fetch("/wp-json/wp/v2/product_cat?per_page=100");
		const categories = await resCategories.json();
		console.log(categories);

		const newCategoriesMap = new Map();
		const newName_idMap = new Map();

		categories.forEach((category) => {
			newName_idMap.set(category.id, category);
		});
		console.log(newName_idMap);

		categories.forEach((category) => {
			if (
				category.parent == 0 &&
				category.name !== "Uncategorized" &&
				category.name !== "Vintage"
			)
				newCategoriesMap.set(category.id, []);
		});

		console.log(newCategoriesMap);
		let Vintage = [];
		categories.forEach((category) => {
			if (category.parent) {
				// console.log(category.parent);
				if (newName_idMap.get(category.parent).name === "Uncategorized") {
				} else if (newName_idMap.get(category.parent).name === "Vintage") {
					Vintage.push(category);
				} else {
					let list = newCategoriesMap.get(category.parent);
					list.push(category);
					newCategoriesMap.set(category.parent, list);
				}
			}
		});

		this.setState({ name_idMap: newName_idMap });
		this.setState({ categoriesMap: newCategoriesMap });
		this.setState({ vintage: Vintage });
		// console.log(Vintage);
		// console.log(newCategoriesMap);
		// for (const [key, value] of categoriesMap.entries()) {
		// 	console.log(key);
		// 	for (const item in value) console.log(item);
		// }
		// Array.from(newCategoriesMap).map(([key, value]) => {
		// 	console.log(newName_idMap.get(key).name);
		// 	value.map((x) => console.log(x.name));
		// 	console.log("---");
		// });
	};

	componentDidMount() {
		const onChangeQuantity = (value) => {
			console.log(value);
		};

		this.handleItems();
		this.handleCategories();
		axios.get("/wp-json/letscms/v1/products").then((response) => {
			//   console.log(list);
			// console.log(this.state.wine);
		});
	}
	getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={(node) => {
						this.searchInput = node;
					}}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() =>
						this.handleSearch(selectedKeys, confirm, dataIndex)
					}
					style={{ marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button
						onClick={() => this.handleReset(clearFilters)}
						size="small"
						style={{ width: 90 }}
					>
						Reset
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							confirm({ closeDropdown: false });
							this.setState({
								searchText: selectedKeys[0],
								searchedColumn: dataIndex,
							});
						}}
					>
						Filter
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
		),
		onFilter: (value, record) =>
			record[dataIndex]
				? record[dataIndex]
						.toString()
						.toLowerCase()
						.includes(value.toLowerCase())
				: "",
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => this.searchInput.select(), 100);
			}
		},
		//     render: text =>
		//       this.state.searchedColumn === dataIndex ? (
		//         <Highlighter
		//           highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
		//           searchWords={[this.state.searchText]}
		//           autoEscape
		//           textToHighlight={text ? text.toString() : ''}
		//         />
		//       ) : (
		//         text
		//       ),
		//
	});

	handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		this.setState({
			searchText: selectedKeys[0],
			searchedColumn: dataIndex,
		});
	};

	handleReset = (clearFilters) => {
		clearFilters();
		this.setState({ searchText: "" });
	};

	render() {
		const { visible } = this.state;
		const { Panel } = Collapse;
	 	const pagination= [{
			current: 1,
			pageSize: 5,
		  }];
		const columns = [
			{
				title: "Vintage",
				dataIndex: "vintage",
				key: "vintage",
				//   width: '30%',
				//   ...this.getColumnSearchProps('name'),
				responsive: ["sm"],
			},
			{
				title: "Wine",
				dataIndex: "wine",
				key: "wine",
				//   width: '20%',
				...this.getColumnSearchProps("wine"),
				responsive: ["sm"],
			},
			{
				title: "Net Price",
				dataIndex: "price",
				key: "price",
				sorter: (a, b) => a.price - b.price,
				sortDirections: ["descend", "ascend"],
				responsive: ["sm"],
			},
			{
				title: "Wines",
				render: (record) => (
					<React.Fragment>
						{record.vintage}
						<br />
						{record.wine}
						<br />
						{record.quantity}
					</React.Fragment>
				),
				width: "60%",
				align: "left",
				...this.getColumnSearchProps("wine"),
				responsive: ["xs"],
			},
			{
				title: "Net Price",
				render: (record) => (
					<React.Fragment>
						{record.price}
						<br />
						{record.cart}
					</React.Fragment>
				),
				sorter: (a, b) => a.price - b.price,
				sortDirections: ["descend", "ascend"],
				width: "40%",
				align: "right",
				responsive: ["xs"],
			},
			{
				title: "Quantity",
				dataIndex: "quantity",
				key: "quantity",
				responsive: ["sm"],
			},
			{
				title: "",
				dataIndex: "cart",
				key: "cart",
				responsive: ["sm"],

				// render: (text,record) => <a>{record.quantity.value}</a>,
			},
		];
		return (
			<>
				<Row>
					<Col xs={24} lg={{ span: 4, offset: 3 }} className="filter">
						<Button className="mobile" type="primary" onClick={this.showDrawer}>
							Filters
						</Button>
						<div className="desktop">
							<h5
								style={{ fontFamily: "Jost", fontWeight: 500, float: "left" }}
							>
								Filters
							</h5>
							<Divider />

							<h6 style={{ fontFamily: "Jost", fontWeight: 400 }}>Wines</h6>
							<Collapse bordered={false} accordion>
								{this.state.categoriesMap &&
									Array.from(this.state.categoriesMap).map(
										([key, value], ind) => {
											return (
												<Panel
													header={this.state.name_idMap.get(key).name}
													key={ind}
												>
													{value.map((item, i) => {
														return (
															<div key={i}>
																<Checkbox
																	checked={
																		sessionStorage.getItem("filters") != null &&
																		sessionStorage
																			.getItem("filters")
																			.includes(item.name)
																	}
																	onChange={() => this.handleFilter(item.name)}
																>
																	{" "}
																	{item.name}
																</Checkbox>
															</div>
														);
													})}
												</Panel>
											);
										}
									)}
								{/* <Panel header="Burgundy" key="1">
									<Checkbox> Antoine Jobard</Checkbox>
									<br />
									<Checkbox> Bachelet-Monnot </Checkbox>
									<br />
									<Checkbox> Ballot-Millot </Checkbox>
									<br />
									<Checkbox> Bernard Moreau </Checkbox>
									<br />
									<Checkbox> Berthaut-Gerbet </Checkbox>
									<br />
									<Checkbox> Caroline Morey </Checkbox>
									<br />
									<Checkbox> David Duband </Checkbox>
								</Panel> */}
								{/* <Panel header="Champagne" key="2"></Panel>
								<Panel header="Beaujolais" key="3"></Panel>
								<Panel header="Loirze" key="4"></Panel>
								<Panel header="Rhone" key="5"></Panel>
								<Panel header="The New Spain" key="6"></Panel> */}
							</Collapse>
							<h6
								className="Vintage"
								style={{
									fontFamily: "Jost",
									fontWeight: 400,
									paddingTop: "25px",
								}}
							>
								Vintage
							</h6>
							{this.state.vintage &&
								this.state.vintage.map((vin, ind) => {
									return (
										<div key={ind}>
											<Checkbox
												checked={
													sessionStorage.getItem("filters") != null &&
													sessionStorage.getItem("filters").includes(vin.name)
												}
												onChange={() => this.handleFilter(vin.name)}
											>
												{vin.name}
											</Checkbox>
											<br />
										</div>
									);
								})}
							{/* <Checkbox>2015</Checkbox>
							<br />
							<Checkbox>2016</Checkbox>
							<br />
							<Checkbox>2017</Checkbox>
							<br />
							<Checkbox>2018</Checkbox>
							<br />
							<Checkbox>2019</Checkbox> */}
						</div>
						<Drawer
							title="Filters"
							placement="left"
							closable={false}
							onClose={this.onClose}
							visible={visible}
						>
							<h6 style={{ fontFamily: "Jost", fontWeight: 400 }}>Wines</h6>
							<Collapse bordered={false} accordion>
								{this.state.categoriesMap &&
									Array.from(this.state.categoriesMap).map(
										([key, value], ind) => {
											return (
												<Panel
													header={this.state.name_idMap.get(key).name}
													key={ind}
												>
													{value.map((item, i) => {
														return (
															<div key={i}>
																<Checkbox
																	checked={
																		sessionStorage.getItem("filters") != null &&
																		sessionStorage
																			.getItem("filters")
																			.includes(item.name)
																	}
																	onChange={() => this.handleFilter(item.name)}
																>
																	{" "}
																	{item.name}
																</Checkbox>
															</div>
														);
													})}
												</Panel>
											);
										}
									)}
								{/* <Panel header="Burgundy" key="1">
									<Checkbox> Antoine Jobard</Checkbox>
									<br />
									<Checkbox> Bachelet-Monnot </Checkbox>
									<br />
									<Checkbox> Ballot-Millot </Checkbox>
									<br />
									<Checkbox> Bernard Moreau </Checkbox>
									<br />
									<Checkbox> Berthaut-Gerbet </Checkbox>
									<br />
									<Checkbox> Caroline Morey </Checkbox>
									<br />
									<Checkbox> David Duband </Checkbox>
								</Panel>
								<Panel header="Champagne" key="2"></Panel>
								<Panel header="Beaujolais" key="3"></Panel>
								<Panel header="Loirze" key="4"></Panel>
								<Panel header="Rhone" key="5"></Panel>
								<Panel header="The New Spain" key="6"></Panel> */}
							</Collapse>
							<h6
								style={{
									fontFamily: "Jost",
									fontWeight: 400,
									paddingTop: "25px",
								}}
							>
								Vintage
							</h6>
							{this.state.vintage &&
								this.state.vintage.map((vin, ind) => {
									return (
										<div key={ind}>
											<Checkbox
												checked={
													sessionStorage.getItem("filters") != null &&
													sessionStorage.getItem("filters").includes(vin.name)
												}
												onChange={() => this.handleFilter(vin.name)}
											>
												{vin.name}
											</Checkbox>
											<br />
										</div>
									);
								})}
							{/* <Checkbox>2015</Checkbox>
							<br />
							<Checkbox>2016</Checkbox>
							<br />
							<Checkbox>2017</Checkbox>
							<br />
							<Checkbox>2018</Checkbox>
							<br />
							<Checkbox>2019</Checkbox> */}
						</Drawer>
					</Col>
					<Col xs={24} lg={14}>
						<Table
							className="Pricelist"
							columns={columns}
 							pagination={{pageSize:10, pageSizeOptions: ['5', '20', '30', '40'] }} 
							dataSource={this.state.wine}
						/>
					</Col>
				</Row>
			</>
		);
	}
}

export default PriceListing;
