import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav1 from "../Components/Nav1.js";
import Nav2 from "../Components/Nav2";
import Footer from "../Components/Footer";

const Cart = () => {
	const token = localStorage.getItem("token");
	const [cart, setCart] = useState([]);
	const handleFetch = async () => {
		const res = await fetch(
			"/wp-json/letscms/v1/cart?coupons[]=GET15&coupons[]=GET50",
			{
				headers: {
					letscms_token: token,
				},
			}
		);
		const cartjson = await res.json();
		if (cartjson.data == undefined) return;
		// console.log(cartjson.data.cart_items);
		const newCart = cartjson.data.cart_items.map((item) => {
			return {
				...item,
				total: (Number(item.product_price) * Number(item.quantity)).toString(),
			};
		});
		// setCart(cartjson.data.cart_items);
		console.log(newCart);
		setCart(newCart);
	};

	useEffect(() => {
		handleFetch();
	}, []);

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
		console.log(response);

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
		// console.log(response);
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
		setCart(newCart);
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

		const newCart = cart.filter((item) => item.product_id !== id);
		setCart(newCart);
	};

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
									<div className="col-3 text-end">$ {item.total}</div>
									<div className="col-2">
										<p></p>
									</div>
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
					<div className="col-12 d-flex justify-content-end">
						<button
							type="button"
							className="btn btn-secondary my-4"
							style={{ borderRadius: "25px", width: "200px", margin: "20px" }}
						>
							Continue Shopping
						</button>
						<Link to="/checkout">
							<button
								type="button"
								className="btn btn-danger my-4"
								style={{ borderRadius: "25px", width: "200px", margin: "20px" }}
							>
								Proceed To Checkout
							</button>
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Cart;
