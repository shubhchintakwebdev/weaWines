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
	InputNumber,
} from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { message } from 'antd';
import Login from '../Login'
 var FormData = require("form-data");
var quant = [];
const token = localStorage.getItem("token");
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
		"/wp-json/letscms/v1/cart/add-item/",
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
				letscms_token: token,
			},
			body: JSON.stringify({
				product_id:  value[1],
				quantity:value[0],
			}),
		}
	);
	const data = await res.json();
 
	  const result = data;
	  console.log(result)

	  if(result.status===true){
		quant = 0
		message.success({
			content: `Item added to cart!`,
			className: 'custom-class',
			style: {
			  marginTop: '5vh',
			},
		  });
	  }
	  if(result.status===false){
		message.error({
			content: `Add Quantity!`,
			className: 'custom-class',
			style: {
			  marginTop: '5vh',
			},
		  });
	  }
 
}

const setCart = (value) =>{
	console.log(value)
	if(token===null){
		message.error({
			content: `Please Login!`,
			className: 'custom-class',
			style: {
			  marginTop: '5vh',
			},
		  });
	}
	handleCart(value)
}

class PriceListing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: "",
			searchedColumn: "",
			wine: [],
			value: 0,
			setLogin:true
		};
	}

	decrease = () => {
		this.setState({ value: this.state.value - 1 });
	};

	increase = () => {
		this.setState({ value: this.state.value + 1 });
	};

	
	 
	 handleItems = async () => {
		 
		const res = await fetch(
			"https://weawines.shubhchintak.co/wp-json/letscms/v1/products");
		const data = await res.json();
		const list = []
		for (let i = 0; i < data.data.products.length; i++) {
			list.push({
				key: data.data.products[i].id,
				wine: data.data.products[i].name,
				price: data.data.products[i].price,
				vintage: data.data.products[i].type,
			});
		}
		// console.log(list);
		// this.setState({ wine: list });
		Object.keys(list).map(function (object) {
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
				<span><ShoppingOutlined/>	Add to Cart </span>
				</Button>
			);
		});
		// console.log(list);
	this.setState({
		wine: list
	});
	};

	componentDidMount() {
		const onChangeQuantity = (value) => {
			console.log(value);
		};
		
		this.handleItems()
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
		const { Panel } = Collapse;
		const columns = [
			{
				title: "Vintage",
				dataIndex: "vintage",
				key: "vintage",
				//   width: '30%',
				//   ...this.getColumnSearchProps('name'),
				responsive: ["sm"]

			},
			{
				title: "Wine",
				dataIndex: "wine",
				key: "wine",
				//   width: '20%',
				...this.getColumnSearchProps("wine"),
				responsive: ["sm"]

			},
			{
				title: "Net Price",
				dataIndex: "price",
				key: "price",
				sorter: (a, b) => a.price - b.price,
				sortDirections: ["descend", "ascend"],
				responsive: ["sm"]

			},
			{
				title: "Wines",
				render: (record) => (
				<React.Fragment>
					{record.vintage}<br/>
					{record.wine}<br/>
					{record.quantity}
					</React.Fragment>
				),
				width:'60%',
				align: 'left',
				...this.getColumnSearchProps("wine"),
				responsive: ["xs"]
			},
			{
				title: "Net Price",
				render: (record) => (
				<React.Fragment>
					{record.price}<br/>
					{record.cart}
				</React.Fragment>
				),
				sorter: (a, b) => a.price - b.price,
				sortDirections: ["descend", "ascend"],
				width:'40%',
				align: 'right',
				responsive: ["xs"]
			},
			{
				title: "Quantity",
				dataIndex: "quantity",
				key: "quantity",
				responsive: ["sm"]

			},
			{
				title: "",
				dataIndex: "cart",
				key: "cart",
				responsive: ["sm"]

				// render: (text,record) => <a>{record.quantity.value}</a>,
			},
		];
		return (
			<>
				<Row>
					<Col xs={24} lg={{span:4, offset:3}}  className="filter">
						<h5 style={{ fontFamily: "Jost", fontWeight: 500, float: "left" }}>
							Filters
						</h5>
						<Divider />
						<Row>
							<Col xs={12} lg={24}>
						<h6 style={{ fontFamily: "Jost", fontWeight: 400 }}>Wines</h6>
						<Collapse bordered={false} accordion>
							<Panel header="Burgundy" key="1">
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
							<Panel header="The New Spain" key="6"></Panel>
						</Collapse>
						</Col>
						<Col xs={{span:10, offset:2}} lg={24}>
						<h6 className="Vintage" style={{ fontFamily: "Jost", fontWeight: 400, paddingTop:"25px" }}>Vintage</h6>
						<Checkbox>2015</Checkbox>
						<br />
						<Checkbox>2016</Checkbox>
						<br />
						<Checkbox>2017</Checkbox>
						<br />
						<Checkbox>2018</Checkbox>
						<br />
						<Checkbox>2019</Checkbox>
						</Col>
						</Row>
					</Col>
					<Col xs={24} lg={14} >
						<Table className="Pricelist" columns={columns} dataSource={this.state.wine} />
					</Col>
				</Row>
			</>
		);
	}
}

export default PriceListing;
