import React from "react";
import { render } from "react-dom";
import { SearchOutlined } from "@ant-design/icons";
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

// const PriceList = () => {
//     return (
//        <>
//            <Nav1 />
//            <Nav2 />
//            <div className="position-relative">
//                <div className="op"></div>
//                <div className="aui d-flex justify-content-center align-items-center">
//                    <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Price List</h1>
//                </div>
//            </div>
//            <Footer />
//        </>
//     )
// }

// export default PriceList

var FormData = require("form-data");
const list = [
	{
		key: "1",
		wine: "John Brown",
		price: 32,
		vintage: "New York",
	},
	{
		key: "2",
		wine: "Joe Black",
		price: 42,
		vintage: "London",
	},
	{
		key: "3",
		wine: "Jim Green",
		price: 32,
		vintage: "Sidney",
	},
	{
		key: "4",
		wine: "Jim Red",
		price: 32,
		vintage: "London",
	},
];

var quant = [];

function handleCart(value) {
	var data = new FormData();
	data.append("product_id", value[1]);
	data.append("quantity", value[0]);
	console.log(data);
	// var config = {
	//   method: 'post',
	//   url: 'https://weawines.shubhchintak.co/wp-json/letscms/v1/cart/add-item',
	//   headers: {
	//     ...data.getHeaders()
	//   },
	//   data : data
	// };

	// axios(config)
	// .then(function (response) {
	//   console.log(JSON.stringify(response.data));
	// })
	// .catch(function (error) {
	//   console.log(error);
	// });
}

class PriceListing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: "",
			searchedColumn: "",
			wine: [],
			value: 0,
		};
	}

	decrease = () => {
		this.setState({ value: this.state.value - 1 });
	};

	increase = () => {
		this.setState({ value: this.state.value + 1 });
	};

	componentDidMount() {
		const onChangeQuantity = (value) => {
			console.log(value);
		};
		// axios.get("/wp-json/letscms/v1/products").then((response) => {
			// console.log(response.data.data.products)
      // console.log(list);
			// list = [];
			// for (let i = 0; i < response.data.data.products.length; i++) {
			// 	list.push({
			// 		key: response.data.data.products[i].id,
			// 		wine: response.data.data.products[i].name,
			// 		price: response.data.data.products[i].price,
			// 		vintage: response.data.data.products[i].type,
			// 	});
			// }
			// console.log(list);
			// this.setState({ wine: list });
		// });
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
				<button
					type="button"
					onClick={() => handleCart(quant)}
					className="btn btn-danger my-4"
					style={{
						backgroundColor: "#9b2120",
						color: "#ffffff",
						border: 0,
						borderRadius: "25px",
						width: "150px",
						margin: "20px",
					}}
				>
					Add to Cart
				</button>
			);
		});
		// console.log(list);
		this.setState({
			wine: list,
		});
		// console.log(this.state.wine);
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
			},
			{
				title: "Wine",
				dataIndex: "wine",
				key: "wine",
				//   width: '20%',
				...this.getColumnSearchProps("wine"),
			},
			{
				title: "Net Price",
				dataIndex: "price",
				key: "price",
				sorter: (a, b) => a.price - b.price,
				sortDirections: ["descend", "ascend"],
			},
			{
				title: "Quantity",
				dataIndex: "quantity",
				key: "quantity",
			},
			{
				title: "",
				dataIndex: "cart",
				key: "cart",
				// render: (text,record) => <a>{record.quantity.value}</a>,
			},
		];
		return (
			<>
				<Row>
					<Col span={4} offset="3" className="filter">
						<h2 style={{ fontFamily: "Jost", fontWeight: 500, float: "left" }}>
							Filters
						</h2>
						<Divider />
						<h3 style={{ fontFamily: "Jost", fontWeight: 400 }}>Wines</h3>
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
						<h3 style={{ fontFamily: "Jost", fontWeight: 400 }}>Vintage</h3>
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
					<Col span={14}>
						<Table columns={columns} dataSource={this.state.wine} />
					</Col>
				</Row>
			</>
		);
	}
}

export default PriceListing;
