import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav1 from "../Components/Nav1.js";
import Nav2 from "../Components/Nav2";
import Footer from "../Components/Footer";
import axios from "axios";
import {  Form, Input, message} from 'antd';
import Empty_cart from '../Images/cart_empty.png';
import '../App.css'
var emp;
const Cart = () => {
	const token = localStorage.getItem("token");
	const [cart, setCart] = useState([]);
	const [notAllowed,setnotAllowed] = useState(true);
	const [emptyCart, setEmptyCart] = useState(true);
	const [cartValue, setCartValue] = useState(true);
	const [coupon, setCoupon] = useState("");
	const [discount, setDiscount] = useState("");
	const [total, setTotal] = useState("");
	const [subtotal, setSubTotal] = useState("");
	const [couponApplied, setcouponApplied]=useState(false);
	const handleFetch = async () => {
		const res = await fetch(
			"/wp-json/letscms/v1/cart/",
			{
				headers: {
					letscms_token: token,
				},
			}
		);
		const cartjson = await res.json();
		if(cartjson.status === false){
			setnotAllowed(false)
			setEmptyCart(false)
		}
		if (cartjson.data == undefined) return;
		// console.log(cartjson.data.cart_items);
		const newCart = cartjson.data.cart_items.map((item) => {
			return {
				...item,
				total: (Number(item.product_price) * Number(item.quantity)).toString(),
			};
		});
		const subtotal1 = cartjson.data.cart_totals.subtotal;
		const total1 = cartjson.data.cart_totals.total;
		const dcount = cartjson.data.cart_totals.discount_total;
		setDiscount(dcount)
		setSubTotal(subtotal1)
		setTotal(total1)
		// setCart(cartjson.data.cart_items);
		console.log(newCart);
		setCart(newCart);
	};

	useEffect(() => {
		handleFetch();
		if(token==null){
			setnotAllowed(false)
		}
		
	}, []);

	const handleCoupon = async(couponValue) =>{
		var co;
		if(couponValue==='1'){
			 co = coupon
		}
		else{
			 co =""
		}
		const res = await fetch(
			`/wp-json/letscms/v1/cart/?coupons[]=${co}`,
			{
				headers: {
					letscms_token: token,
				},
			}
		);
		const cartjson = await res.json();
		if(cartjson.status === false){
			setnotAllowed(false)
			setEmptyCart(false)
		}
		if (cartjson.data == undefined) return;
		const validCoupon = cartjson.coupon_status

		console.log(cartjson)
 		if(validCoupon===false){
			message.warning('Invalid Coupon');
		 }
		 else{
			message.success('Coupon Applied');
		 }
		// console.log(cartjson.data.cart_items);
		const newCart = cartjson.data.cart_items.map((item) => {
			return {
				...item,
				total: (Number(item.product_price) * Number(item.quantity)).toString(),
			};
		});
		const subtotal1 = cartjson.data.cart_totals.subtotal;
		const total1 = cartjson.data.cart_totals.total;
		const dcount = cartjson.data.cart_totals.discount_total;
		
		if(dcount ===0){
			setcouponApplied(false)
		}
		else{
			setcouponApplied(true)
		}
		setDiscount(dcount)
		setTotal(total1)
		setSubTotal(subtotal1)
		// setCart(cartjson.data.cart_items);
		console.log(cartjson);
		setCart(newCart);
	}

	const removeCoupon = async(couponValue) =>{
		var co;
		if(couponValue==='1'){
			 co = coupon
		}
		else{
			 co =""
		}
		const res = await fetch(
			`/wp-json/letscms/v1/cart/?coupons[]=${co}`,
			{
				headers: {
					letscms_token: token,
				},
			}
		);
		const cartjson = await res.json();
		if(cartjson.status === false){
			setnotAllowed(false)
			setEmptyCart(false)
		}
		if (cartjson.data == undefined) return;
		const validCoupon = cartjson.coupon_status

		console.log(cartjson)
 		if(validCoupon===false){
			message.error('Coupon Removed');
		 }
		 else{
			message.success('Coupon Applied');
		 }
		// console.log(cartjson.data.cart_items);
		const newCart = cartjson.data.cart_items.map((item) => {
			return {
				...item,
				total: (Number(item.product_price) * Number(item.quantity)).toString(),
			};
		});
		const subtotal1 = cartjson.data.cart_totals.subtotal;
		const total1 = cartjson.data.cart_totals.total;
		const dcount = cartjson.data.cart_totals.discount_total;
		
		if(dcount ===0){
			setcouponApplied(false)
		}
		else{
			setcouponApplied(true)
		}
		setDiscount(dcount)
		setTotal(total1)
		setSubTotal(subtotal1)
		// setCart(cartjson.data.cart_items);
		console.log(cartjson);
		setCart(newCart);
	}


	const handleIncrement = async (Item) => {
        const id = Item.product_id;
		const item_key = Item.key;
		const Quantity = (Number(Item.quantity) + 1).toString();

        const newCart = cart.map((item) => {
            if (item.product_id == id) {
                return {
                    ...item,
                    quantity: Quantity,
                    total: (
                        (Number(item.quantity) + 1) *
                        Number(item.product_price)
                    ).toString(),
                };
            }
            return item;
        });
        setCart(newCart);

		const formdata = new FormData();
		formdata.append(`cart_data[${item_key}]`, `${Quantity}`);

		const res = await fetch("/wp-json/letscms/v1/cart/update-quantities", {
			method: "post",
			headers: {
				letscms_token: token,
			},
			body: formdata,
		});

		const response = await res.json();
		
		if(discount){
			handleCoupon('1')
		}
		else{
			handleCoupon('0')
		}
 		console.log(response);
		EmpCart()

	};

	
	const handleDecrement = async (Item) => {
		const id = Item.product_id;
		const item_key = Item.key;
		const Quantity = (Number(Item.quantity) - 1).toString();

		if (Quantity == 0) {
			handleRemoveFromCart(Item);
			return;
		}

		const formdata = new FormData();
		formdata.append(`cart_data[${item_key}]`, `${Quantity}`);

		const res = await fetch("/wp-json/letscms/v1/cart/update-quantities", {
			method: "post",
			headers: {
				letscms_token: token,
			},
			body: formdata,
		});

		const response = await res.json();
		console.log(response.data.cart_item_count);
		
		if(response.data.cart_item_count===0){
				emp=0
		}
		if(discount){
			handleCoupon('1')
		}
		else{
			handleCoupon('0')
		}
		const newCart = cart.map((item) => {
			if (item.product_id == id) {
				return {
					...item,
					// quantity: (Number(item.quantity) - 1).toString(),
					quantity: Quantity,
					total: (Quantity * Number(item.product_price)).toString(),
				};
			}
			return item;
		});
		
		console.log(newCart)
		setCart(newCart);
		EmpCart()

	};
	const handleRemoveFromCart = async (Item) => {
		const id = Item.product_id;
		const item_key = Item.key;

		const res = await fetch(
			`/wp-json/letscms/v1/cart/remove-item/${item_key}`,
			{
				method: "post",
				headers: {
					letscms_token: token,
				},
			}
		);

		const response = await res.json();
		console.log(response);
		if(discount){
			handleCoupon('1')
		}
		else{
			handleCoupon('0')
		}
		const newCart = cart.filter((item) => item.product_id !== id);
		setCart(newCart);
		if(newCart.length===0){
			setEmptyCart(false)
		}
		EmpCart()
	};

	const EmpCart = () =>{
		console.log(cart)
 	} 

	return (
		<>
			<Nav1 />
			<Nav2 />
			<div className="position-relative">
				<div className="op2"></div>
				<div className="aui2 d-flex justify-content-center align-items-center">
					<h1 className="text-uppercase text-light fwl" style={{ zIndex: 5 }}>
						Cart
					</h1>
				</div>
			</div>
			<section className="plr my-5">
				<h3 className="text-danger fwl py-4">
					Cart Items ({cart ? cart.length : 0})
				</h3>
				{!emptyCart ? (
				<div style={{textAlign:'center'}}>
				<img height="200px" className="emptycart" src={Empty_cart} alt="empty_cart"></img>
				<br/><br/>
				<Link to={"/pricelist"}>
						<button
							type="button"
							className="btn btn-secondary my-4"
							style={{ borderRadius: "25px", width: "200px", margin: "20px" }}
						>
							Continue Shopping
						</button>
				 </Link>
				</div>):(
					<>
				<div className="row">
					<div className="col-4">
						<p>Item and Details</p>
					</div>
					<div className="col-4 text-center">
						<p>Quantity</p>
					</div>
					<div className="col-4 text-end">
						<p>Total Price</p>
					</div>
				</div>
				<hr />
				<div className="row">
					{cart &&
						cart.map((item, ind) => {
							return (
								<>
									<div className="col-3">
										<p>{item.product_name}</p>
										<p className="text-danger cp">
											<u onClick={() => handleRemoveFromCart(item)}>Remove</u>
										</p>
									</div>
									<div
										className="col-6 text-center"
										// style={{
										// 	display: "flex",
										// 	justifyContent: "center",
										// 	background: "blue",
										//     paddingRight: "0%"
										// }}
									>
										<button
											style={{ border: "none", background: "transparent" }}
											onClick={() => handleDecrement(item)}
										>
											-
										</button>
										{"  "}
										{item.quantity}
										{"  "}
										<button
											style={{ border: "none", background: 'transparent' }}
											onClick={() => handleIncrement(item)}
										>
											+
										</button>
									</div>
									<div className="col-3 text-center" style={{paddingLeft:'20%'}}>$ {item.total}</div>
								 
								</>
							);
						})}
					{/* <div className="col-2">
						<p>Measurelt 1er belly</p>
						<p>Vintage : 2018</p>
						<p>$S 148</p>
					</div> */}
					{/* <div className="col-2">
						<p>Measurelt 1er belly</p>
						<p>Vintage : 2018</p>
						<p>$S 148</p>
						<p className="text-danger cp">
							<u>Remove</u>
						</p>
					</div>
					<div className="col-4 text-center">- 1 +</div>
					<div className="col-4 text-end">$S 148</div> */}
				</div>
				<hr />
				<div className="row">
					<div className="col-lg-3 col-xs-6">
							{!couponApplied &&
                              <Form.Item 
                                name="Coupon">
                                <Input 
                                defaultValue={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                placeholder="Coupon" />
                            </Form.Item>}
							</div>
						<div className="col-lg-3 col-xs-6">
						{!couponApplied && <button
							type="button"
							className="btn btn-danger"
							onClick={() => handleCoupon('1')}
							style={{ borderRadius: "25px", width: "100px", margin: "0" }}
						>
							Apply
						</button> }
						</div>

						<div className="col-sm-4">
						</div>
						<div className="col-md-2">
							<span className="subtotal cartTotals">Subtotal - </span>${subtotal} <br/>
							<span className="cartTotals">Discount -</span> ${discount} <br/>
							<span className="text-danger cp">
										{couponApplied &&	<u 	onClick={() => removeCoupon('0')}>Remove Coupon</u>}
										</span> <br/>
						<span className="cartTotals">	Total -</span> ${total}
						</div>
					</div>
					<div className="col-12 d-flex justify-content-end">
					<Link to={"/pricelist"}>
						<button
							type="button"
							className="btn btn-secondary my-4"
							style={{ borderRadius: "25px", width: "200px", margin: "20px" }}
						>
							Continue Shopping
						</button> </Link>
						{/* <div  className="hideBr"> */}
						<br/>
						{/* </div> */}
					{coupon==="" ? (
					
						<Link to={`/checkout/0`}>
							<button
								type="button"
								className="btn btn-danger my-4"
								style={{ borderRadius: "25px", width: "200px", margin: "20px" }}
							>
								Proceed To Checkout
							</button>
						</Link> ) :(
							<Link to={`/checkout/${coupon}`}>
							<button
								type="button"
								className="btn btn-danger my-4"
								style={{ borderRadius: "25px", width: "200px", margin: "20px" }}
							>
								Proceed To Checkout
							</button>
						</Link>		
						)}
				 
					</div>
				</>
			
				)}
 			</section>
			<Footer />
		</>
	);
};

export default Cart;