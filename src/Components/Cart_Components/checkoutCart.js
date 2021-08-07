import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Table} from 'antd'
import axios from "axios";


const columns = [
    {
      title: 'Items',
      dataIndex: 'product_name',
     },
    {
      title: 'Product Price',
       dataIndex: 'product_price',
     },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
        title: 'Total Price',
        dataIndex: 'total',
      },
  ];

const CheckOutCart = () => {
	const token = localStorage.getItem("token");
	const [cart, setCart] = useState([]);
	const [notAllowed,setnotAllowed] = useState(true);
	const [subTotal,setsubTotal] = useState('');

	const handleFetch = async () => {
		var config = {
 			headers: {
			  letscms_token: token,
			  "Content-Type": "application/json",
		  },
 		  };
		axios.post( '/wp-json/letscms/v1/cart',config)
		.then(res => {
			const result1 = res.data;
			console.log(result1,"dd")
		})
	 
		const res = await fetch(
			"/wp-json/letscms/v1/cart?coupons[]=GET15&coupons[]=GET50",
			{
				headers: {
					letscms_token: token,
				},
			}
		);
		const cartjson = await res.json();
		if(cartjson.status === false){
			setnotAllowed(false)
		}
		if (cartjson.data == undefined) return;
		// console.log(cartjson.data.cart_items);
		const newCart = cartjson.data.cart_items.map((item) => {
			return {
				...item,
				total: (Number(item.product_price) * Number(item.quantity)).toString(),
			};
		});
		
		// setCart(cartjson.data.cart_items);
		setsubTotal(cartjson.data.cart_totals.subtotal);
        console.log(newCart);

		setCart(newCart);
	};

	useEffect(() => {
		handleFetch();
		if(token==null){
			setnotAllowed(false)
		}
	}, []);

	  

	return (
		<>
       
			<section className="plr my-5">
				{/* <h3 className="text-danger fwl py-4">
					Cart Items ({cart ? cart.length : 0})
				</h3> */}
				<div className="row">
                <Table
                columns={columns}
                bordered
                dataSource={cart}
                pagination={{ position: ['none','none'] }}
                 footer={() =><a style={{float:'right',paddingRight:'11%', fontWeight:'bold'}}>Subtotal - {subTotal}</a>}
                 />					 
				</div> 
			</section>
 		</>
	);
};

export default CheckOutCart;