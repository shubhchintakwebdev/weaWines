import React, { useEffect, useState,Component } from "react";
import { Link } from "react-router-dom";
 import axios from "axios";
import "./table.css"
import {  Form, Input} from 'antd';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
 
	
const token = localStorage.getItem("token");
var itemsList =[]
var couponCode
var coupons
export default class CheckOutCart extends Component {
  constructor(props) {
    super(props);
    this.retrieveOrders = this.retrieveOrders.bind(this); 
    this.state = {
      sub: "",
      cart:[],
      coupon:"",
      discount:"",
      total:"",
      couponApplied:true
    };
  }
   componentDidMount() {
      couponCode = window.location.pathname.split('/')
    
         this.retrieveOrders();
  }
 
  retrieveOrders = async () => {
    const res = await fetch(
        `/wp-json/letscms/v1/cart?coupons[]=${coupons}`,
        {
            headers: {
                letscms_token: token,
            },
        }
    );
    if(couponCode[1]==='checkout'){
        itemsList =[]
        coupons=""
    }
    const cartjson = await res.json();
    console.log(cartjson)
         const subtotal = '$ ' +cartjson.data.cart_totals.subtotal
    for(var j=0;j<cartjson.data.cart_items.length;j++){
            itemsList.push({
            product_name: cartjson.data.cart_items[j].product_name,
            product_price:'$ '+cartjson.data.cart_items[j].product_price,
            quantity:cartjson.data.cart_items[j].quantity, 
            line_subtotal:'$ '+cartjson.data.cart_items[j].line_subtotal 
        })
        }
         const dcount = '$ ' +cartjson.data.cart_totals.discount_total;
         const total = '$ ' +cartjson.data.cart_totals.total

      console.log(itemsList)
        this.setState({
            cart:itemsList,
            sub:subtotal,
            discount:dcount,
            total:total
        })
   
    console.log(this.state.cart)
        
  }
   
   handleCoupon = async(couponValue) =>{
		var co;
		if(couponValue==='1'){
			 co = this.state.coupon
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
	 
		if (cartjson.data === undefined) return;
		// console.log(cartjson.data.cart_items);
    for(var j=0;j<cartjson.data.cart_items.length;j++){
      itemsList.push({
      product_name: cartjson.data.cart_items[j].product_name,
      product_price:'$ '+cartjson.data.cart_items[j].product_price,
      quantity:cartjson.data.cart_items[j].quantity, 
      line_subtotal:'$ '+cartjson.data.cart_items[j].line_subtotal 
  })
  }
		const subtotal = '$ ' + cartjson.data.cart_totals.total;
		const dcount =  '$ ' + cartjson.data.cart_totals.discount_total;
     const total = '$ ' +cartjson.data.cart_totals.total

		this.setState({
      cart:itemsList,
      sub:subtotal,
      discount:dcount,
      total:total
    })
		// setCart(cartjson.data.cart_items);
		console.log(cartjson);
  	}


  render() {
     
    return (
        <>
       
        <section className="plr my-5">
          
            <div className="row">
            <h3  style={{paddingBottom:"10px",fontWeight:"350"}} className="text-dark fwl  pb">Order Information</h3>
            
           
                <Table id='orders' className="" >
                        <Thead>
                            <Tr>
                            <Th>Items</Th>
                             <Th>Product Price</Th>
                             <Th>Quantity</Th>
                            <Th>Total Price</Th>
                            </Tr>
                        </Thead>
                         <Tbody>
            
                         {this.state.cart.map((item) => (
                            <Tr>
                             {Object.values(item).map((val) => (
                                <Td>{val}</Td>
                            ))}            
                            </Tr>
                        ))}
                        
                        </Tbody>
                        <tfoot>
                            <Tr>
                              <Th className="smhide">
                               </Th>
                            <Th className="smhide"> </Th>
                            <Th className="smhide"> </Th>
                            <Th>
                              Discount - {this.state.discount} <br/>
                              Subtotal- {this.state.total} 
                            </Th>

                             </Tr>
                        </tfoot>
                        </Table>			 
            </div> 
        </section>
     </>
    );
  }
}
